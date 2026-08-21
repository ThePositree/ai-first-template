# Site Text Meanings

Тексты с текущей главной страницы `site` и смысл, который должен стоять за каждым из них.

| Текст | Что хотели сказать |
|---|---|
| `AI-first` | Название продукта и короткий якорь бренда в навигации. |
| `v0.1` | Сигнал ранней, простой, developer-first версии без лишнего маркетингового шума. |
| `How it works` | Навигация к объяснению принципа работы. |
| `Use cases` | Навигация к prompt-сценариям, где видно, как владелец говорит с агентом. |
| `Memory` | Навигация к структуре файлов памяти. |
| `GitHub` / `View on GitHub` | CTA для open-source аудитории: посмотреть проект и исходники. |
| `A tiny task tracker.` | Главный positioning: AI-first не AI SaaS, а маленький локальный трекер задач для агента. |
| `For your coding agent.` | Уточнение аудитории: инструмент сделан не для человека-менеджера, а для coding agent, который ведет состояние. |
| `Install AI-first into any repo and your agent gets a local place to track active work, approved backlog, ideas, decisions, and what changed.` | Объясняем пользу установки: агент получает постоянное место в репозитории для контекста работы. |
| `curl -fsSL https://ai-first.dev/install \| sh` | One-command install. Должно выглядеть просто: запустил команду, получил memory layer. |
| `Copy` / `Copied` | Убрать трение: пользователь может сразу скопировать команду или prompt. |
| `See how it works` | CTA для тех, кому нужно понять механизм перед установкой. |
| `LOCAL MARKDOWN` | Главный trust-сигнал: память хранится в обычных локальных Markdown-файлах. |
| `Plain files. No cloud.` | Снимаем страх облачного lock-in и скрытого состояния. |
| `ONE COMMAND` | Подчеркиваем простоту старта. |
| `Zero config required.` | Обещание: не надо настраивать отдельную систему управления задачами. |
| `AGENTS.MD HOOK` | Объясняем технический механизм handoff для будущих агентов. |
| `Every agent inherits context.` | Смысл hook: новый агент не начинает с нуля. |
| `LOCAL STATE` | Подчеркиваем, что рабочее состояние находится рядом с кодом. |
| `Files stay in your repo.` | Уточняем ownership: память физически остается в репозитории владельца. |
| `You steer.` | Владелец управляет направлением и approval. |
| `Ideas, direction, and approval stay with the owner.` | Граница контроля: агент не превращает идеи в работу без владельца. |
| `The agent maintains.` | Агент берет на себя рутину ведения состояния. |
| `Active work, backlog, ideas, and recent history stay current.` | Что именно поддерживает агент: task state и историю. |
| `The repo remembers.` | Репозиторий становится носителем памяти между сессиями. |
| `Local Markdown survives context windows, sessions, and model swaps.` | Память не зависит от окна контекста, текущего чата или конкретной модели. |
| `Philosophy` | Маркер секции с продуктовой причиной существования AI-first. |
| `Code is getting cheaper.` | Наблюдение: агенты удешевляют написание кода. |
| `Good ideas are not.` | Главная мысль: ценность смещается в выбор того, что строить. |
| `The problem` | Карточка формулирует проблему. |
| `Agents can write code.` | Стартовая предпосылка продукта. |
| `The harder part is deciding what deserves to exist. When code gets cheaper, judgment becomes the scarce resource.` | Объясняем, почему нужен memory/workflow слой, а не еще один генератор кода. |
| `The solution` | Карточка формулирует решение. |
| `AI-first keeps the useful workflows.` | AI-first сохраняет полезные owner-agent workflows как повторяемые паттерны. |
| `Prompts over local Markdown turn conversations, ideas, and decisions into project context your agent can maintain.` | Смысл: разговоры превращаются в поддерживаемый агентом контекст проекта. |
| `The result` | Карточка формулирует результат после установки. |
| `One install. Local Markdown.` | Короткое обещание: один раз установил, дальше все в локальных Markdown-файлах. |
| `Then keep building. Every future agent gets a handoff before it starts changing the repository.` | Не надо заново объяснять проект: будущий агент сначала читает handoff. |
| `Prompts` | Маркер секции с примерами owner-to-agent prompts. |
| `Use cases.` | Секция показывает, что делать с AI-first после установки. |
| `Bootstrap` | Сценарий: быстро завести память в уже существующем репозитории. |
| `Turn an existing repo into a first working memory.` | Агент читает кодовую базу и заполняет первые memory-файлы. |
| `Scan this codebase and fill the AI-first files with the product goal, current architecture, active work, risks, backlog candidates, and important decisions you can infer. Ask me before treating ideas as approved work.` | Prompt для первичного bootstrap: заполнить память, не утверждая идеи без владельца. |
| `Dashboard` | Сценарий: поверх Markdown можно попросить агента сделать визуальный UI. |
| `Make a beautiful tracker when you want one.` | AI-first не навязывает UI, но локальные файлы позволяют его построить. |
| `Build me a clean dashboard over the .ai-first Markdown files so I can review and edit active work, backlog, ideas, ADRs, and changelog in one UI.` | Prompt на создание dashboard для memory-файлов. |
| `Sort thoughts` | Сценарий: владелец говорит хаотично, агент структурирует. |
| `Speak messy. Let the agent organize it.` | Пользователь не обязан думать в формате таск-трекера. |
| `Take everything I just said, separate active work from backlog and loose ideas, then update the AI-first files. Ask before moving any idea into approved work.` | Prompt на разбор речи владельца в active work, backlog и ideas. |
| `Pick next` | Сценарий: использовать память для выбора следующей работы. |
| `Use memory as strategy, not storage.` | Память не просто архив, а источник решений о приоритетах. |
| `Read the AI-first memory and tell me which ideas look most valuable, which backlog items are stale, and what we should build next. Do not change files yet.` | Prompt на стратегический review без изменения файлов. |
| `Structure` | Маркер секции про файловое устройство. |
| `The installer adds an AGENTS.md hook.` | Объясняем основной механизм установки. |
| `The script creates .ai-first and injects a short handoff into the root AGENTS.md. That handoff tells every future agent to read the AI-first files before working.` | Деталь install flow: будущие агенты получают инструкцию читать память. |
| `Only AGENTS.md stays in the repo root. The tracker itself lives under .ai-first/context.` | Снимаем страх загрязнения репозитория: в корне только handoff, основная память отдельно. |
| `repo root / AGENTS.md` | Файл-хук в корне репозитория. |
| `Handoff for every new agent.` | Смысл `AGENTS.md`: передать агенту, где читать правила и память. |
| `.ai-first / README.md` | Индекс локальной памяти AI-first. |
| `Read order and operating rules.` | Смысл README: порядок чтения и правила работы агента. |
| `.ai-first/context / PROJECT.md` | Основная правда о проекте. |
| `Product truth and success shape.` | Что строим и как выглядит успех. |
| `.ai-first/context / IN_PROGRESS.md` | Текущая активная работа. |
| `Only the work happening now.` | Не смешивать active work с backlog/history. |
| `.ai-first/context / BACKLOG.md` | Утвержденные незавершенные задачи. |
| `Approved unfinished work.` | Только то, что владелец реально одобрил как работу. |
| `.ai-first/context / IDEAS.md` | Идеи, которые еще не задачи. |
| `Ideas that are not tasks yet.` | Хранить мысли без автоматического превращения в commitment. |
| `.ai-first/context / CHANGELOG.md` | Недавняя история проекта. |
| `Recent history for fast recovery.` | Новый агент быстро понимает, что недавно менялось. |
| `.ai-first/context / decisions/` | ADRs, trade-offs, post-mortem style decisions. |
| `Trade-offs, incidents, and follow-ups.` | Сохранять причины решений и важные последствия. |
| `LOCAL FIRST` | Свойство продукта: локальная работа без внешнего сервиса. |
| `No servers, no accounts.` | Не нужен аккаунт или серверная инфраструктура. |
| `PLAIN TEXT` | Свойство продукта: файлы читаются и редактируются как обычный текст. |
| `Markdown you can inspect.` | Пользователь может проверить состояние без специального UI. |
| `AGENT NATIVE` | Свойство продукта: формат рассчитан на агентное чтение. |
| `Reads before every session.` | Агент восстанавливает контекст в начале работы. |
| `YOURS TO OWN` | Свойство продукта: состояние принадлежит репозиторию владельца. |
| `The files live in your repo.` | Память физически находится рядом с кодом. |
| `Give the repo a memory your agent can maintain.` | Финальный CTA: репозиторий получает память, которую ведет агент. |
| `One install. Local Markdown. Then keep building.` | Повтор ключевого обещания перед финальной командой установки. |
