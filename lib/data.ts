// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Chandhana Gayathri Gangaraju",
  fullName: "Chandhana Gayathri Gangaraju",
  tagline: "Building Intelligent Software Experiences",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "QA Automation Engineer",
    "AI/ML Developer",
    "Cisco Apprentice",
  ],
  location: "India",
  email: "chandanagayathrig@gmail.com",
  github: "https://github.com/Chandanagayathrig2003",
  linkedin: "https://www.linkedin.com/in/chandhana-gayathri-gangaraju-1a76991bb",
  bio: "A passionate Computer Science graduate and Cisco Apprentice, building intelligent software systems at the intersection of Full Stack Development, QA Automation, and Artificial Intelligence. I don't just write code — I craft experiences.",
  shortBio:
    "CSE Graduate · Cisco Apprentice · Full Stack + QA + AI/ML Engineer passionate about building intelligent software that makes a difference.",
};

// ─── Core Expertise ───────────────────────────────────────────────────────────

export const coreExpertise = [
  { name: "React", color: "#61DAFB", bg: "#61DAFB15", icon: "⚛", category: "Frontend" },
  { name: "Next.js", color: "#ffffff", bg: "#ffffff15", icon: "N", category: "Frontend" },
  { name: "TypeScript", color: "#3178C6", bg: "#3178C615", icon: "TS", category: "Language" },
  { name: "Python", color: "#3776AB", bg: "#3776AB15", icon: "Py", category: "Language" },
  { name: "Playwright", color: "#2EAD33", bg: "#2EAD3315", icon: "PW", category: "QA" },
  { name: "Selenium", color: "#43B02A", bg: "#43B02A15", icon: "Se", category: "QA" },
  { name: "AWS", color: "#FF9900", bg: "#FF990015", icon: "☁", category: "Cloud" },
  { name: "Node.js", color: "#339933", bg: "#33993315", icon: "No", category: "Backend" },
  { name: "MongoDB", color: "#47A248", bg: "#47A24815", icon: "M", category: "Database" },
  { name: "REST APIs", color: "#6366f1", bg: "#6366f115", icon: "API", category: "Backend" },
  { name: "Generative AI", color: "#a855f7", bg: "#a855f715", icon: "AI", category: "AI/ML" },
  { name: "CI/CD", color: "#f59e0b", bg: "#f59e0b15", icon: "CD", category: "DevOps" },
];

// ─── Skills (Full categorized) ────────────────────────────────────────────────

export type Skill = { name: string; level: number };
export type SkillCategory = { category: string; icon: string; color: string; skills: Skill[] };

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    color: "#8b5cf6",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "C#", level: 70 },
      { name: "SQL", level: 86 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Monitor",
    color: "#00d4ff",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "ShadCN UI", level: 82 },
    ],
  },
  {
    category: "Backend Development",
    icon: "Server",
    color: "#7c3aed",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "WebSocket Development", level: 78 },
      { name: "Authentication", level: 83 },
      { name: "Authorization", level: 83 },
      { name: "API Integration", level: 87 },
      { name: "Server-side Development", level: 85 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#10b981",
    skills: [
      { name: "MongoDB", level: 84 },
      { name: "MySQL", level: 86 },
      { name: "SQL Database Design", level: 82 },
      { name: "Database Management", level: 80 },
    ],
  },
  {
    category: "QA & Test Automation",
    icon: "TestTube",
    color: "#2EAD33",
    skills: [
      { name: "Playwright", level: 85 },
      { name: "Selenium", level: 88 },
      { name: "Cypress", level: 83 },
      { name: "Appium", level: 78 },
      { name: "Postman", level: 90 },
      { name: "RestAssured", level: 80 },
      { name: "TestNG", level: 82 },
      { name: "JUnit", level: 80 },
      { name: "Functional Testing", level: 90 },
      { name: "Regression Testing", level: 88 },
      { name: "API Testing", level: 87 },
      { name: "End-to-End Testing", level: 85 },
      { name: "Automation Framework Design", level: 82 },
      { name: "Bug Investigation", level: 88 },
      { name: "Test Case Design", level: 87 },
      { name: "Quality Assurance", level: 90 },
    ],
  },
  {
    category: "AI / Machine Learning",
    icon: "Brain",
    color: "#ff6b9d",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 78 },
      { name: "Generative AI", level: 82 },
      { name: "Large Language Models", level: 80 },
      { name: "Prompt Engineering", level: 88 },
      { name: "AI Chatbot Development", level: 84 },
      { name: "Conversational AI", level: 82 },
      { name: "Context Management", level: 80 },
      { name: "Streamlit", level: 85 },
      { name: "Neural Networks", level: 75 },
      { name: "Model Evaluation", level: 78 },
      { name: "Data Preprocessing", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    color: "#ff9900",
    skills: [
      { name: "AWS Cloud", level: 82 },
      { name: "CI/CD Pipelines", level: 78 },
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "Vercel", level: 85 },
      { name: "Deployment Automation", level: 78 },
      { name: "Version Control", level: 92 },
      { name: "Environment Configuration", level: 80 },
    ],
  },
  {
    category: "Software Engineering",
    icon: "Layers",
    color: "#06b6d4",
    skills: [
      { name: "Data Structures", level: 88 },
      { name: "Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 90 },
      { name: "Design Patterns", level: 80 },
      { name: "Problem Solving", level: 92 },
      { name: "SDLC", level: 85 },
      { name: "Debugging", level: 90 },
      { name: "Code Reviews", level: 83 },
      { name: "Performance Optimization", level: 80 },
    ],
  },
  {
    category: "Enterprise Tools",
    icon: "Building2",
    color: "#f59e0b",
    skills: [
      { name: "MuleSoft", level: 75 },
      { name: "DBT", level: 72 },
      { name: "OAuth Authentication", level: 80 },
      { name: "AskCody MCP Server", level: 78 },
      { name: "Webex Bot Integration", level: 75 },
      { name: "Jira", level: 82 },
      { name: "Agile Methodology", level: 87 },
      { name: "Sprint Planning", level: 83 },
      { name: "Cross-Team Collaboration", level: 88 },
    ],
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    color: "#64748b",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 82 },
      { name: "Eclipse", level: 78 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 80 },
      { name: "GitHub", level: 92 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  tags: string[];
  category: "AI/ML" | "Full Stack" | "QA" | "Web";
  gradient: string;
  accentColor: string;
  image?: string;
  metrics: { label: string; value: string }[];
  features: string[];
  challenges: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "blood-cancer-detection",
    title: "Blood Cancer Detection",
    shortDesc: "Deep Learning model for early detection of leukemia",
    description:
      "A state-of-the-art deep learning system that detects blood cancer (leukemia) from microscopic blood cell images with 96.4% accuracy. Built with CNN architectures and transfer learning to aid medical professionals in early diagnosis.",
    tags: ["Python", "Machine Learning", "Deep Learning", "CNN", "OpenCV", "Flask"],
    category: "AI/ML",
    gradient: "from-rose-900 via-red-900 to-orange-900",
    accentColor: "#ff6b6b",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&fit=crop",
    metrics: [
      { label: "Accuracy", value: "96.4%" },
      { label: "Dataset Size", value: "12,000+" },
      { label: "Classes", value: "4 Types" },
      { label: "Inference Time", value: "<200ms" },
    ],
    features: [
      "CNN + Transfer Learning architecture",
      "Real-time blood cell image analysis",
      "Multi-class leukemia classification",
      "Web-based diagnostic interface",
      "Grad-CAM visualization for explainability",
    ],
    challenges: [
      "Handling class imbalance in medical datasets",
      "Optimizing inference speed for clinical environments",
      "Building explainable AI to earn medical professional trust",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    featured: true,
  },
  {
    id: "ev-charging-manager",
    title: "EV Charging Station Manager",
    shortDesc: "Full-stack platform for EV charging infrastructure management",
    description:
      "A comprehensive platform for electric vehicle charging station management featuring real-time monitoring, smart booking, and analytics dashboards for both operators and EV owners.",
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Express", "Socket.io", "JWT"],
    category: "Full Stack",
    gradient: "from-green-900 via-emerald-900 to-teal-900",
    accentColor: "#10b981",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    metrics: [
      { label: "Stations Managed", value: "500+" },
      { label: "Real-time Latency", value: "<1s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Active Users", value: "1,000+" },
    ],
    features: [
      "Real-time station availability tracking",
      "Smart booking and reservation system",
      "Integrated payment processing",
      "Analytics dashboard for operators",
      "Mobile-responsive progressive web app",
    ],
    challenges: [
      "Real-time synchronization across 500+ stations",
      "Handling concurrent booking conflicts gracefully",
      "Building offline-resilient mobile experience",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    demo: "#",
    featured: true,
  },
  {
    id: "ai-analysis-system",
    title: "AI Analysis System",
    shortDesc: "LLM-powered intelligent data analysis platform",
    description:
      "An advanced AI platform that leverages large language models to provide intelligent insights from complex datasets. Features natural language querying, automated report generation, and real-time streaming via WebSockets.",
    tags: ["Python", "LLMs", "WebSockets", "Prompt Engineering", "FastAPI", "React"],
    category: "AI/ML",
    gradient: "from-blue-900 via-indigo-900 to-violet-900",
    accentColor: "#6366f1",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    metrics: [
      { label: "Queries Processed", value: "10,000+" },
      { label: "Response Time", value: "<2s" },
      { label: "Accuracy", value: "94%" },
      { label: "Data Sources", value: "15+" },
    ],
    features: [
      "Natural language data querying",
      "LLM-powered insight generation",
      "Automated report creation",
      "Multi-source data integration",
      "Real-time streaming via WebSockets",
    ],
    challenges: [
      "Managing context window limits for large datasets",
      "Ensuring factual accuracy of LLM responses",
      "Real-time streaming with WebSocket reliability",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    featured: true,
  },
  {
    id: "hiring-assistant-chatbot",
    title: "Hiring Assistant Chatbot",
    shortDesc: "AI chatbot that transforms the recruitment process",
    description:
      "An intelligent conversational AI system built with Python and Streamlit that automates candidate screening, interview scheduling, and skill assessment — achieving 89% accuracy at 10x human speed.",
    tags: ["Python", "Streamlit", "LLMs", "NLP", "Prompt Engineering", "LangChain"],
    category: "AI/ML",
    gradient: "from-purple-900 via-violet-900 to-pink-900",
    accentColor: "#a855f7",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80&fit=crop",
    metrics: [
      { label: "Screening Speed", value: "10x Faster" },
      { label: "Candidate Fit Accuracy", value: "89%" },
      { label: "Time Saved", value: "60%" },
      { label: "Conversations", value: "5,000+" },
    ],
    features: [
      "Intelligent candidate screening via conversation",
      "Automated interview scheduling",
      "Skills assessment through dialogue",
      "Multi-language support",
      "HR analytics dashboard",
    ],
    challenges: [
      "Designing unbiased AI screening prompts",
      "Maintaining conversation context across long sessions",
      "Integrating with calendar and scheduling APIs",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    shortDesc: "Premium SaaS-style developer portfolio",
    description:
      "An award-worthy portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features stunning animations, interactive sections, skills galaxy, and a futuristic design comparable to Awwwards-level portfolios.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "React"],
    category: "Web",
    gradient: "from-cyan-900 via-blue-900 to-indigo-900",
    accentColor: "#00d4ff",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Load Time", value: "<1s" },
      { label: "Animations", value: "50+" },
      { label: "Sections", value: "17" },
    ],
    features: [
      "Matrix intro animation sequence",
      "Interactive particle canvas background",
      "Skills galaxy visualization",
      "Animated 15-step journey timeline",
      "Premium glassmorphism design system",
    ],
    challenges: [
      "Optimizing complex canvas animations for 60fps",
      "Balancing visual fidelity with Core Web Vitals",
      "Creating accessible yet visually stunning UI",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    demo: "#",
    featured: false,
  },
  {
    id: "random-meme-generator",
    title: "Random Meme Generator",
    shortDesc: "Fun web app for generating and customizing memes",
    description:
      "A delightful web application that fetches and generates random memes using public APIs. Features custom text overlay via Canvas API, category filtering, and social sharing functionality.",
    tags: ["JavaScript", "APIs", "Canvas API", "CSS", "HTML"],
    category: "Web",
    gradient: "from-yellow-900 via-orange-900 to-red-900",
    accentColor: "#f59e0b",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
    metrics: [
      { label: "Meme Templates", value: "500+" },
      { label: "Daily Generations", value: "1,000+" },
      { label: "Share Rate", value: "40%" },
      { label: "Load Time", value: "<0.5s" },
    ],
    features: [
      "Random meme generation from public APIs",
      "Custom text overlay using Canvas API",
      "Category-based filtering system",
      "One-click social sharing",
      "Personal meme gallery",
    ],
    challenges: [
      "Canvas API for dynamic text rendering with wrapping",
      "Handling API rate limits gracefully",
      "Cross-browser canvas compatibility",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    demo: "#",
    featured: false,
  },
  {
    id: "securesphere-ai",
    title: "SecureSphere AI",
    shortDesc: "Cloud Security Monitoring Platform with real-time threat intelligence",
    description:
      "A full-stack cloud security monitoring platform built with React and TypeScript, enabling organizations to track assets, vulnerabilities, and security insights through interactive dashboards. Features real-time threat detection, role-based access control, and CI/CD-driven deployments.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Clerk", "Tailwind CSS", "Docker", "GitHub Actions"],
    category: "Full Stack",
    gradient: "from-slate-900 via-cyan-900 to-blue-900",
    accentColor: "#06b6d4",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&fit=crop",
    metrics: [
      { label: "Assets Tracked", value: "10,000+" },
      { label: "Threat Detection", value: "Real-time" },
      { label: "Auth Provider", value: "Clerk RBAC" },
      { label: "Deployment", value: "Dockerized" },
    ],
    features: [
      "Interactive security dashboards with real-time metrics and charts",
      "RESTful APIs for asset management and threat tracking",
      "Secure authentication and role-based access control via Clerk",
      "Vulnerability tracking with report generation",
      "Containerized with Docker and CI/CD via GitHub Actions",
      "PostgreSQL-backed persistent storage on cloud infrastructure",
    ],
    challenges: [
      "Implementing fine-grained RBAC without performance bottlenecks",
      "Designing real-time dashboards with low-latency data pipelines",
      "Orchestrating Docker containers with zero-downtime CI/CD deployments",
    ],
    github: "https://github.com/Chandanagayathrig2003",
    demo: "#",
    featured: true,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export type Experience = {
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  isHighlighted?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Trainee",
    company: "Cisco Systems",
    duration: "2025 – Present",
    type: "Full-time Apprenticeship",
    description:
      "Working as a Cisco Apprentice Engineer on enterprise software systems, QA automation, and AI integrations. Building production-grade software at a company that sets the standard for networking and tech innovation worldwide.",
    achievements: [
      "Developed AskCody MCP Server for enterprise meeting room management",
      "Built Webex Bot integrations for team collaboration automation",
      "Implemented QA automation frameworks using Playwright and Selenium",
      "Worked with MuleSoft for enterprise API integration pipelines",
      "Built data transformation pipelines using DBT for analytics",
      "Implemented OAuth authentication for enterprise application security",
      "Participated in agile sprints and cross-team collaboration",
    ],
    technologies: ["Python", "Playwright", "Selenium", "MuleSoft", "DBT", "CI/CD", "Jira", "OAuth", "Agile"],
    isHighlighted: true,
  },
  {
    role: "AWS Cloud Virtual Intern",
    company: "Amazon Web Services",
    duration: "2023",
    type: "Virtual Internship",
    description:
      "Gained hands-on AWS cloud engineering experience building and deploying cloud-native applications. Worked on real infrastructure projects and earned AWS Cloud Practitioner certification.",
    achievements: [
      "Deployed and managed production infrastructure on AWS",
      "Built serverless applications using Lambda and API Gateway",
      "Implemented CI/CD pipelines for automated deployments",
      "Earned AWS Cloud Practitioner certification",
    ],
    technologies: ["AWS Lambda", "S3", "EC2", "API Gateway", "CloudFormation", "Python"],
  },
  {
    role: "Salesforce Virtual Intern",
    company: "Salesforce",
    duration: "2023",
    type: "Virtual Internship",
    description:
      "Developed CRM solutions and automations on the Salesforce platform. Built custom Lightning Web Components and automated workflows for enterprise clients.",
    achievements: [
      "Built custom Lightning Web Components for enterprise CRM",
      "Automated business workflows using Salesforce Flow",
      "Integrated third-party APIs with the Salesforce platform",
      "Collaborated with cross-functional teams on client deliverables",
    ],
    technologies: ["Salesforce", "Apex", "LWC", "SOQL", "REST API", "JavaScript"],
  },
  {
    role: "Network Security Virtual Intern",
    company: "Network Security Organization",
    duration: "2024",
    type: "Virtual Internship",
    description:
      "Worked on network security protocols, vulnerability assessments, and security automation. Built monitoring systems and documented security best practices.",
    achievements: [
      "Conducted network vulnerability assessments",
      "Implemented security monitoring and alerting systems",
      "Documented security protocols and best practices",
      "Analyzed network traffic for anomaly detection",
    ],
    technologies: ["Network Security", "Python", "Wireshark", "Linux", "Firewall", "VPN"],
  },
];

// ─── Enterprise Tools ─────────────────────────────────────────────────────────

export const enterpriseTools = [
  {
    name: "MuleSoft",
    description: "Enterprise integration platform — built API integration flows connecting enterprise systems at Cisco",
    color: "#00A0DF",
    icon: "Link2",
    tag: "Integration Platform",
  },
  {
    name: "DBT",
    description: "Data Build Tool — created transformation pipelines for analytics-ready enterprise data at Cisco",
    color: "#FF694A",
    icon: "Database",
    tag: "Data Engineering",
  },
  {
    name: "AskCody MCP Server",
    description: "Sole developer of the MCP Server for enterprise meeting room and workspace management at Cisco",
    color: "#6366f1",
    icon: "Server",
    tag: "AI Infrastructure",
  },
  {
    name: "Webex Bot",
    description: "Built Cisco Webex collaboration bots for automated team notifications and workflow integrations",
    color: "#00B140",
    icon: "MessageSquare",
    tag: "Collaboration",
  },
  {
    name: "OAuth 2.0",
    description: "Implemented enterprise authentication and authorization flows for secure application access",
    color: "#EB5424",
    icon: "ShieldCheck",
    tag: "Security",
  },
  {
    name: "Jira & Agile",
    description: "Sprint planning, backlog grooming, story points estimation, and cross-team coordination at Cisco",
    color: "#0052CC",
    icon: "LayoutKanban",
    tag: "Project Management",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
  credentialUrl?: string;
  category: string;
};

export const certifications: Certification[] = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023", icon: "Cloud", color: "#ff9900", category: "Cloud", credentialUrl: "#" },
  { name: "Microsoft Python Certification", issuer: "Microsoft", year: "2023", icon: "Terminal", color: "#7fbf00", category: "Programming", credentialUrl: "#" },
  { name: "Microsoft Java Certification", issuer: "Microsoft", year: "2023", icon: "Code", color: "#00a1f1", category: "Programming", credentialUrl: "#" },
  { name: "HackerRank SQL", issuer: "HackerRank", year: "2023", icon: "Database", color: "#2ec866", category: "Database", credentialUrl: "#" },
  { name: "HackerRank CSS", issuer: "HackerRank", year: "2023", icon: "Palette", color: "#2ec866", category: "Web", credentialUrl: "#" },
  { name: "Machine Learning A-Z", issuer: "Udemy", year: "2023", icon: "Brain", color: "#ec5252", category: "AI/ML", credentialUrl: "#" },
  { name: "WordPress Development", issuer: "WordPress", year: "2022", icon: "Globe", color: "#21759b", category: "Web", credentialUrl: "#" },
  { name: "SEO Mastery", issuer: "Industry Certification", year: "2022", icon: "Search", color: "#4285f4", category: "Marketing", credentialUrl: "#" },
  { name: "Data Structures & Algorithms", issuer: "Industry Certification", year: "2023", icon: "GitBranch", color: "#7c3aed", category: "CS Fundamentals", credentialUrl: "#" },
];

// ─── Achievements / Stats ─────────────────────────────────────────────────────

export const achievements = [
  { label: "Programming Languages", value: 7, suffix: "", icon: "Code2", description: "Mastered across paradigms" },
  { label: "Projects Built", value: 20, suffix: "+", icon: "Rocket", description: "End-to-end products" },
  { label: "Certifications Earned", value: 9, suffix: "+", icon: "Award", description: "Industry credentials" },
  { label: "Internships Completed", value: 4, suffix: "", icon: "Briefcase", description: "Real-world experience" },
  { label: "Enterprise Tools", value: 6, suffix: "+", icon: "Building2", description: "Worked with at Cisco" },
  { label: "Testing Frameworks", value: 8, suffix: "+", icon: "TestTube", description: "QA automation stack" },
  { label: "AI Applications Built", value: 5, suffix: "+", icon: "Brain", description: "AI-powered projects" },
];

// ─── Journey (15 steps) ──────────────────────────────────────────────────────

export type JourneyStep = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
  type: "education" | "internship" | "project" | "enterprise" | "future";
};

export const journeySteps: JourneyStep[] = [
  { year: "2020", title: "B.Tech Computer Science", subtitle: "Sree Vidyanikethan Engineering College", description: "Began my CS journey with a passion for technology. Dived into programming with C++, Java, and Data Structures — building the analytical foundation for everything that followed.", icon: "GraduationCap", color: "#00d4ff", tags: ["C++", "Java", "Data Structures", "Algorithms", "OOP"], type: "education" },
  { year: "2023", title: "AWS Virtual Internship", subtitle: "Amazon Web Services", description: "Gained hands-on cloud engineering experience. Built serverless applications, deployed infrastructure, and earned AWS certification — leveling up to enterprise-grade cloud skills.", icon: "Cloud", color: "#ff9900", tags: ["AWS", "Lambda", "S3", "EC2", "Cloud Architecture"], type: "internship" },
  { year: "2023", title: "Salesforce Virtual Internship", subtitle: "Salesforce CRM Platform", description: "Built custom Lightning Web Components and automated CRM workflows. Got a deep look into enterprise software development and client-facing product delivery.", icon: "Globe", color: "#00A0DF", tags: ["Salesforce", "Apex", "LWC", "CRM", "API Integration"], type: "internship" },
  { year: "2024", title: "Network Security Internship", subtitle: "Security & Infrastructure", description: "Explored network security — vulnerability assessments, security protocols, and monitoring systems. Built a strong foundation in cybersecurity principles.", icon: "Shield", color: "#ef4444", tags: ["Network Security", "Vulnerability Assessment", "Linux", "Firewalls"], type: "internship" },
  { year: "2025", title: "Cisco Apprenticeship", subtitle: "Software Engineer Trainee", description: "Joined Cisco Systems as a Software Engineer Trainee in 2025 — a dream come true. Working on enterprise-grade software in an environment that sets the standard for engineering excellence.", icon: "Building2", color: "#00B140", tags: ["Cisco", "Enterprise Engineering", "Python", "QA Automation", "Agile"], type: "enterprise" },
  { year: "2025", title: "MuleSoft QA & Integration", subtitle: "Enterprise Integration Platform — QA Automation", description: "Performed QA automation for MuleSoft pipelines at Cisco — designing and executing test strategies for enterprise API integrations and data pipelines, ensuring robust and reliable integration flows at scale.", icon: "Link2", color: "#00A0DF", tags: ["MuleSoft", "QA Automation", "API Testing", "Data Pipelines", "Enterprise"], type: "enterprise" },
  { year: "2025–26", title: "AskCody MCP Server", subtitle: "Pioneering Enterprise AI Integration", description: "Contributed to developing and testing the AskCody MCP Server at Cisco — pioneering Model Context Protocol integration for enterprise meeting room management. Delivered cutting-edge AI infrastructure across 2025–2026.", icon: "Server", color: "#6366f1", tags: ["MCP Server", "AI Integration", "Python", "Enterprise AI", "OAuth", "QA Testing"], type: "enterprise" },
  { year: "2025–26", title: "QA Automation Expert", subtitle: "Playwright · Selenium · Cypress · Appium", description: "Mastered the complete QA automation ecosystem at Cisco. Built bulletproof test frameworks for MuleSoft pipelines and DBT data transformations — catching bugs before they reach customers because quality is non-negotiable.", icon: "TestTube", color: "#2EAD33", tags: ["Playwright", "Selenium", "Cypress", "Appium", "RestAssured", "TestNG"], type: "enterprise" },
  { year: "2026", title: "DBT QA & Data Engineering", subtitle: "Data Transformation Engineering — QA Automation", description: "Performed QA for DBT data transformation pipelines at Cisco — validating and testing analytics-ready data pipelines to ensure accuracy, integrity, and reliability of enterprise data supporting critical business decisions.", icon: "Database", color: "#FF694A", tags: ["DBT", "QA Automation", "Data Pipeline Testing", "SQL", "Data Engineering"], type: "enterprise" },
  { year: "Future", title: "Future Software Engineer", subtitle: "The Journey Continues...", description: "The destination is clear: a world-class Software Engineer leading teams, building AI-powered products, and making global impact through technology. The best is yet to come.", icon: "Rocket", color: "#f59e0b", tags: ["Leadership", "AI/ML", "Full Stack", "Innovation", "Global Impact"], type: "future" },
];

// ─── AI Capabilities ──────────────────────────────────────────────────────────

export const aiCapabilities = [
  { title: "Prompt Engineering", description: "Crafting precise, contextual prompts that unlock the full potential of LLMs for complex task execution and structured output generation.", color: "#a855f7", icon: "Sparkles", level: 88 },
  { title: "Generative AI", description: "Building production-ready generative AI applications — from chatbots to content generation pipelines using state-of-the-art models.", color: "#6366f1", icon: "Wand2", level: 82 },
  { title: "Large Language Models", description: "Deep expertise integrating LLMs (GPT, Claude, Gemini) into real-world applications with proper context management and output validation.", color: "#00d4ff", icon: "Brain", level: 80 },
  { title: "AI Chatbots", description: "Built conversational AI systems including a Hiring Assistant Chatbot with 89% candidate-fit accuracy screening at 10x human speed.", color: "#10b981", icon: "MessageSquare", level: 84 },
  { title: "Deep Learning", description: "Architected CNN-based deep learning models for medical imaging — achieving 96.4% accuracy in blood cancer detection from microscopy images.", color: "#ff6b6b", icon: "Network", level: 78 },
  { title: "Machine Learning", description: "Applying classical ML algorithms alongside modern deep learning for predictive analytics, classification, and pattern recognition.", color: "#f59e0b", icon: "TrendingUp", level: 80 },
  { title: "Context Management", description: "Expert at designing conversation memory, managing context windows, and building stateful AI interactions that feel natural and intelligent.", color: "#ff9900", icon: "Layers", level: 80 },
  { title: "AI-powered Applications", description: "Full-stack AI app development — from model integration to user-facing interfaces — creating tools that augment human capabilities.", color: "#ec4899", icon: "Cpu", level: 83 },
];

// ─── Future Goals ─────────────────────────────────────────────────────────────

export const futureGoals = [
  { title: "Senior Software Engineer", description: "Grow into a senior engineering role, leading complex projects and mentoring developers at a world-class tech company.", icon: "Code2", color: "#00d4ff", timeline: "1-2 Years" },
  { title: "AI Product Builder", description: "Build and launch AI-powered products that solve real-world problems at scale — from ideation to production with millions of users.", icon: "Brain", color: "#a855f7", timeline: "2-3 Years" },
  { title: "Open Source Contributor", description: "Contribute meaningfully to major open source projects and build tools that the global developer community uses and loves.", icon: "Github", color: "#10b981", timeline: "Ongoing" },
  { title: "Tech Speaker & Writer", description: "Share knowledge through conference talks, technical blogs, and workshops — giving back to the community that helped me grow.", icon: "Mic2", color: "#f59e0b", timeline: "2-3 Years" },
  { title: "Engineering Leadership", description: "Lead engineering teams building products that matter — combining technical excellence with empathetic leadership to drive impact.", icon: "Users", color: "#ef4444", timeline: "3-5 Years" },
  { title: "Global Tech Impact", description: "Create technology that transcends borders — building systems and products that empower people across the world regardless of background.", icon: "Globe", color: "#6366f1", timeline: "5+ Years" },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = {
  degree: "Bachelor of Technology in Computer Science & Engineering",
  institution: "Sree Vidyanikethan Engineering College",
  duration: "2020 – 2024",
  grade: "First Class",
  location: "Andhra Pradesh, India",
};
