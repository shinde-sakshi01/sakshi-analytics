export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const about = {
  name: "Sakshi Shinde",
  role: "Data Analyst",
  phone: "9967246429",
  email: "sakshishinde813@gmail.com",
  linkedin: "https://linkedin.com/in/sakshi-shinde",
  github: "https://github.com/sakshi-shinde",
  summary:
    "Data Analyst with hands-on experience in data visualization, reporting, and dashboard development using Python, SQL, Excel, Power BI, and Tableau. Skilled in transforming complex datasets into actionable insights for data-driven decision-making. Strong analytical thinking, problem-solving abilities, and a proactive learning mindset.",
};

export const skillCategories = [
  {
    title: "Programming & Databases",
    icon: "💻",
    color: "#915eff",
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Data Analysis",
    icon: "📊",
    color: "#00cea8",
    skills: ["Data Cleaning", "Data Transformation", "EDA"],
  },
  {
    title: "Libraries",
    icon: "📚",
    color: "#f12711",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Visualization Tools",
    icon: "📈",
    color: "#56ccf2",
    skills: ["Tableau", "Power BI", "Excel"],
  },
  {
    title: "Dev Tools",
    icon: "🛠️",
    color: "#f5af19",
    skills: ["VS Code", "Jupyter Notebook", "MS Excel", "PowerPoint", "Word"],
  },
  {
    title: "Concepts",
    icon: "🧠",
    color: "#ec008c",
    skills: ["Data Modeling", "Dashboarding", "Reporting", "KPI Tracking"],
  },
];

export const projects = [
  {
    name: "Online Voting System",
    description:
      "Built a comprehensive database-driven voting system with full election lifecycle management. Implemented SQL features including JOINs, GROUP BY, Triggers, and Stored Procedures to prevent duplicate voting and ensure complete data accuracy.",
    tags: [
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Database Design", color: "pink-text-gradient" },
    ],
    icon: "🗳️",
    gradient: "from-blue-600 to-cyan-400",
    highlights: [
      "Managed elections, voters & candidates",
      "SQL Triggers & Stored Procedures",
      "Duplicate vote prevention",
      "Data accuracy enforcement",
    ],
  },
  {
    name: "Fit-Track System",
    description:
      "Developed a Python OOP-based BMI calculation and fitness tracking system that generates personalized diet and workout plans. Features allergy filtering, automated reports, notifications, and complete membership & payment handling.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OOP", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    icon: "💪",
    gradient: "from-green-500 to-teal-400",
    highlights: [
      "BMI calculation engine",
      "Personalized diet & workout plans",
      "Allergy filtering & preferences",
      "Membership & payment system",
    ],
  },
  {
    name: "Breast Cancer Analysis Dashboard",
    description:
      "Analyzed 248 patient records using Power BI to visualize survival trends and metastasis impact. Created interactive dashboards demonstrating that early detection significantly improves survival rates.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "Data Analysis", color: "green-text-gradient" },
      { name: "Healthcare", color: "pink-text-gradient" },
    ],
    icon: "🏥",
    gradient: "from-pink-500 to-rose-400",
    highlights: [
      "248 patient records analyzed",
      "Survival trend visualization",
      "Metastasis impact analysis",
      "Interactive Power BI dashboards",
    ],
  },
];

export const certifications = [
  {
    title: "Google Data Analytics Professional Certificate",
    provider: "Google / Coursera",
    icon: "🏆",
    color: "#4285F4",
    year: "2024",
    description:
      "Comprehensive professional certification covering data analytics fundamentals, visualization, R programming, and industry best practices.",
  },
  {
    title: "Data Analytics with AI",
    provider: "QUASTECH",
    icon: "🤖",
    color: "#915eff",
    year: "2024",
    description:
      "Advanced certification in AI-powered data analytics, covering machine learning fundamentals and modern analytical workflows.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Science",
    institution: "ICLES' Motilal Jhunjhunwala College",
    period: "2022 – 2025",
    icon: "🎓",
  },
  {
    title: "Higher Secondary Education",
    institution: "ICLES' Motilal Jhunjhunwala College",
    period: "2022",
    icon: "📖",
  },
];
