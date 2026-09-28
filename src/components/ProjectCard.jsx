import { contactEmail } from "../data/projects";
import projectPreview from "../assets/hero.png";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const {
    name,
    description,
    stack = [],
    status,
    liveUrl,
    repoUrl,
    image,
  } = project;

  return (
    <article className="project-card">
      <div className="project-preview">
        <img src={image || projectPreview} alt={`${name} project preview`} />
        {status && <span className="project-status">{status}</span>}
      </div>

      <div className="project-card-content">
        <div>
          <div className="project-card-head">
            <h3>{name}</h3>
          </div>

          <p className="project-desc">
            {description || "Details coming soon — description not added yet."}
          </p>

          {stack.length > 0 && (
            <div className="project-stack">
              {stack.map((tech) => (
                <span key={tech} className="eyebrow-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>

        <div className="project-links">
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="project-link">
              <span aria-hidden="true">&#60;/&#62;</span> Code
            </a>
          ) : (
            <span className="project-link disabled-link"><span aria-hidden="true">&#60;/&#62;</span> Code</span>
          )}

          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link">
              <span aria-hidden="true">&#8599;</span> Live Demo
            </a>
          ) : (
            <span className="project-link disabled-link"><span aria-hidden="true">&#8599;</span> Live Demo</span>
          )}

          <a
            href={`mailto:${contactEmail}?subject=${encodeURIComponent("About " + name)}`}
            className="project-link project-email-link"
          >
            Email Me
          </a>
        </div>
      </div>
    </article>
  );
}
