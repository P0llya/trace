// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Концепция продукта',
      link: { type: 'generated-index', title: 'Концепция продукта', description: 'Обзор концепции, проблемы, целевая аудитория и бизнес-цели.' },
      items: ['concept/overview'],
    },
    {
      type: 'category',
      label: 'Требования',
      link: { type: 'generated-index', title: 'Требования', description: 'Функциональные и нефункциональные требования к системе Trace.' },
      items: ['requirements/functional', 'requirements/non-functional'],
    },
    {
      type: 'category',
      label: 'Бизнес-процессы',
      link: { type: 'generated-index', title: 'Бизнес-процессы', description: 'Моделирование бизнес-процессов: BPMN и DMN.' },
      items: ['business-processes/create-collection'],
    },
    {
      type: 'link',
      label: 'API',
      href: '/docs/api/trace'
    },
    {
      type: 'category',
      label: 'Модель данных',
      link: { type: 'generated-index', title: 'Модель данных', description: 'Концептуальная, логическая и физическая модели данных.' },
      items: ['data-model/erd'],
    },
    {
      type: 'category',
      label: 'Архитектура',
      link: { type: 'generated-index', title: 'Архитектура', description: 'Архитектурные решения: асинхронная обработка, платформизация, хранение данных.' },
      items: ['architecture/async-thumbnails', 'architecture/platformization', 'architecture/storage'],
    },
    {
      type: 'category',
      label: 'Шаблоны артефактов',
      link: { type: 'generated-index', title: 'Шаблоны артефактов', description: 'Заготовки документов для дальнейшего проектирования.' },
      items: ['templates/deployment', 'templates/algorithms-capsule', 'templates/monitoring'],
    },
  ],
};

export default sidebars;