import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация Trace',
  tagline: 'Платформа для цифровых коллекций',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://P0llya.github.io',
  baseUrl: '/trace/',
  organizationName: 'P0llya',
  projectName: 'trace',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  plugins: [
    ['drawio', {}],
  ],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/P0llya/trace/edit/main/my-website/',
          remarkPlugins: [
            simplePlantUML
          ],
          },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'trace',
            spec: 'api_specs/trace_openapi-fin.yaml',
            route: '/docs/api/trace',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
      title: 'Trace',
      logo: { alt: 'Trace Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'docs', label: 'Документация', position: 'left' },
        { to: '/docs/api/trace', label: 'API', position: 'left' },
        { href: 'https://github.com/P0llya/trace', label: 'GitHub', position: 'right' },
      ],
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Проект',
            items: [
              { label: 'GitHub', href: 'https://github.com/P0llya/trace' },
              { label: 'Автор', href: 'https://github.com/P0llya' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Trace. Сделано с Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
