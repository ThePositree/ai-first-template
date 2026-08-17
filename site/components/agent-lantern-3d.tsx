"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type PointerState = {
  x: number;
  y: number;
};

function makeMat(color: string, roughness = 0.72, metalness = 0.08) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
  });
}

export function AgentLantern3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const host: HTMLDivElement = container;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0.25, 8.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    const pointer: PointerState = { x: 0, y: 0 };
    const targetPointer: PointerState = { x: 0, y: 0 };
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const group = new THREE.Group();
    group.rotation.set(-0.04, -0.25, 0.02);
    scene.add(group);

    const wood = makeMat("#5a3218", 0.78, 0.04);
    const brass = makeMat("#d9942e", 0.38, 0.36);
    const paper = makeMat("#f4dfba", 0.9, 0.02);
    const ink = makeMat("#261709", 0.66, 0.05);
    const shelfGreen = makeMat("#28351d", 0.75, 0.04);
    const glow = new THREE.MeshStandardMaterial({
      color: "#ffe3a1",
      emissive: "#ffb33c",
      emissiveIntensity: 1.85,
      roughness: 0.28,
      metalness: 0,
    });
    const warmGlass = new THREE.MeshPhysicalMaterial({
      color: "#fff0ca",
      emissive: "#ffc05a",
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.58,
      roughness: 0.16,
      metalness: 0,
      transmission: 0.2,
    });

    const cloak = new THREE.Mesh(new THREE.CapsuleGeometry(0.72, 1.08, 10, 18), paper);
    cloak.position.y = -0.82;
    cloak.scale.set(1.02, 1.08, 0.72);
    cloak.castShadow = true;
    group.add(cloak);

    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.67, 32, 18), wood);
    hood.position.y = 0.24;
    hood.scale.set(1.06, 0.82, 0.86);
    hood.castShadow = true;
    group.add(hood);

    const faceGlow = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 20), glow);
    faceGlow.position.set(0, 0.2, 0.38);
    group.add(faceGlow);

    const glass = new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 20), warmGlass);
    glass.position.set(0, 0.2, 0.38);
    group.add(glass);

    const rimTop = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.035, 10, 48), brass);
    rimTop.position.set(0, 0.42, 0.38);
    rimTop.rotation.x = Math.PI / 2;
    group.add(rimTop);

    const rimBottom = rimTop.clone();
    rimBottom.position.y = -0.04;
    group.add(rimBottom);

    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.46, 0.22, 32), brass);
    cap.position.y = 0.92;
    cap.castShadow = true;
    group.add(cap);

    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.026, 8, 32, Math.PI), brass);
    handle.position.y = 1.1;
    handle.rotation.z = Math.PI;
    group.add(handle);

    const leftArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.88, 8, 12), wood);
    leftArm.position.set(-0.72, -0.45, 0.06);
    leftArm.rotation.z = -0.75;
    leftArm.castShadow = true;
    group.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.74, 8, 12), wood);
    rightArm.position.set(0.71, -0.34, 0.02);
    rightArm.rotation.z = 0.9;
    rightArm.castShadow = true;
    group.add(rightArm);

    const bundle = new THREE.Group();
    bundle.position.set(-1.14, -0.84, 0.18);
    bundle.rotation.set(0.06, 0.2, -0.18);
    group.add(bundle);

    for (let i = 0; i < 4; i += 1) {
      const card = new THREE.Mesh(
        new THREE.BoxGeometry(0.64, 0.09, 0.42),
        i % 2 ? shelfGreen : paper,
      );
      card.position.set(0, i * 0.11, 0);
      card.castShadow = true;
      bundle.add(card);
    }

    const label = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.045, 0.05), brass);
    label.position.set(0.02, 0.42, 0.24);
    bundle.add(label);

    const key = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.022, 8, 24), brass);
    key.position.set(0.98, -0.92, 0.28);
    key.rotation.set(Math.PI / 2, 0.2, 0);
    group.add(key);

    const keyStem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.42, 0.06), brass);
    keyStem.position.set(0.98, -1.15, 0.28);
    group.add(keyStem);

    const shelf = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.16, 1.18), wood);
    shelf.position.set(0, -1.92, 0);
    shelf.receiveShadow = true;
    group.add(shelf);

    const backSign = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.42, 0.08), ink);
    backSign.position.set(1.14, -1.55, -0.38);
    backSign.rotation.y = -0.18;
    backSign.castShadow = true;
    group.add(backSign);

    const signBrass = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.06, 0.1), brass);
    signBrass.position.set(1.14, -1.55, -0.31);
    signBrass.rotation.y = -0.18;
    group.add(signBrass);

    const pointLight = new THREE.PointLight("#ffb33c", 7.5, 7, 1.8);
    pointLight.position.set(0, 0.2, 0.9);
    group.add(pointLight);

    const keyLight = new THREE.DirectionalLight("#fff0ca", 2.6);
    keyLight.position.set(3.2, 4.5, 4.2);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight("#fff0ca", "#5a3218", 2.1);
    scene.add(fillLight);

    const sparkleMat = new THREE.MeshBasicMaterial({
      color: "#ffe2a1",
      transparent: true,
      opacity: 0.84,
    });
    const sparkles: THREE.Mesh[] = [];
    for (let i = 0; i < 14; i += 1) {
      const sparkle = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.035 + (i % 3) * 0.012),
        sparkleMat,
      );
      const angle = (i / 14) * Math.PI * 2;
      sparkle.position.set(
        Math.cos(angle) * (1.2 + (i % 2) * 0.32),
        -0.1 + Math.sin(i) * 0.72,
        -0.24 + Math.sin(angle) * 0.34,
      );
      group.add(sparkle);
      sparkles.push(sparkle);
    }

    function resize() {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    function handlePointerMove(event: PointerEvent) {
      const rect = host.getBoundingClientRect();
      targetPointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetPointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    let frame = 0;
    const clock = new THREE.Clock();

    function animate() {
      frame = window.requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      pointer.x += (targetPointer.x - pointer.x) * 0.045;
      pointer.y += (targetPointer.y - pointer.y) * 0.045;

      if (!prefersReducedMotion) {
        group.position.y = Math.sin(t * 1.15) * 0.1;
        group.rotation.y = -0.26 + pointer.x * 0.2 + Math.sin(t * 0.7) * 0.06;
        group.rotation.x = -0.04 - pointer.y * 0.08;
        faceGlow.scale.setScalar(1 + Math.sin(t * 2.4) * 0.045);
        sparkles.forEach((sparkle, index) => {
          sparkle.rotation.y = t * (0.7 + index * 0.025);
          sparkle.position.y += Math.sin(t * 1.8 + index) * 0.0009;
        });
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      host.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object: THREE.Object3D) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute bottom-5 right-[-3rem] z-10 h-[38svh] min-h-[19rem] w-[72vw] max-w-[48rem] opacity-90 md:bottom-14 md:right-[-2rem] md:h-[58svh] md:w-[46vw] md:opacity-95 lg:right-6 lg:h-[62svh]"
      data-testid="agent-lantern-3d"
    />
  );
}
