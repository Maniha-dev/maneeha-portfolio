import { footer, siteInfo } from "../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page footer-inner">
        <p className="footer-text">{footer.tagline}</p>
        <a className="plain footer-email" href={`mailto:${siteInfo.email}`}>
          {siteInfo.email}
        </a>
      </div>
    </footer>
  );
}
