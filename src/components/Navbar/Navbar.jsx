import "./Navbar.css";
import PhoneIcon from "../../assets/phone.svg";
import SiteLogo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="topBar">
        <div className="topBar__left">
          <span className="topBar__left-icon">
            <img src={PhoneIcon} alt="Phone" />
          </span>
          <span className="topBar__left-text">Download Medfysio app here</span>
        </div>
        <div className="topBar__right">
          <span className="topBar__right-text">Location</span>
          <span className="topBar__right-text">Contact Us</span>
        </div>
      </div>
      <div className="navigation">
        <div className="navigation__logo">
          <img src={SiteLogo} alt="Medfysio Logo" />
        </div>
        <div className="navigation__links">
          <ul className="navigation__links-list">
            <li className="navigation__links-item">
              <a href="#">Home</a>
            </li>
            <li className="navigation__links-item">
              <a href="#">About</a>
            </li>
            <li className="navigation__links-item">
              <a href="#">Solution</a>
            </li>
            <li className="navigation__links-item">
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div className="navigation__cta">
          <FontAwesomeIcon icon={faSearch} className="navigation__cta-search-icon" />
          <input
            className="navigation__cta-search"
            placeholder="Search..."
          ></input>
          <button className="navigation__cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
