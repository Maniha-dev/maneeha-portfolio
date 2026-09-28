import ProjectCard from "../components/ProjectCard";
import { projects, projectsSection, siteInfo } from "../assets/assets";

export default function Projects() {
  return (
    <>
      <section className="section">
        <div className="page">
          <h1>{projectsSection.pageTitle}</h1>
          <p>{projectsSection.pageDescription}</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          <a className="plain btn-primary" href={`mailto:${siteInfo.email}`}>
            {projectsSection.contactAction}
          </a>
        </div>
      </section>
    </>
  );
}
