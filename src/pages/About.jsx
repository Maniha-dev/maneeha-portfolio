import { FaCheckCircle, FaCompass, FaGraduationCap } from "react-icons/fa";
import { contactEmail } from "../data/projects";
import { achievements } from "../data/achievements";
import "./Home.css";

const careerGoals = [
  "Growing as a Full-Stack Engineer",
  "Strengthening backend and software engineering fundamentals",
  "Expanding into Golang",
  "Building toward AI-integrated full-stack applications",
];

export default function About() {
  return (
    <>
      <section className="section about-detail-section">
        <div className="page about-grid about-grid-detail">
          <div className="about-visual">
            <div className="about-orb" />
            <div className="about-frame">
              <span>Profile</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow-tag">About Me</span>
            <h2>
              Turning ideas into <span className="text-accent">digital reality</span>
            </h2>
            <p>
              I&apos;m Maneeha Nasir, a 5th-semester BS Computer Science student at
              Lahore College for Women University (LCWU). I started with
              full-stack development, building real-world projects to learn by
              doing rather than through theory alone. I build full-stack MERN
              applications with working frontend, backend APIs, and database
              operations, and I&apos;m currently focused on strengthening my backend
              and software engineering fundamentals. Alongside that, I&apos;m
              learning Golang and AI/ML.
            </p>
          </div>
        </div>
      </section>

      <section className="section education-career-section">
        <div className="page education-career-grid">
          <article className="education-career-card education-card">
            <div>
              <div className="education-career-label">
                <FaGraduationCap aria-hidden="true" />
                Academics
              </div>
              <h2>BS Computer Science</h2>
              <p className="education-university">
                Lahore College for Women University (LCWU)
              </p>
            </div>

            <div className="education-meta">
              <span>5th Semester</span>
              <span>CGPA: 3.52</span>
            </div>
          </article>

          <article className="education-career-card career-card">
            <div className="education-career-label">
              <FaCompass aria-hidden="true" />
              Goals &amp; Vision
            </div>
            <h2>Career Direction</h2>
            <div className="career-goals">
              {careerGoals.map((goal) => (
                <div className="career-goal" key={goal}>
                  <FaCheckCircle aria-hidden="true" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="page achievements-grid">
          <div className="achievements-list">
            <span className="eyebrow-tag">Achievements</span>
            <h2>Programs &amp; Experience</h2>

            <div className="achievement-stack">
              {achievements.map((achievement) => (
                <article className="achievement-card" key={achievement.id}>
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
                        Verify ↗
                      </a>
                    ) : (
                      <span className="achievement-unverified">Verify ↗</span>
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
                <span className="graduation-badge">★</span>
              </div>
              <div className="graduation-base" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Practical Work</h2>
          <p>
            I started by building full-stack MERN applications, applying
            frontend, backend, database, and API concepts across real
            projects — building and deploying them for practical use rather
            than as tutorials. I&apos;m now expanding that foundation toward
            AI-integrated applications.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <a className="btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
