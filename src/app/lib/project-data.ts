export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ecommerce' | 'portfolio' | 'platform' | 'opensource' | 'iot';
  year: number;
  highlights: string[];
  url?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'alex-running-coach',
    title: 'Alex Running Coach',
    description:
      'Full-stack coaching platform with online booking, athlete database, payment integration, and custom animations.',
    tags: ['Web App', 'Payments', 'Database', 'Animation'],
    category: 'platform',
    year: 2020,
    highlights: [
      'Online payment integration',
      'Athlete progress tracking',
      'Custom scroll animations',
      'Admin dashboard',
    ],
  },
  {
    id: 'chiara-cattaneo-artist',
    title: 'Chiara Cattaneo Artist',
    description:
      'Artist portfolio with bespoke scroll effects, gallery, and a fully personalized visual identity built from scratch.',
    tags: ['Portfolio', 'Creative', 'Custom Scroll', 'Animation'],
    category: 'portfolio',
    year: 2021,
    highlights: [
      'Zero-template design',
      'Custom scroll choreography',
      'Gallery with lightbox',
      'Brand identity integration',
    ],
  },
  {
    id: 'hyperiot',
    title: 'HyperIoT Platform',
    description:
      'Angular-based IoT and BigData management platform for real-time monitoring and device orchestration.',
    tags: ['Angular', 'IoT', 'BigData', 'Real-time'],
    category: 'iot',
    year: 2022,
    highlights: [
      'Real-time data dashboards',
      'Device management UI',
      'BigData pipeline integration',
      'Angular enterprise architecture',
    ],
  },
  {
    id: 'openapi-ts',
    title: 'openapi-ts Contribution',
    description:
      'Open-source contribution to the openapi-ts project — generating typed API clients from OpenAPI/Swagger definitions to keep frontend and backend in sync.',
    tags: ['Open Source', 'TypeScript', 'API Design', 'DX'],
    category: 'opensource',
    year: 2024,
    highlights: [
      'API client code generation',
      'OpenAPI/Swagger spec parsing',
      'Frontend/backend type safety',
      'Developer experience improvement',
    ],
    url: 'https://github.com/openapi-ts/openapi-typescript',
  },
];

export const COLLABORATORS = [
  'Smarthy SRL',
  'AC Software',
  'CulturaTela',
  'Markeven SRL',
  'Datacolor',
];

export const SERVICES = [
  {
    id: 'branding',
    title: 'Branding',
    description: 'Logo design and color palette development using color theory',
    icon: '🎨',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Full website production — from sketch to launch, with client feedback loops',
    icon: '🖥️',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description: 'Business applications engineered for efficiency and growth',
    icon: '⚙️',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Online sales solutions for physical retail businesses',
    icon: '🛒',
  },
];
