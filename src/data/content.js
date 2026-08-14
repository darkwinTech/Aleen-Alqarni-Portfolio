// ============================================================================
// All site copy lives here so it's easy to edit without touching components.
// Everything below is a DRAFT based on your resume. Read it over, edit
// freely, and swap in the real project screenshots/links when you have them.
// ============================================================================

export const profile = {
  name: 'Aleen AlQarni',
  role: 'Software Engineer',
  label: 'Software Engineering · Full-Stack · AI & Data',
  tagline: 'Senior Software Engineering student building web applications and exploring AI.',
  subhead: [
    "I'm a senior Software Engineering student at KFUPM interested in full-stack development, artificial intelligence, and data. I enjoy building web applications from idea to deployment and learning new technologies by turning them into real projects.",
    'Previously, I interned with the Master Data Management team at ASMO, where I worked on internal web tools and enterprise Power BI dashboards.',
  ],
  location: 'Dhahran, Saudi Arabia',
  email: 'aleen.awadh.alqarni@gmail.com',
  phone: '+966 55 798 7016',
  links: {
    linkedin: 'https://www.linkedin.com/in/aleen-alqarni-b92bb7319',
    github: 'https://github.com/darkwintech',
    // TODO: swap for the real custom domain once purchased
    resumeFile: '/Aleen_AlQarni_Resume.pdf',
  },
};

export const about = {
  heading: 'I like building things that solve real problems.',
  paragraphs: [
    "I'm a senior Software Engineering student at KFUPM with a strong interest in full-stack development and artificial intelligence. Most of what I learn eventually turns into something I build, whether that's a web application, an AI project, a data tool, or an experiment with a technology I want to understand better.",
    "My experience spans frontend and backend development, databases, software testing, business intelligence, and data. I'm especially interested in becoming a stronger full-stack engineer while exploring how AI can be integrated into useful software products.",
    'During my internship at ASMO, an Aramco and DHL Supply Chain joint venture, I worked with the IT and Master Data Management team. I built a full-stack driver management portal and developed enterprise Power BI dashboards used for data monitoring and reporting.',
    "Outside of university and work, I enjoy building personal projects and learning through implementation. I'd rather understand a technology by creating something with it than only reading about how it works.",
  ],
};

export const skills = [
  {
    category: 'Business Intelligence & Data',
    items: ['Power BI', 'DAX', 'Power Query (M)', 'ETL', 'Data Analysis', 'Data Preprocessing'],
  },
  {
    category: 'Web & Backend Development',
    items: ['React', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'HTML', 'CSS'],
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Databases',
    items: ['SQL', 'MySQL', 'MongoDB', 'Relational Schema Design'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['Machine Learning Fundamentals', 'Model Evaluation', 'Predictive Analytics'],
  },
  {
    category: 'Software Engineering',
    items: ['Software Testing', 'Requirements Engineering', 'OOP', 'Agile Development', 'System Analysis & Design'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'VS Code', 'PyCharm', 'Figma', 'Postman', 'Vercel', 'Microsoft Office Suite'],
  },
];

// Curated subset of `skills` items that have a recognizable brand mark,
// rendered as the icon strip at the top of the Skills section. `key` maps
// to an icon component in Skills.jsx.
export const skillHighlights = [
  { name: 'Power BI', key: 'powerbi' },
  { name: 'Python', key: 'python' },
  { name: 'JavaScript', key: 'javascript' },
  { name: 'React', key: 'react' },
  { name: 'Node.js', key: 'nodejs' },
  { name: 'MySQL', key: 'mysql' },
  { name: 'MongoDB', key: 'mongodb' },
  { name: 'Git', key: 'git' },
  { name: 'Figma', key: 'figma' },
  { name: 'HTML', key: 'html5' },
  { name: 'CSS', key: 'css' },
];

export const experience = [
  {
    company: 'ASMO (Advanced Supply Management Operations)',
    role: 'IT / Master Data Management (MDM) Intern',
    date: 'Jun 2026 – Aug 2026',
    location: 'Dammam, Saudi Arabia',
    bullets: [
      'Automated daily monitoring and reporting across multiple enterprise systems by building interactive Power BI dashboards, replacing a manual Excel-based process.',
      'Digitized an internal business workflow by building a full-stack web application (React, Node.js, MySQL) as both frontend and backend developer, adding role-based access and automated notifications.',
      'Evaluated vendor proposals for a data management initiative as part of a cross-functional team.',
      'Designed and deployed a web platform to present a data analytics prototype to stakeholders.',
    ],
  },
];

export const education = {
  school: 'King Fahd University of Petroleum and Minerals (KFUPM)',
  link: 'https://www.kfupm.edu.sa/',
  degree: 'Bachelor of Science in Software Engineering',
  date: 'Aug 2022 – Present',
  location: 'Dhahran, Saudi Arabia',
  coursework: [
    'Software Design & Architecture',
    'Web & Mobile Development',
    'Database Systems',
    'Data Structures & Algorithms',
    'Software Requirements Engineering',
  ],
};

// Curated subset of `projects` (by slug) featured in the Hero's cycling
// "project window" widget. `stats` are two short, real facts about that
// project — not fabricated dashboard numbers.
export const heroShowcase = [
  {
    slug: 'learn-hub',
    shortLabel: 'Learn Hub',
    stats: [
      { label: 'Status', value: 'Live' },
      { label: 'Stack', value: 'MERN' },
    ],
  },
  {
    slug: 'asmo-driver-portal',
    shortLabel: 'ASMO Portal',
    stats: [
      { label: 'Access', value: 'Role-based' },
      { label: 'Team', value: 'ASMO IT' },
    ],
  },
  {
    slug: 'air-quality-classification',
    shortLabel: 'Air Quality',
    stats: [
      { label: 'Accuracy', value: '94.3%' },
      { label: 'Team', value: '4' },
    ],
  },
];

// Draft project entries pulled from your resume. Replace `image` with a real
// screenshot (drop it in src/assets/projects/) and fill in `demoUrl` /
// `repoUrl` once you send over the project list. `caseStudy: true` projects
// get a "View case study" link to a dedicated page (build that page once you
// share screenshots + write-up details for these).
export const projects = [
  {
    slug: 'learn-hub',
    title: 'Learn Hub',
    date: 'Jul 2024',
    tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    summary:
      'Full-stack peer-tutoring platform connecting students with tutors by course, with ratings, favorites, and an admin dashboard, built end-to-end from Figma UI/UX through a deployed React, Node.js, Express, and MongoDB application.',
    caseStudy: false,
    demoUrl: 'https://swe-363-project-learn-hub-frontend.vercel.app',
    repoUrl: 'https://github.com/darkwinTech/SWE363ProjectLearnHub',
  },
  {
    slug: 'air-quality-classification',
    title: 'Air Quality Classification',
    date: 'Aug 2023',
    tags: ['Python', 'Machine Learning', 'Scikit-learn'],
    summary:
      'Compared KNN, SVM, and deep neural network models to classify air quality into four risk categories from pollution and environmental data as part of a 4-person team, reaching 94.3% accuracy with an SVM classifier.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: 'https://github.com/darkwinTech/Air-Quality-Classification',
  },
  {
    slug: 'car-classification',
    title: 'Car Classification System',
    date: 'Aug 2022',
    tags: ['Python', 'Machine Learning'],
    summary:
      'Machine learning model to classify used vehicles in Saudi Arabia, covering data preprocessing, feature engineering, and evaluation.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: 'https://github.com/darkwinTech/ISE-291-Project-car-classification',
  },
  {
    slug: 'fuzzing-project',
    title: 'Fuzzing Project for Software Testing',
    date: 'May 2026',
    tags: ['Security', 'Testing', 'C'],
    summary:
      'Uncovered crashes and security vulnerabilities in bzip2 by conducting automated, coverage-guided fuzz testing with AFL++ and AddressSanitizer.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: 'https://github.com/Wajza/bzip2-fuzzing-project',
  },
  {
    slug: 'asmo-driver-portal',
    title: 'ASMO Driver Management Portal',
    date: 'Jun 2026 – Aug 2026',
    tags: ['React', 'Node.js', 'MySQL', 'Full-Stack'],
    summary:
      'Full-stack internal workflow app built during the ASMO internship, with role-based access, automated notifications, and both frontend and backend development.',
    caseStudy: true,
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'power-bi-dashboards',
    title: 'Enterprise Power BI Dashboards',
    date: 'Jun 2026 – Aug 2026',
    tags: ['Power BI', 'DAX', 'ETL'],
    summary:
      'Automated daily monitoring and reporting across multiple enterprise systems, replacing a manual Excel-based process.',
    caseStudy: true,
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'kfupm-student-impact-hub',
    title: 'KFUPM Student Impact Hub — Requirements Engineering',
    date: 'May 2025',
    tags: ['UML', 'Figma', 'Requirements Engineering'],
    summary:
      'Led end-to-end requirements engineering for a student volunteering platform: stakeholder surveys, functional/non-functional requirements, UML use case diagrams, annotated Figma mockups, requirements prioritization, and two traceability matrices.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: 'https://github.com/darkwinTech/SWE216-Software-Requirements-Engineering',
  },
  {
    slug: 'horse-management-system',
    title: 'Horse Management System',
    date: 'Jan 2025',
    tags: ['SQL', 'Database Design'],
    summary:
      'Centralized horse profiles, training records, and daily operational data by designing and implementing a relational SQL database.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'club-zone',
    title: 'Club Zone — Systems Analysis & Design',
    date: 'Dec 2024',
    tags: ['UML', 'Figma', 'System Design'],
    summary:
      'Designed the requirements and system architecture for a student club management platform: use case and activity diagrams, a class diagram, sequence diagrams, and a clickable Figma prototype.',
    caseStudy: false,
    demoUrl: '',
    repoUrl: 'https://github.com/darkwinTech/SWE-206-Introduction-to-Software-Engineering-',
  },
];

export const contact = {
  heading: "Let's talk",
  blurb:
    "Open to software engineering internships and new grad roles, especially anything that touches both product engineering and data. The fastest way to reach me is email or LinkedIn.",
  // Formspree endpoint, read from .env (VITE_FORMSPREE_ENDPOINT) so it's not
  // hardcoded in source. Create a form at https://formspree.io (free tier,
  // no backend needed) and copy .env.example to .env with your form's URL.
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT,
};
