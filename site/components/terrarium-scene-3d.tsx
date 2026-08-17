"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const SCENES = {
  hero: {
    path: "/models/hero-memory-terrarium.glb",
    camera: [0, 0.15, 7.4],
    rotation: [-0.1, -0.24, 0.02],
    scale: 1.28,
    lift: -0.02,
  },
  handoff: {
    path: "/models/handoff-trays.glb",
    camera: [0, 0.05, 6.6],
    rotation: [-0.08, 0.18, -0.01],
    scale: 1.38,
    lift: -0.06,
  },
  archive: {
    path: "/models/archive-file-garden.glb",
    camera: [0, 0.12, 7],
    rotation: [-0.08, -0.14, 0.02],
    scale: 1.22,
    lift: -0.04,
  },
} as const;

type TerrariumScene3DProps = {
  model: keyof typeof SCENES;
  className?: string;
};

type PointerState = {
  x: number;
  y: number;
};

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    child.geometry.dispose();
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      Object.values(material).forEach((value) => {
        if (value && typeof value === "object" && "dispose" in value) {
          (value as { dispose: () => void }).dispose();
        }
      });
      material.dispose();
    });
  });
}

export function TerrariumScene3D({ model, className = "" }: TerrariumScene3DProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = mountRef.current;
    if (!host) return;
    const hostElement: HTMLDivElement = host;
    const config = SCENES[model];

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    camera.position.set(config.camera[0], config.camera[1], config.camera[2]);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    hostElement.appendChild(renderer.domElement);

    const pointer: PointerState = { x: 0, y: 0 };
    const targetPointer: PointerState = { x: 0, y: 0 };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const anchor = new THREE.Group();
    anchor.rotation.set(config.rotation[0], config.rotation[1], config.rotation[2]);
    scene.add(anchor);

    const keyLight = new THREE.DirectionalLight("#fff1d8", 3.6);
    keyLight.position.set(3.8, 4.6, 4.2);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight("#fff8e7", "#9bcdb2", 2.25);
    scene.add(fillLight);

    const pulseLight = new THREE.PointLight("#ffc857", 2.9, 6.2, 1.4);
    pulseLight.position.set(-1.7, -0.45, 0.1);
    anchor.add(pulseLight);

    let loadedModel: THREE.Object3D | null = null;
    let disposed = false;
    const pulseObjects: THREE.Object3D[] = [];
    const floatingObjects: THREE.Object3D[] = [];

    const loader = new GLTFLoader();
    loader.load(
      config.path,
      async (gltf) => {
        if (disposed) {
          disposeObject(gltf.scene);
          return;
        }

        const loadedScene = gltf.scene;
        loadedScene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }

          const childName = child.name.toLowerCase();
          if (
            childName.includes("amber") ||
            childName.includes("pulse") ||
            childName.includes("bead")
          ) {
            pulseObjects.push(child);
          }

          if (
            childName.includes("folder") ||
            childName.includes("note") ||
            childName.includes("leaf") ||
            childName.includes("card")
          ) {
            child.userData.baseY = child.position.y;
            floatingObjects.push(child);
          }
        });

        const box = new THREE.Box3().setFromObject(loadedScene);
        const center = box.getCenter(new THREE.Vector3());
        loadedScene.position.sub(center);
        loadedScene.position.y += config.lift;
        loadedScene.scale.setScalar(config.scale);

        await renderer.compileAsync(loadedScene, camera, scene);
        if (disposed) {
          disposeObject(loadedScene);
          return;
        }

        loadedModel = loadedScene;
        anchor.add(loadedScene);
      },
      undefined,
      (error) => {
        console.error(`Failed to load ${config.path}`, error);
      },
    );

    function resize() {
      const width = hostElement.clientWidth;
      const height = hostElement.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hostElement);
    resize();

    function handlePointerMove(event: PointerEvent) {
      const rect = hostElement.getBoundingClientRect();
      targetPointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetPointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    hostElement.addEventListener("pointermove", handlePointerMove, { passive: true });

    let frame = 0;
    const startedAt = performance.now();

    function animate() {
      frame = window.requestAnimationFrame(animate);
      const t = (performance.now() - startedAt) / 1000;
      pointer.x += (targetPointer.x - pointer.x) * 0.055;
      pointer.y += (targetPointer.y - pointer.y) * 0.055;

      if (!prefersReducedMotion) {
        anchor.position.y = Math.sin(t * 0.62) * 0.04;
        anchor.rotation.y = config.rotation[1] + pointer.x * 0.12 + Math.sin(t * 0.45) * 0.02;
        anchor.rotation.x = config.rotation[0] - pointer.y * 0.035;
        pulseLight.intensity = 2.7 + Math.sin(t * 2.1) * 0.5;

        pulseObjects.forEach((object, index) => {
          const pulse = (Math.sin(t * 2.4 - index * 0.42) + 1) / 2;
          object.scale.setScalar(0.82 + pulse * 0.36);
        });

        floatingObjects.forEach((object, index) => {
          const baseY =
            typeof object.userData.baseY === "number" ? object.userData.baseY : object.position.y;
          object.position.y = baseY + Math.sin(t * 1.05 + index * 0.58) * 0.012;
        });
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      hostElement.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      hostElement.removeChild(renderer.domElement);
      if (loadedModel) {
        anchor.remove(loadedModel);
        disposeObject(loadedModel);
      }
      renderer.dispose();
    };
  }, [model]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className={`h-full min-h-[20rem] w-full ${className}`}
      data-testid={`terrarium-scene-${model}`}
    />
  );
}
