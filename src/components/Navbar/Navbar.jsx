import { useState } from "react";
import "./Navbar.css";
import PhoneIcon from "../../assets/phone.svg";
import SiteLogo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Services", href: "#services" },
];

const NavBar = ({ onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const hasMatch = onSearch(searchQuery);
    setSearchMessage(
      hasMatch
        ? `Showing the section that matches "${searchQuery.trim()}".`
        : "No matching section found. Try another search.",
    );
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="topBar">
        <div className="topBar__inner section-shell">
          <a className="topBar__app-link" href="#solutions">
            <img src={PhoneIcon} alt="" />
            <span>Health information, made easier</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <div className="topBar__links">
            <a href="#contact">
              <FontAwesomeIcon icon={faLocationDot} />
              Get in touch
            </a>
            <a href="tel:+61770106803">
              <FontAwesomeIcon icon={faPhone} />
              +61 7 7010 6803
            </a>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="navigation__inner section-shell">
          <a className="navigation__logo" href="#home" aria-label="Medfysio home">
            <img src={SiteLogo} alt="" />
          </a>
          <nav
            className={menuOpen ? "navigation__menu is-open" : "navigation__menu"}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <ul className="navigation__links-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <form className="navigation__search" role="search" onSubmit={handleSearch}>
              <label className="sr-only" htmlFor="site-search">
                Search this page
              </label>
              <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
              <input
                id="site-search"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                required
              />
              <button type="submit" aria-label="Search">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
            <a
              className="navigation__cta-button"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get started <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <p className="navigation__search-message" role="status" aria-live="polite">
              {searchMessage}
            </p>
          </nav>
          <button
            className="navigation__toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
