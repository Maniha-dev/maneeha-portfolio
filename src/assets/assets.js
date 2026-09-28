import hero from "./images/hero.png";
import reactLogo from "./images/react.svg";
import viteLogo from "./images/vite.svg";
import favicon from "./images/favicon.svg";
import iconsSprite from "./images/icons.svg";
import lookCenter from "./eyes/look_center.webp";
import lookLeft from "./eyes/look_left.webp";
import lookRight from "./eyes/look_right.webp";
import lookUp from "./eyes/look_up.webp";
import { FaBrain, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiGo,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

// Edit these files to change the imported images used by the site.
export const assets = { hero, reactLogo, viteLogo, favicon, iconsSprite };

// Replace these four images together to change the cursor-following character.
export const eyeImages = {
  center: lookCenter,
  left: lookLeft,
  right: lookRight,
  up: lookUp,
};

// Tune direction sensitivity, transition speed, and image framing here.
export const eyeConfig = {
  deadZone: 0.18,
  fadeMs: 160,
  zoom: 1.5,
  originX: 50,
  originY: 18,
  useLightBg: true,
};

// Edit site-wide identity, contact, and browser metadata here.
export const siteInfo = {
  name: "Maneeha Nasir",
  email: "maneehanasir.2024@gmail.com",
  tagline: "Maneeha Nasir — BS Computer Science, LCWU",
  documentTitle: "Maneeha Nasir — Full-Stack Engineer",
  metaDescription:
    "Maneeha Nasir — Full-Stack Engineer building MERN applications with working frontend, backend APIs, and database operations.",
};

// Edit navigation items and labels here.
export const navLinks = [
  { _id: "home", to: "/", label: "Home " },
  { _id: "about", to: "/about", label: "About " },
  { _id: "projects", to: "/projects", label: "Projects " },
];

// Edit hero copy and actions here.
export const banner = {
  greeting: "Hi, I'm",
  name: siteInfo.name,
  role: "Full-Stack MERN Developer & AI/ML Enthusiast",
  subtitle:
    "I build full-stack MERN applications with working frontend, backend APIs, and database operations.",
  primaryAction: "Download CV",
  primaryHref: "#about",
  secondaryAction: "Hire Me",
  avatarBadge: "MERN • Golang • AI",
  avatarInitial: "M",
  avatarTag: "Available for opportunities",
};

// Edit social links here. Use type "email" to link to siteInfo.email.
export const socialLinks = [
  { _id: "github", label: "GitHub", href: "https://github.com/Maniha-dev", icon: "GH" },
  { _id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
  { _id: "email", label: "Email", type: "email", icon: "@" },
];

// Edit the home-page introduction and stats here.
export const aboutPreview = {
  imageLabel: "3D Avatar / Photo",
  eyebrow: "About Me",
  headingStart: "Turning ideas into",
  headingAccent: "digital reality",
  text:
    "5th-semester BS Computer Science student, currently building a strong foundation in full-stack development while expanding into Golang and AI/ML.",
  action: "View About",
  actionHref: "/about",
};

export const stats = [
  { _id: "semester", value: "5th", label: "Semester BSCS" },
  { _id: "projects", value: "10+", label: "Projects Built" },
  { _id: "focus", value: "MERN", label: "& AI / ML" },
];

// Edit detailed About copy and education values here.
export const about = {
  imageLabel: "Profile",
  eyebrow: "About Me",
  headingStart: "Turning ideas into",
  headingAccent: "digital reality",
  bio:
    "I'm Maneeha Nasir, a 5th-semester BS Computer Science student at Lahore College for Women University (LCWU). I started with full-stack development, building real-world projects to learn by doing rather than through theory alone. I build full-stack MERN applications with working frontend, backend APIs, and database operations, and I'm currently focused on strengthening my backend and software engineering fundamentals. Alongside that, I'm learning Golang and AI/ML.",
  educationLabel: "Academics",
  degree: "BS Computer Science",
  institution: "Lahore College for Women University (LCWU)",
  educationBadges: [
    { _id: "semester", label: "5th Semester" },
    { _id: "cgpa", label: "CGPA: 3.52" },
  ],
  careerLabel: "Goals & Vision",
  careerTitle: "Career Direction",
  practicalTitle: "Practical Work",
  practicalText:
    "I started by building full-stack MERN applications, applying frontend, backend, database, and API concepts across real projects — building and deploying them for practical use rather than as tutorials. I'm now expanding that foundation toward AI-integrated applications.",
};

// Edit career goals here.
export const careerGoals = [
  { _id: "full-stack", text: "Growing as a Full-Stack Engineer" },
  { _id: "backend", text: "Strengthening backend and software engineering fundamentals" },
  { _id: "golang", text: "Expanding into Golang" },
  { _id: "ai-apps", text: "Building toward AI-integrated full-stack applications" },
];

// Edit achievements and verification links here.
export const achievements = [
  { _id: "flyrank-ai-internship", title: "FlyRank AI Internship", issuer: "FlyRank", date: "Ongoing", verifyUrl: null },
  { _id: "dev-weekends-fellowship", title: "Dev Weekends Fellowship", issuer: "Dev Weekends", date: "Ongoing", verifyUrl: null },
  { _id: "generative-ai-course", title: "Generative AI Course", issuer: "Pak Angels, in collaboration with iCodeGuru", date: "In Progress", verifyUrl: null },
  { _id: "unesco-youth-hackathon", title: "UNESCO Global Youth Hackathon", issuer: "Global Youth Hackathon", date: "Participant, 2025", verifyUrl: null },
];

// Edit skill lists and cards here.
export const skills = {
  eyebrow: "Expert In",
  title: "Skills & Technologies",
  currentSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Python", "C++", "C"],
  learningSkills: ["Golang", "AI/ML"],
  items: [
    { _id: "react", name: "React.js", category: "Frontend", icon: FaReact, color: "#61DAFB" },
    { _id: "node", name: "Node.js", category: "Backend", icon: FaNodeJs, color: "#339933" },
    { _id: "javascript", name: "JavaScript", category: "Language", icon: SiJavascript, color: "#F7DF1E" },
    { _id: "python", name: "Python", category: "Programming", icon: FaPython, color: "#3776AB" },
    { _id: "mongodb", name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
    { _id: "express", name: "Express.js", category: "Backend", icon: SiExpress, color: "#000000", darkColor: "#FFFFFF" },
    { _id: "golang", name: "Golang", category: "Currently learning", icon: SiGo, color: "#00ADD8" },
    { _id: "ai-ml", name: "AI / ML", category: "Currently learning", icon: FaBrain, color: "#10A37F" },
    { _id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
    { _id: "cplusplus", name: "C++", category: "Language", icon: SiCplusplus, color: "#00599C" },
    { _id: "postgresql", name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
    { _id: "git", name: "Git & GitHub", category: "Version Control", icon: SiGit, color: "#F05032" },
  ],
};

// Edit project-page copy and featured project IDs here.
export const projectsSection = {
  featuredTitle: "Featured Projects",
  contactHeading: "Let's talk",
  pageTitle: "What I've Built",
  pageDescription:
    "A growing collection of real-world applications where I apply frontend, backend, APIs, databases, and deployment concepts while continuing to grow as a software engineer.",
  contactAction: "Contact Me",
  featuredIds: ["stylic", "doctor-prescription", "ecommerce-store"],
};

// Edit project-card fallback and action labels here.
export const projectCardText = {
  missingDescription: "Details coming soon — description not added yet.",
  code: "Code",
  liveDemo: "Live Demo",
  email: "Email Me",
  previewAlt: "project preview",
};

// Edit shared interface labels here.
export const uiText = {
  navigationLabel: "Main navigation",
  socialLinksLabel: "Social links",
  contactAction: "Contact Me",
  verifyAction: "Verify ↗",
  achievementsEyebrow: "Achievements",
  achievementsTitle: "Programs & Experience",
  graduationBadge: "★",
  switchToDark: "Switch to dark mode",
  switchToLight: "Switch to light mode",
};

// Edit the footer tagline here; the email comes from siteInfo.
export const footer = { tagline: siteInfo.tagline };

// Add or remove project objects here. Empty URLs keep Code/Live Demo disabled.
export const projects = [
  {
    _id: "stylic", name: "Stylic.pk",
    description: "A full-stack e-commerce application for a handmade and beaded jewelry brand. Customers browse the product catalog, add items to a cart, and place orders through a live frontend connected to a working backend API.",
    stack: [{ _id: "react", name: "React" }, { _id: "vite", name: "Vite" }, { _id: "node", name: "Node.js" }, { _id: "express", name: "Express.js" }, { _id: "mongodb", name: "MongoDB" }],
    status: "Completed", liveUrl: null, repoUrl: null, image: null,
  },
  {
    _id: "doctor-prescription", name: "Doctor Prescription Project", description: null,
    stack: [], status: "In Progress", liveUrl: null, repoUrl: null, image: null,
  },
  {
    _id: "ecommerce-store", name: "Ecommerce-Store",
    description: "A full-stack e-commerce store with frontend, backend, and MongoDB integration — including CRUD operations and order handling.",
    stack: [], status: "Completed", liveUrl: null, repoUrl: null, image: null,
  },
  {
    _id: "silent-language-coach", name: "Silent Language Coach", description: null,
    stack: [], status: null, liveUrl: null, repoUrl: null, image: null,
  },
  { 
    _id: "greencart", name: "GreenCart",
    description: "A full-stack e-commerce application with user authentication, an admin dashboard, and Stripe-based checkout.",
    stack: [{ _id: "react", name: "React" }, { _id: "context-api", name: "Context API" }, { _id: "node", name: "Node.js" }, { _id: "express", name: "Express.js" }, { _id: "mongodb", name: "MongoDB" }, { _id: "stripe", name: "Stripe" }],
    status: "Completed", liveUrl: "https://green-cart-mern-ashen.vercel.app/", repoUrl: "https://github.com/Maniha-dev/Green-Chart-MERN", image: null,
  },
  {
    _id: "edupanda", name: "EduPanda", description: null,
    stack: [], status: null, liveUrl: null, repoUrl: null, image: null,
  },
];