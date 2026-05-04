# Trace — платформа для цифровых коллекций

**Trace** — веб-платформа для создания личных цифровых коллекций, вдохновленная эстетикой скрапбукинга. Приватное пространство, где пользователи собирают артефакты цифровой жизни (скриншоты, мемы, фото, голосовые сообщения, цитаты), объединяют их в коллекции по темам и настроениям и пересматривают как «капсулы времени».

## Что внутри

```text
.
├── my-website/                      # Docusaurus-сайт с документацией
│   ├── docs/                        # Техническая документация (Markdown)
│   │   ├── intro.md                 # Введение в проект
│   │   ├── concept/                 # Концепция продукта
│   │   ├── requirements/            # Функциональные и нефункциональные требования
│   │   ├── architecture/            # Архитектурные решения
│   │   ├── data-model/              # Модель данных (ER-диаграмма)
│   │   ├── business-processes/      # BPMN-диаграммы
│   │   ├── api/                     # OpenAPI-документация
│   │   └── templates/               # Шаблоны для дальнейшего проектирования
│   ├── api_specs/                   # Спецификации OpenAPI (YAML)
│   ├── blog/                        # Блог (опционально)
│   ├── src/                         # Компоненты React
│   └── docusaurus.config.js         # Конфигурация Docusaurus
├── .github/workflows/
│   └── deploy.yml                   # GitHub Actions: сборка и деплой на GitHub Pages
└── README.md                        # Этот файл
```

## Структура документации

- **Концепция** — описание проблемы, целевая аудитория, бизнес-цели
- **Требования** — Use Cases (UC), функциональные и нефункциональные требования
- **Архитектура** — асинхронные процессы, платформизация, выбор технологий
- **Модель данных** — концептуальная, логическая и физическая схемы БД
- **Бизнес-процессы** — BPMN-диаграммы ключевых сценариев
- **API** — спецификация REST-эндпоинтов
- **Шаблоны** — рекомендации для расширения документации

## Стек

| Слой | Инструмент | Описание |
| --- | --- | --- |
| **Документирование** | [Docusaurus 3](https://docusaurus.io/) | Генератор статического сайта |
| **API** | [redocusaurus](https://redocusaurus.vercel.app/) | Интеграция OpenAPI-спецификаций |
| **Диаграммы** | [docusaurus-plugin-drawio](https://github.com/xiguaxigua/docusaurus-plugin-drawio) | Draw.io-диаграммы |
| **Диаграммы** | [@akebifiky/remark-simple-plantuml](https://github.com/akebifiky/remark-simple-plantuml) | PlantUML-диаграммы |
| **CI/CD** | GitHub Actions | Автоматическая сборка и деплой на GitHub Pages |
| **Runtime** | Node.js ≥20 | Окружение для Docusaurus |

## Локальный запуск

### Предварительные требования
- Node.js ≥20
- npm или yarn

### Шаги

```bash
# Клонируйте репозиторий
git clone https://github.com/P0llya/trace.git
cd trace

# Установите зависимости
cd my-website
npm install

# Запустите локальный сервер
npm run start
# → Откроется http://localhost:3000/trace/ в браузере
```

### Доступные команды

```bash
npm run start    # Запуск dev-сервера с hot-reload
npm run build    # Сборка статического сайта в папку build/
npm run serve    # Локальное тестирование production-сборки
npm run clear    # Очистка кэша Docusaurus
```

## Публикация

Сайт автоматически публикуется на GitHub Pages при push'е в ветку `main`:
- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- Сайт: https://P0llya.github.io/trace/

## Рекомендуемые расширения для VS Code

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) — улучшенное редактирование Markdown
- [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) — редактор диаграмм Draw.io
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi) — редактор OpenAPI
- [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) — поддержка PlantUML-диаграмм
- [Markdown Table](https://marketplace.visualstudio.com/items?itemName=TakumiI.markdowntable) —助 создание таблиц в Markdown

## Контакты

- GitHub: [@P0llya](https://github.com/P0llya)
- Проект: [trace](https://github.com/P0llya/trace)
