import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects, contactEmail } from "../data/projects";
import { currentSkills, learningSkills } from "../data/skills";
import "./Home.css";

const featuredIds = ["stylic", "doctor-prescription", "ecommerce-store"];
const featured = projects.filter((p) => featuredIds.includes(p.id));

export default function Home() {
  return (
    <>
      <section className="section hero">
        <div className="page">
          <h1>
            I build full-stack MERN applications with working frontend,
            backend APIs, and database operations.
          </h1>
          <a className="plain btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <p>
            5th-semester BS Computer Science student, currently learning
            Golang and AI/ML alongside full-stack development.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Featured Projects</h2>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Skills / Tech Stack</h2>
          <h3>Current Skills</h3>
          <div className="skills-row">
            {currentSkills.map((s) => (
              <span key={s} className="eyebrow-tag">{s}</span>
            ))}
          </div>
          <h3>Currently Learning</h3>
          <div className="skills-row">
            {learningSkills.map((s) => (
              <span key={s} className="eyebrow-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>About</h2>
          <p>
            I'm Maneeha Nasir, a 5th-semester BS Computer Science student at
            Lahore College for Women University (LCWU), focused on full-stack
            development and growing toward becoming a Full-Stack Engineer.
          </p>
          <Link to="/about" className="plain btn-secondary">View About</Link>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <h2>Let's talk</h2>
          <a className="plain btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
