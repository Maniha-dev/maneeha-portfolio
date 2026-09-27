import { contactEmail } from "../data/projects";

const programs = [
  { name: "FlyRank AI Internship", status: "Ongoing" },
  { name: "Dev Weekends Fellowship", status: "Ongoing" },
  {
    name: "Generative AI Course — Pak Angels, in collaboration with iCodeGuru",
    status: "In Progress",
  },
  { name: "UNESCO Global Youth Hackathon", status: "Participant, 2025" },
];

export default function About() {
  return (
    <>
      <section className="section">
        <div className="page">
          <h1>About</h1>
          <p>
            I'm Maneeha Nasir, a 5th-semester BS Computer Science student at
            Lahore College for Women University (LCWU). I started with
            full-stack development, building real-world projects to learn by
            doing rather than through theory alone. I build full-stack MERN
            applications with working frontend, backend APIs, and database
            operations, and I'm currently focused on strengthening my backend
            and software engineering fundamentals. Alongside that, I'm
            learning Golang and AI/ML.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Education</h2>
          <p>
            BS Computer Science<br />
            Lahore College for Women University (LCWU)<br />
            5th Semester · CGPA: 3.52
          </p>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Career Direction</h2>
          <ul>
            <li>Growing as a Full-Stack Engineer</li>
            <li>Strengthening backend and software engineering fundamentals</li>
            <li>Expanding into Golang</li>
            <li>Building toward AI-integrated full-stack applications</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Programs &amp; Experience</h2>
          <ul className="programs-list">
            {programs.map((p) => (
              <li key={p.name}>
                {p.name} <span className="eyebrow-tag">{p.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <h2>Practical Work</h2>
          <p>
            I started by building full-stack MERN applications, applying
            frontend, backend, database, and API concepts across real
            projects — building and deploying them for practical use rather
            than as tutorials. I'm now expanding that foundation toward
            AI-integrated applications.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: "none" }}>
        <div className="page">
          <a className="plain btn-primary" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
}
