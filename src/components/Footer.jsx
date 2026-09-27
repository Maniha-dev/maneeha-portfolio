import { contactEmail } from "../data/projects";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page footer-inner">
        <p className="footer-text">
          Maneeha Nasir — BS Computer Science, LCWU
        </p>
        <a className="plain footer-email" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </div>
    </footer>
  );
}
