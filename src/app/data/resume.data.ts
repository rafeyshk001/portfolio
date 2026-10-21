import type { IconName } from '../shared/icon';

export const PROFILE = {
  name: 'Abu Rafey',
  initials: 'AR',
  role: 'Software Developer',
  email: 'abc@gmail.com',
  phone: '9879797879',
  phoneHref: 'tel:+919879797879',
  location: 'Unknown',
  // TODO: replace with your exact LinkedIn profile URL.
  linkedin: 'dummy',
  // Drop your resume PDF into /public with this name to enable the download button.
  resumeFile: 'resume.pdf',
  tagline:
    'Full-stack developer crafting responsive Angular interfaces backed by robust .NET Core and Node.js APIs.',
  roles: ['Software Developer', 'Angular Developer', '.NET Core Engineer', 'Full-Stack Builder'],
};

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const ABOUT = {
  paragraphs: [
    "I'm a software developer based in Delhi with a Master's in Computer Application and a foundation in Mathematics & Computer Science. At BNP Paribas I built responsive Angular applications and contributed to .NET Core and Node.js back-ends.",
    "I enjoy turning ideas into clean, performant products — from component architecture and RxJS streams to secure, JWT-protected APIs. I'm looking for a challenging role where I can put my technical, database and managerial skills to work and keep growing with new and emerging technology.",
  ],
  stats: [
    { value: 15, suffix: '+', label: 'Technologies' },
    { value: 2, suffix: '', label: 'Full-stack projects' },
    { value: 3, suffix: '', label: 'Degrees & diplomas' },
    { value: 3, suffix: '', label: 'Languages spoken' },
  ],
  facts: [
    { icon: 'map-pin' as IconName, label: 'Based in', value: 'Delhi, India' },
    { icon: 'globe' as IconName, label: 'Speaks', value: 'Hindi · English · Urdu' },
    { icon: 'heart' as IconName, label: 'Loves', value: 'Cricket & learning new skills' },
  ],
};

export interface Experience {
  role: string;
  company: string;
  monogram: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Developer',
    company: 'BNP Paribas',
    monogram: 'BNP',
    period: 'Jan 2023 — Jun 2023',
    location: 'Mumbai, India',
    points: [
      'Developed responsive, user-friendly web applications with the Angular framework.',
      "Built with Angular's components, directives, models and services, keeping features modular and reusable.",
      'Contributed to back-end development in .NET Core and Node.js, implementing server-side logic and APIs.',
      'Used a range of RxJS operators to manage asynchronous data flows across the application.',
      'Troubleshot and resolved Angular performance issues, improving user experience and customer engagement.',
    ],
    tech: ['Angular', 'RxJS', '.NET Core', 'Node.js', 'Web API'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    monogram: 'FL',
    period: 'Independent projects',
    location: 'Remote',
    points: [
      'Designed and shipped end-to-end web applications for clients, from UI to API.',
      'Implemented authentication, search, image management and shopping-cart experiences.',
    ],
    tech: ['Angular', 'Node.js', 'Express', '.NET Core 6'],
  },
];

export interface Project {
  title: string;
  kind: string;
  icon: IconName;
  summary: string;
  features: string[];
  tech: string[];
  accent: [string, string];
}

export const PROJECTS: Project[] = [
  {
    title: 'Property Application',
    kind: 'Full-stack · Real estate',
    icon: 'home',
    summary:
      'A property management platform with an Angular front end and a .NET Core 6 Web API for listing, searching and browsing homes.',
    features: [
      'JWT authentication with secure login and registration',
      'Cloudinary integration for fast image upload and storage',
      'Search filters for rent/purchase, location, BHK and delivery timeline',
      'Responsive property detail views tuned to user preferences',
    ],
    tech: ['Angular', '.NET Core 6', 'Web API', 'JWT', 'Cloudinary'],
    accent: ['#8b5cf6', '#22d3ee'],
  },
  {
    title: 'Food Application',
    kind: 'Freelance · E-commerce',
    icon: 'utensils',
    summary:
      'A food ordering experience with tag-based discovery and a smooth cart flow, built on an Angular + Express stack.',
    features: [
      'User authentication and registration',
      'Tag-based search to find dishes quickly',
      'Robust tagging system to categorise food',
      'Intuitive shopping cart to manage items before checkout',
    ],
    tech: ['Angular', 'Node.js', 'Express', 'JavaScript', 'HTML', 'CSS'],
    accent: ['#f472b6', '#f59e0b'],
  },
];

export const SKILL_GROUPS: { title: string; icon: IconName; items: string[] }[] = [
  {
    title: 'Frontend',
    icon: 'monitor',
    items: ['Angular', 'RxJS', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['C#', '.NET Core Web API', '.NET Core MVC', 'ASP.NET Web Forms', 'Node.js', 'Express'],
  },
  {
    title: 'Data & Tools',
    icon: 'database',
    items: ['SQL Server', 'Git', 'GitHub', 'JWT Auth', 'Cloudinary'],
  },
  {
    title: 'Programming',
    icon: 'code',
    items: ['C#', 'Core Java', 'JavaScript', 'OOP'],
  },
];

export const MARQUEE = [
  'Angular',
  'C#',
  '.NET Core',
  'Node.js',
  'RxJS',
  'SQL Server',
  'Express',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Core Java',
  'Git',
  'GitHub',
  'Web API',
  'MVC',
];

export const EDUCATION = [
  {
    degree: 'Master in Computer Application',
    school: 'MET College · Mumbai University',
    tag: 'MCA',
  },
  {
    degree: 'BSc in Mathematics & Computer Science',
    school: 'Jamia Millia Islamia',
    tag: 'BSc',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'C.H. Sec. School',
    tag: 'SSC',
  },
];

export const CERTIFICATES = [{ title: 'Java Programming', issuer: 'Oracle Academy' }];
