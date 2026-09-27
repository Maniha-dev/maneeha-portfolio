import { contactEmail } from "../data/projects";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { name, description, stack, status, liveUrl, repoUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card-head">
        <h3>{name}</h3>
        {status && <span className="project-status">{status}</span>}
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

      <div className="project-links">
        {liveUrl ? (
          <a href={liveUrl} target="_blank" rel="noreferrer" className="plain btn-secondary">
            View Project
          </a>
        ) : (
          <span className="disabled-link">View Project — coming soon</span>
        )}

        {repoUrl ? (
          <a href={repoUrl} target="_blank" rel="noreferrer" className="plain btn-secondary">
            GitHub
          </a>
        ) : (
          <span className="disabled-link">GitHub — coming soon</span>
        )}

        <a
          href={`mailto:${contactEmail}?subject=${encodeURIComponent("About " + name)}`}
          className="plain btn-secondary"
        >
          Email Me
        </a>
      </div>
    </article>
  );
}
