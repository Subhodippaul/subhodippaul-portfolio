export const APP_CONSTANTS = {
  NAVIGATION: {
    HOME: "Home",
    SKILLS: "Skills",
    PROJECTS: "Projects",
    CONTACT: "Contact",
    EXPERIENCE: "Experience",
    EDUCATION: "Education"
  },
  COMMON: {
    OPEN: "Open",
    CLOSE: "Close",
    CLICK_FOR_DETAILS: "click open to view details"
  },
  HOME: {
    GREETING: "Hello",
    NAME: "Subhodip Pual",
    ROLE: "Full stack developer",
    BIO: "I build performant, accessible web applications using modern tools and best practices. I enjoy turning ideas into production-ready products and learning new technologies along the way.",
    CONTACT_ME: "Contact me",
    SEE_SKILLS: "See skills"
  },
  EDUCATION: {
    TITLE: "Education",
    FIELDS: {
      SCHOOL: "School",
      YEARS: "Years",
      DEGREE: "Degree",
      BRANCH: "Branch"
    },
    ITEMS: [
      {
        id: "secondary",
        title: "Secondary Education",
        school: "Ushumpure Adarsha Uchcha Vidyalaya",
        years: "2010 - 2012",
        degree: "Secondary Certificate",
        branch: "General",
      },
      {
        id: "higher-secondary",
        title: "Higher Secondary",
        school: "XYZ Higher Secondary School",
        years: "2012 - 2014",
        degree: "Higher Secondary Certificate",
        branch: "Science",
      },
      {
        id: "graduation",
        title: "Graduation",
        school: "State University",
        years: "2014 - 2018",
        degree: "Bachelor of Technology",
        branch: "Computer Science",
      }
    ]
  }
  ,
  SKILLS: {
    CATEGORIES: [
      {
        key: "languages",
        label: "Languages",
        items: [
          { name: "TypeScript", percent: 75 },
          { name: "JavaScript", percent: 85 },
          { name: "Java", percent: 60 },
        ],
      },
      {
        key: "frameworks",
        label: "Frameworks",
        items: [
          { name: "React JS", percent: 80 },
          { name: "Node JS", percent: 70 },
          { name: "Express JS", percent: 65 },
          { name: "Fastify", percent: 40 },
          { name: "Jest (unit tests)", percent: 55 },
        ],
      },
      {
        key: "web",
        label: "Web Technology",
        items: [
          { name: "HTML5", percent: 90 },
          { name: "CSS3 / Tailwind", percent: 82 },
          { name: "ES6+", percent: 85 },
          { name: "REST / Web API", percent: 75 },
          { name: "AWS (basics)", percent: 45 },
        ],
      },
      {
        key: "database",
        label: "Database",
        items: [
          { name: "MongoDB", percent: 70 },
          { name: "SQL Server", percent: 55 },
          { name: "Oracle / MariaDB", percent: 45 },
          { name: "DynamoDB", percent: 35 },
        ],
      },
      {
        key: "tools",
        label: "Tools & Platforms",
        items: [
          { name: "Git / GitHub", percent: 80 },
          { name: "Vite / npm", percent: 75 },
          { name: "Docker (basic)", percent: 40 },
          { name: "YAML / JSON", percent: 85 },
        ],
      },
    ]
  }
  ,
  SKILLS_SETTINGS: {
    STAGGER_MS: 80,
    DURATION_MS: 700,
    TEAM_COLOR_CLASS: "bg-amber-600"
  }
} as const;