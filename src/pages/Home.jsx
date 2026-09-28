import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import EyeTracker from "../components/EyeTracker";
import { useTheme } from "../context/useTheme";
import {
  aboutPreview,
  banner,
  assets,
  eyeConfig,
  projects,
  projectsSection,
  siteInfo,
  skills,
  socialLinks,
  stats,
  uiText,
} from "../assets/assets";
import "./Home.css";

const featured = projects.filter((project) =>
  projectsSection.featuredIds.includes(project._id),
);

export default function Home() {
  const { theme } = useTheme();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <>
      <section className="section hero-shell" id="home">
        <div className="page hero-grid">
          <div className="hero-copy">
            <div className="social-row" aria-label={uiText.socialLinksLabel}>
              {socialLinks.map((item) => (
                <a
                  key={item._id}
                  href={item.type === "email" ? `mailto:${siteInfo.email}` : item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="social-icon"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="hero-heading-block">
              <h1>
                {banner.greeting} <span className="text-accent">{banner.name}</span>
              </h1>
                <p className="hero-role">{banner.role}</p>
            </div>

            <p className="hero-subtitle">
              {banner.subtitle}
            </p>

            <div className="hero-actions">
              <a className="btn-primary" href={banner.primaryHref}>{banner.primaryAction}</a>
              <a className="btn-secondary" href={`mailto:${siteInfo.email}`}>
                {banner.secondaryAction}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="avatar-card">
              {videoFailed ? (
                <>
                  <div className="avatar-badge">{banner.avatarBadge}</div>
                  <div className="avatar-face">
                    <span>{banner.avatarInitial}</span>
                  </div>
                  <div className="avatar-tag">{banner.avatarTag}</div>
                </>
              ) : (
                <>
                  <video
                    className="avatar-video"
                    src={assets.bannerVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={() => setVideoFailed(true)}
                    aria-hidden="true"
                  />
                  <EyeTracker config={eyeConfig} />
                  <div className="avatar-video-overlay">
                    <div className="avatar-badge">{banner.avatarBadge}</div>
                    <div className="avatar-tag">{banner.avatarTag}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section about-preview" id="about">
        <div className="page about-grid">
          <div className="about-visual">
            <div className="about-orb" />
            <div className="about-frame">
              <span>{aboutPreview.imageLabel}</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow-tag">{aboutPreview.eyebrow}</span>
            <h2>
              {aboutPreview.headingStart} <span className="text-accent">{aboutPreview.headingAccent}</span>
            </h2>
            <p>{aboutPreview.text}</p>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat._id} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="about-action">
              <Link to={aboutPreview.actionHref} className="btn-secondary">{aboutPreview.action}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page projects-section">
          <h2>{projectsSection.featuredTitle}</h2>
          <div className="projects-grid">
            {featured.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page skills-section">
          <span className="skills-eyebrow">{skills.eyebrow}</span>
          <h2>{skills.title}</h2>
          <div className="skills-grid">
            {skills.items.map((skill) => {
              const Icon = skill.icon;
              return (
              <article className="skill-card" key={skill._id}>
                <div className="skill-identity">
                  <div className="skill-icon" aria-hidden="true">
                    <Icon style={{ color: theme === "dark" ? skill.darkColor || skill.color : skill.color }} />
                  </div>
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <h2>{projectsSection.contactHeading}</h2>
          <a className="btn-primary" href={`mailto:${siteInfo.email}`}>
            {projectsSection.contactAction}
          </a>
        </div>
      </section>
    </>
  );
}
