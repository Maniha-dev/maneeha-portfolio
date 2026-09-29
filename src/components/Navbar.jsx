import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, siteInfo, uiText } from "../assets/assets";
import { useTheme } from "../context/useTheme";
import "./Navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="page navbar-inner">
        <NavLink to="/" className="plain navbar-brand">
          &lt; {siteInfo.name.split(" ")[0]} /&gt;
        </NavLink>

        <nav
          id="primary-navigation"
          className={`navbar-links${menuOpen ? " is-open" : ""}`}
          aria-label={uiText.navigationLabel}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item._id}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                "plain navbar-link" + (isActive ? " is-active" : "")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? uiText.switchToDark : uiText.switchToLight}
            title={theme === "light" ? uiText.switchToDark : uiText.switchToLight}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {theme === "light" ? (
                <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
              ) : (
                <>
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </>
              )}
            </svg>
          </button>
          <a className="plain navbar-cta" href={`mailto:${siteInfo.email}`}>
            {uiText.contactAction}
          </a>
          <button
            type="button"
            className="navbar-menu-toggle"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
