import { FaCheckCircle, FaCompass, FaGraduationCap } from "react-icons/fa";
import {
  about,
  achievements,
  careerGoals,
  siteInfo,
  uiText,
} from "../assets/assets";
import "./Home.css";

export default function About() {
  return (
    <>
      <section className="section about-detail-section">
        <div className="page about-grid about-grid-detail">
          <div className="about-visual">
            <div className="about-orb" />
            <div className="about-frame">
              <span>{about.imageLabel}</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow-tag">{about.eyebrow}</span>
            <h2>
              {about.headingStart} <span className="text-accent">{about.headingAccent}</span>
            </h2>
            <p>{about.bio}</p>
          </div>
        </div>
      </section>

      <section className="section education-career-section">
        <div className="page education-career-grid">
          <article className="education-career-card education-card">
            <div>
              <div className="education-career-label">
                <FaGraduationCap aria-hidden="true" />
                {about.educationLabel}
              </div>
              <h2>{about.degree}</h2>
              <p className="education-university">
                {about.institution}
              </p>
            </div>

            <div className="education-meta">
              {about.educationBadges.map((badge) => (
                <span key={badge._id}>{badge.label}</span>
              ))}
            </div>
          </article>

          <article className="education-career-card career-card">
            <div className="education-career-label">
              <FaCompass aria-hidden="true" />
              {about.careerLabel}
            </div>
            <h2>{about.careerTitle}</h2>
            <div className="career-goals">
              {careerGoals.map((goal) => (
                <div className="career-goal" key={goal._id}>
                  <FaCheckCircle aria-hidden="true" />
                  <span>{goal.text}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="page achievements-grid">
          <div className="achievements-list">
            <span className="eyebrow-tag">{uiText.achievementsEyebrow}</span>
            <h2>{uiText.achievementsTitle}</h2>

            <div className="achievement-stack">
              {achievements.map((achievement) => (
                <article className="achievement-card" key={achievement._id}>
                  <div className="achievement-main">
                    <div className="achievement-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img">
                        <path d="M12 3 4.5 6.5v5.2c0 4.3 3 7.9 7.5 9.3 4.5-1.4 7.5-5 7.5-9.3V6.5L12 3Z" />
                        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
                      </svg>
                    </div>
                    <div>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.issuer}</p>
                    </div>
                  </div>

                  <div className="achievement-meta">
                    <span>{achievement.date}</span>
                    {achievement.verifyUrl ? (
                      <a href={achievement.verifyUrl} target="_blank" rel="noreferrer">
                        {uiText.verifyAction}
                      </a>
                    ) : (
                      <span className="achievement-unverified">{uiText.verifyAction}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="achievement-visual" aria-hidden="true">
            <div className="achievement-glow" />
            <div className="graduation-illustration">
              <div className="graduation-cap">
                <span className="cap-top" />
                <span className="cap-band" />
                <span className="cap-tassel" />
              </div>
              <div className="graduation-head" />
              <div className="graduation-body">
                <span className="graduation-collar" />
                <span className="graduation-badge">{uiText.graduationBadge}</span>
              </div>
              <div className="graduation-base" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>{about.practicalTitle}</h2>
          <p>{about.practicalText}</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <a className="btn-primary" href={`mailto:${siteInfo.email}`}>
            {uiText.contactAction}
          </a>
        </div>
      </section>
    </>
  );
}
