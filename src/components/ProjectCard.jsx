import { assets, projectCardText, siteInfo } from "../assets/assets";
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
        <img src={image || assets.hero} alt={`${name} ${projectCardText.previewAlt}`} />
        {status && <span className="project-status">{status}</span>}
      </div>

      <div className="project-card-content">
        <div>
          <div className="project-card-head">
            <h3>{name}</h3>
          </div>

          <p className="project-desc">
            {description || projectCardText.missingDescription}
          </p>

          {stack.length > 0 && (
            <div className="project-stack">
              {stack.map((tech) => (
                <span key={tech._id} className="eyebrow-tag">{tech.name}</span>
              ))}
            </div>
          )}
        </div>

        <div className="project-links">
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="project-link">
              <span aria-hidden="true">&#60;/&#62;</span> {projectCardText.code}
            </a>
          ) : (
            <span className="project-link disabled-link"><span aria-hidden="true">&#60;/&#62;</span> {projectCardText.code}</span>
          )}

          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link">
              <span aria-hidden="true">&#8599;</span> {projectCardText.liveDemo}
            </a>
          ) : (
            <span className="project-link disabled-link"><span aria-hidden="true">&#8599;</span> {projectCardText.liveDemo}</span>
          )}

          <a
            href={`mailto:${siteInfo.email}?subject=${encodeURIComponent("About " + name)}`}
            className="project-link project-email-link"
          >
            {projectCardText.email}
          </a>
        </div>
      </div>
    </article>
  );
}
