import { Link } from "react-router-dom";
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
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../context/useTheme";
import { projects, contactEmail } from "../data/projects";
import { skillDetails } from "../data/skills";
import "./Home.css";

const featuredIds = ["stylic", "doctor-prescription", "ecommerce-store"];
const featured = projects.filter((p) => featuredIds.includes(p.id));

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Maniha-dev", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
  { label: "Email", href: `mailto:${contactEmail}`, icon: "@" },
];

const stats = [
  { value: "5th", label: "Semester BSCS" },
  { value: "10+", label: "Projects Built" },
  { value: "MERN", label: "& AI / ML" },
];

const skillIcons = {
  react: FaReact,
  node: FaNodeJs,
  javascript: SiJavascript,
  python: FaPython,
  mongodb: SiMongodb,
  express: SiExpress,
  golang: SiGo,
  ai: FaBrain,
  tailwind: SiTailwindcss,
  cpp: SiCplusplus,
  postgresql: SiPostgresql,
  git: SiGit,
};

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <section className="section hero-shell" id="home">
        <div className="page hero-grid">
          <div className="hero-copy">
            <div className="social-row" aria-label="Social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="social-icon"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="hero-heading-block">
              <h1>
                Hi, I&apos;m <span className="text-accent">Maneeha Nasir</span>
              </h1>
              <p className="hero-role">Full-Stack MERN Developer &amp; AI/ML Enthusiast</p>
            </div>

            <p className="hero-subtitle">
              I build full-stack MERN applications with working frontend, backend APIs, and database operations.
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href="#about">Download CV</a>
              <a className="btn-secondary" href={`mailto:${contactEmail}`}>
                Hire Me
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="avatar-card">
              <div className="avatar-badge">MERN • Golang • AI</div>
              <div className="avatar-face">
                <span>M</span>
              </div>
              <div className="avatar-tag">Available for opportunities</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-preview" id="about">
        <div className="page about-grid">
          <div className="about-visual">
            <div className="about-orb" />
            <div className="about-frame">
              <span>3D Avatar / Photo</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow-tag">About Me</span>
            <h2>
              Turning ideas into <span className="text-accent">digital reality</span>
            </h2>
            <p>
              5th-semester BS Computer Science student, currently building a
              strong foundation in full-stack development while expanding into
              Golang and AI/ML.
            </p>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="about-action">
              <Link to="/about" className="btn-secondary">View About</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page projects-section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page skills-section">
          <span className="skills-eyebrow">Expert In</span>
          <h2>Skills &amp; Technologies</h2>
          <div className="skills-grid">
            {skillDetails.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-identity">
                  <div className="skill-icon" aria-hidden="true">
                    {(() => {
                      const Icon = skillIcons[skill.icon] || FaBrain;
                      const iconColor = skill.icon === "express"
                        ? (theme === "dark" ? "#FFFFFF" : "#000000")
                        : skill.color;
                      return <Icon style={{ color: iconColor }} />;
                    })()}
                  </div>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <h2>Let&apos;s talk</h2>
          <a className="btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
