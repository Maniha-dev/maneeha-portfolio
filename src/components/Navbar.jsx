import { NavLink } from "react-router-dom";
import { contactEmail } from "../data/projects";
import "./Navbar.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="page navbar-inner">
        <NavLink to="/" className="plain navbar-logo">
          &lt;Maneeha Nasir /&gt;
        </NavLink>
        <nav className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                "plain navbar-link" + (isActive ? " is-active" : "")
              }
            >
              &lt;{item.label} /&gt;
            </NavLink>
          ))}
          <a className="plain btn-primary navbar-cta" href={`mailto:${contactEmail}`}>
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
