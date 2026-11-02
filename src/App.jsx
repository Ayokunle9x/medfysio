import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBrain,
  faCalendarCheck,
  faCheck,
  faHeartPulse,
  faPersonWalking,
  faScaleBalanced,
  faScissors,
  faStethoscope,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/Navbar/Navbar";
import SiteLogo from "./assets/logo.svg";
import heroDoctorPhoto from "./assets/hero-doctor.jpg";
import consultationPhoto from "./assets/care-consultation.jpg";
import wellnessPhoto from "./assets/wellness-article.jpg";
import doctorTeamPhoto from "./assets/doctor-team.jpg";
import eggIcon from "./assets/food-egg.png";
import broccoliIcon from "./assets/food-broccoli.png";
import cheeseIcon from "./assets/food-cheese.png";
import breadIcon from "./assets/food-bread.png";
import primaryCareIcon from "./assets/icon-primary-care.png";
import mentalWellnessIcon from "./assets/icon-mental-wellness.png";
import heartCareIcon from "./assets/icon-heart-care.png";
import fertilityIcon from "./assets/icon-fertility.png";
import "./App.css";

const foodItems = [
  { name: "Egg", detail: "1 serving", calories: "134 kcal", image: eggIcon },
  { name: "Broccoli", detail: "100 g", calories: "25 kcal", image: broccoliIcon },
  { name: "Cheese", detail: "100 g", calories: "25 kcal", image: cheeseIcon },
  { name: "Bread", detail: "1 slice", calories: "95 kcal", image: breadIcon },
];

const services = [
  {
    name: "Primary care",
    description:
      "Practical, personal support to help you stay well and make informed decisions.",
    image: primaryCareIcon,
  },
  {
    name: "Mental wellbeing",
    description:
      "A thoughtful place to find guidance and take care of your emotional wellbeing.",
    image: mentalWellnessIcon,
  },
  {
    name: "Heart health",
    description:
      "Clear information and supportive care for a healthier heart and everyday life.",
    image: heartCareIcon,
  },
  {
    name: "Fertility",
    description:
      "Guidance to help you understand your options and plan your next steps.",
    image: fertilityIcon,
  },
  {
    name: "Surgery",
    description:
      "Helpful information to make your care journey easier to understand.",
    icon: faScissors,
  },
  {
    name: "Healthy weight",
    description:
      "Supportive resources for building sustainable habits at your own pace.",
    icon: faScaleBalanced,
  },
];

const articles = [
  {
    title: "The impact of self-diagnosis on mental health",
    image: consultationPhoto,
    summary:
      "Online information can be a useful starting point, but it cannot replace a conversation with a qualified health professional.",
    detail:
      "Symptoms can have many causes, and reading about them online may leave you with more questions than answers. Use reliable sources, write down what you are experiencing, and speak with a health professional who can understand your circumstances.",
  },
  {
    title: "Understanding chest discomfort",
    image: wellnessPhoto,
    summary:
      "Learn why it is important to discuss new or concerning symptoms with a healthcare professional.",
    detail:
      "Chest discomfort can have different causes, and only a qualified professional can assess your situation. If you are worried about a symptom, seek prompt medical advice. For a medical emergency, contact your local emergency service.",
  },
  {
    title: "When to take a closer look at your wellbeing",
    image: doctorTeamPhoto,
    summary:
      "A few simple ways to notice changes in how you feel and know when to ask for support.",
    detail:
      "Changes in energy, mood, sleep or appetite are worth paying attention to, especially when they persist or affect daily life. Keeping notes can help you explain what has changed when you speak with a health professional.",
  },
];

function App() {
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleSearch = (query) => {
    const searchTerm = query.trim().toLowerCase();
    if (!searchTerm) return false;

    const match = Array.from(document.querySelectorAll("main section")).find(
      (section) => section.textContent.toLowerCase().includes(searchTerm),
    );

    if (!match) return false;

    match.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    setNewsletterMessage(
      "Thanks for your interest. Newsletter sign-up is not connected yet.",
    );
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <main>
        <section className="hero section-shell" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              A clearer path to feeling better
            </p>
            <h1 id="hero-title">
              Healthcare solutions
              <br />
              for a <span>better life.</span>
            </h1>
            <p className="hero__description">
              Medfysio brings health information and supportive care together,
              so you can make more confident choices for your wellbeing.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#services">
                Explore our services <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a className="text-link" href="#about">
                Get to know us
              </a>
            </div>
            <div className="hero__trust">
              <div className="hero__trust-icon">
                <FontAwesomeIcon icon={faUserDoctor} />
              </div>
              <p>
                <strong>Care that starts with you</strong>
                <span>Clear information. Thoughtful support.</span>
              </p>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art__halo" />
            <div className="hero-art__spark hero-art__spark--one" />
            <div className="hero-art__spark hero-art__spark--two" />
            <div className="hero-art__photo-frame">
              <img
                src={heroDoctorPhoto}
                alt="A doctor ready to support her patients"
              />
              <div className="hero-art__photo-caption">
                <span className="hero-art__photo-icon">
                  <FontAwesomeIcon icon={faHeartPulse} />
                </span>
                <span>
                  <strong>Care that starts with you</strong>
                  <small>Thoughtful support, at your pace</small>
                </span>
              </div>
            </div>
            <div className="floating-note floating-note--care">
              <span className="floating-note__icon">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span>
                <strong>Your care, your pace</strong>
                <small>Support when you need it</small>
              </span>
            </div>
            <div className="floating-note floating-note--heart">
              <FontAwesomeIcon icon={faHeartPulse} />
              <span>Wellbeing, made simpler</span>
            </div>
          </div>
        </section>

        <section className="intro-band" id="about" aria-labelledby="about-title">
          <div className="intro-band__inner section-shell">
            <div>
              <p className="eyebrow eyebrow--light">Here for your health journey</p>
              <h2 id="about-title">
                Feel more confident about
                <br />
                your next step.
              </h2>
            </div>
            <p>
              Whether you are looking for trusted information or exploring
              care options, Medfysio helps make the journey easier to navigate.
            </p>
            <a className="button button--white" href="#solutions">
              Discover Medfysio <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </section>

        <section className="solutions section-shell" id="solutions" aria-labelledby="solutions-title">
          <div className="section-heading">
            <p className="eyebrow">Everyday tools for your wellbeing</p>
            <h2 id="solutions-title">
              Take an active role in
              <br />
              <span>your health.</span>
            </h2>
            <p>
              Simple, practical ways to understand your habits and keep your
              care journey moving forward.
            </p>
          </div>

          <article className="feature-row feature-row--health">
            <div className="feature-row__copy">
              <span className="step-label">STEP 01 <i /></span>
              <h3>Check in with your health, in real time</h3>
              <p>
                Keep track of the things that matter to you. A clearer picture
                of your daily wellbeing can help you have more informed
                conversations with your care team.
              </p>
              <a className="text-link text-link--green" href="#contact">
                Explore health tracking <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="health-panel" aria-label="Sample health tracking dashboard">
              <div className="health-panel__header">
                <div>
                  <span>GOOD MORNING</span>
                  <strong>Your health at a glance</strong>
                </div>
                <span className="health-panel__avatar">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </span>
              </div>
              <div className="health-panel__summary">
                <div>
                  <span>Today&apos;s activity</span>
                  <strong>6,240 <small>steps</small></strong>
                  <span className="health-panel__positive">
                    <FontAwesomeIcon icon={faCheck} /> Keep it up
                  </span>
                </div>
                <div className="activity-ring" aria-hidden="true">
                  <span>
                    <FontAwesomeIcon icon={faPersonWalking} />
                  </span>
                </div>
              </div>
              <div className="health-panel__week">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
              <div className="health-panel__progress" aria-hidden="true">
                <span style={{ height: "43%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "53%" }} />
                <span style={{ height: "82%" }} />
                <span style={{ height: "61%" }} />
                <span style={{ height: "73%" }} />
                <span style={{ height: "91%" }} />
              </div>
              <div className="health-panel__note">
                <FontAwesomeIcon icon={faHeartPulse} />
                <span>Wellness is a journey, not a race.</span>
              </div>
            </div>
          </article>

          <article className="feature-row feature-row--reverse">
            <div className="feature-row__copy">
              <span className="step-label">STEP 02 <i /></span>
              <h3>Make mindful choices, one day at a time</h3>
              <p>
                Notice the everyday choices that shape how you feel. Track
                meals and routines in a way that feels helpful, not
                overwhelming.
              </p>
              <a className="text-link text-link--green" href="#contact">
                Build healthy habits <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="nutrition-panel" aria-label="Sample daily food log">
              <div className="nutrition-panel__header">
                <div>
                  <span>YOUR DAILY LOG</span>
                  <strong>A little balance goes a long way.</strong>
                </div>
                <span className="nutrition-panel__date">TODAY</span>
              </div>
              <div className="nutrition-panel__summary">
                <div className="nutrition-panel__ring">
                  <span>1,284</span>
                  <small>kcal</small>
                </div>
                <div>
                  <strong>Your day, so far</strong>
                  <span>Keep checking in with yourself.</span>
                </div>
              </div>
              <div className="food-list">
                {foodItems.map((item) => (
                  <div className="food-item" key={item.name}>
                    <span className="food-item__icon">
                      <img src={item.image} alt="" />
                    </span>
                    <span className="food-item__name">
                      <strong>{item.name}</strong>
                      <small>{item.detail}</small>
                    </span>
                    <strong className="food-item__calories">{item.calories}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="feature-row">
            <div className="feature-row__copy">
              <span className="step-label">STEP 03 <i /></span>
              <h3>Find a rhythm that feels right for you</h3>
              <p>
                Keep an eye on your movement and activity over time. Take a
                break when you need one and celebrate the progress you make.
              </p>
              <a className="text-link text-link--green" href="#contact">
                See how it works <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="movement-panel" aria-label="Sample activity and heart-rate dashboard">
              <div className="movement-panel__header">
                <div>
                  <span>YOUR ACTIVITY</span>
                  <strong>Find your pace</strong>
                </div>
                <span className="movement-panel__icon">
                  <FontAwesomeIcon icon={faPersonWalking} />
                </span>
              </div>
              <div className="movement-panel__heart">
                <div>
                  <span>HEART RATE</span>
                  <strong>72 <small>bpm</small></strong>
                  <span className="movement-panel__average">Your daily snapshot</span>
                </div>
                <svg viewBox="0 0 360 92" role="img" aria-label="Illustrative heart rate line">
                  <path d="M0 56h55l18-26 20 52 24-67 22 48h36l18-21 20 16h55l17-19 20 18h55" />
                </svg>
              </div>
              <div className="movement-panel__stats">
                <div>
                  <span className="movement-stat__icon movement-stat__icon--green">
                    <FontAwesomeIcon icon={faPersonWalking} />
                  </span>
                  <span><strong>6,240</strong><small>Steps today</small></span>
                </div>
                <div>
                  <span className="movement-stat__icon movement-stat__icon--peach">
                    <FontAwesomeIcon icon={faHeartPulse} />
                  </span>
                  <span><strong>25 min</strong><small>Active time</small></span>
                </div>
              </div>
              <p className="movement-panel__disclaimer">
                Example display only. Not a medical device.
              </p>
            </div>
          </article>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="services__heading">
              <div className="section-heading section-heading--left">
                <p className="eyebrow">Thoughtful support, all in one place</p>
                <h2 id="services-title">
                  Care for your
                  <br />
                  <span>whole life.</span>
                </h2>
              </div>
              <p>
                Find information and care options designed around the things
                that matter to you and your family.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.name}>
                  <span className="service-card__icon">
                    {service.image ? (
                      <img src={service.image} alt="" />
                    ) : (
                      <FontAwesomeIcon icon={service.icon} />
                    )}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" aria-label={`Ask us about ${service.name}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach" id="stories" aria-labelledby="approach-title">
          <div className="approach__inner section-shell">
            <div className="approach__copy">
              <p className="eyebrow eyebrow--light">The Medfysio difference</p>
              <h2 id="approach-title">
                Good care begins
                <br />
                with <span>feeling heard.</span>
              </h2>
              <p>
                Your health journey is personal. We make it easier to find
                clear information, explore your options and feel supported
                along the way.
              </p>
              <a className="button button--white" href="#contact">
                Talk to our team <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="approach-card">
              <img
                className="approach-card__photo"
                src={consultationPhoto}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <span className="approach-card__quote" aria-hidden="true">&ldquo;</span>
              <div className="approach-card__symbol" aria-hidden="true">
                <FontAwesomeIcon icon={faHeartPulse} />
              </div>
              <blockquote>
                &ldquo;Healthcare feels more manageable when you have clear
                information and someone to help you understand your next step.&rdquo;
              </blockquote>
              <div className="approach-card__person">
                <span className="approach-card__avatar">
                  <FontAwesomeIcon icon={faUserDoctor} />
                </span>
                <span>
                  <strong>A more supported care journey</strong>
                  <small>Our promise to every patient</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="articles section-shell" id="articles" aria-labelledby="articles-title">
          <div className="articles__heading">
            <div className="section-heading section-heading--left">
              <p className="eyebrow">The Medfysio journal</p>
              <h2 id="articles-title">
                A little more knowledge.
                <br />
                <span>A lot more confidence.</span>
              </h2>
            </div>
            <p>
              Explore thoughtful reads about everyday wellbeing and finding
              the right support.
            </p>
          </div>
          <div className="article-grid">
            {articles.map((article, index) => (
              <article className="article-card" key={article.title}>
                <div className={`article-card__art article-card__art--${index + 1}`}>
                  <img
                    className="article-card__photo"
                    src={article.image}
                    alt=""
                    loading="lazy"
                  />
                  <span className="article-card__photo-shade" />
                  <span className="article-card__art-icon">
                    <FontAwesomeIcon
                      icon={[faBrain, faHeartPulse, faStethoscope][index]}
                    />
                  </span>
                  <span className="article-card__art-label">WELLBEING NOTES</span>
                </div>
                <div className="article-card__content">
                  <span className="article-card__category">HEALTH & WELLNESS</span>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <details className="article-card__details">
                    <summary>
                      Read article <FontAwesomeIcon icon={faArrowRight} />
                    </summary>
                    <p>{article.detail}</p>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter" id="contact" aria-labelledby="newsletter-title">
          <div className="newsletter__inner section-shell">
            <div>
              <p className="eyebrow eyebrow--light">Stay in the know</p>
              <h2 id="newsletter-title">
                A little more care
                <br />
                in your inbox.
              </h2>
              <p>
                Get thoughtful wellbeing reads and Medfysio updates, delivered
                from time to time.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Your email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email address"
                autoComplete="email"
                required
              />
              <button className="button button--white" type="submit">
                Subscribe <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <p className="newsletter-form__message" aria-live="polite">
                {newsletterMessage ||
                  "We respect your inbox. Newsletter sign-up is not connected yet."}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__main section-shell">
          <div className="site-footer__brand">
            <a href="#home" aria-label="Medfysio home">
              <img src={SiteLogo} alt="" />
            </a>
            <p>
              Clear, easy-to-understand health information and supportive care
              for your journey.
            </p>
            <a className="site-footer__email" href="mailto:Medfysio@business.com">
              Medfysio@business.com
            </a>
          </div>
          <div className="site-footer__links">
            <div>
              <h2>Explore</h2>
              <a href="#home">Home</a>
              <a href="#about">About us</a>
              <a href="#solutions">Solutions</a>
              <a href="#services">Services</a>
            </div>
            <div>
              <h2>Helpful links</h2>
              <a href="#articles">Health journal</a>
              <a href="#contact">Contact us</a>
              <a href="mailto:Medfysio@business.com?subject=Support">
                Support centre
              </a>
            </div>
            <div>
              <h2>Get in touch</h2>
              <a href="mailto:Medfysio@business.com">Medfysio@business.com</a>
              <a href="tel:+61770106803">+61 7 7010 6803</a>
              <a href="#contact">Send us a message</a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="site-footer__bottom-inner section-shell">
            <span>&copy; {new Date().getFullYear()} Medfysio. We care about your wellbeing.</span>
            <span>Health information is not a substitute for professional advice.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
