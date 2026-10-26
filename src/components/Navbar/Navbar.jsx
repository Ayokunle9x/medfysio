import "./Navbar.css";
import PhoneIcon from "../../assets/phone.svg";
import sitelogo from "../assets/sitelogo.png";

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
          <img src={sitelogo} alt="Medfysio Logo" />
        </div>
        <div className="navigation__links">
          <a href="#" className="navigation__link">
            Home
          </a>
          <a href="#" className="navigation__link">
            About
          </a>
          <a href="#" className="navigation__link">
            Services
          </a>
          <a href="#" className="navigation__link">
            Contact
          </a>
        </div>
        <div className="navigation__cta">
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
