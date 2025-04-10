import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./UIUX.css";
import UIUX from "../assestes/UIUX.jpg";
import { Link } from "react-router-dom";

const UIUXpage = () => {
  useEffect(() => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        disable: "mobile",
      });
    }

    document.querySelector(".hero-section")?.classList.add("show");

    const serviceItems = document.querySelectorAll(".service-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceItems.forEach((item) => observer.observe(item));

    return () => {
      serviceItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="uiux-page">
      {/* Hero Section */}
      <header className="hero-sectionuiux" data-aos="fade-up">
        <div className="containeruiux">
          <div className="hero-contentuiux">
            <h1>
              UI/UX &nbsp;<span className="security-orange">Design</span>
            </h1>
          </div>
        </div>
      </header>

      {/* About UI/UX Section */}
      <section className="about-sectionuiux">
        <div className="containeruiux">
          <div className="about-imageuiux" data-aos="fade-up">
            <img src={UIUX} alt="UI/UX Design Banner" className="uiux-img" />
          </div>
          <h2 data-aos="fade-up">
            Crafting Engaging{" "}
            <span className="highlightuiux">User Experiences</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            At Intellisys, we design intuitive, user-friendly, and visually
            stunning interfaces that enhance customer engagement. Our UI/UX
            development services focus on user-centric design, ensuring seamless
            interactions that boost brand identity and conversions.
          </p>
        </div>
      </section>

      {/* UI/UX Services */}
      <section className="servicesuiux">
        <div className="containeruiux">
          <h2 className="fade-in">
            Our <span className="highlightuiux">UI/UX Services</span>
          </h2>
          <div className="services-listuiux">
            <div className="service-itemuiux fade-in">
              <i className="bi bi-search"></i>
              <h3>UX Research & Strategy</h3>
              <p>
                We analyze user behavior to create an effective design strategy.
              </p>
            </div>

            <div className="service-itemuiux fade-in" data-delay="100">
              <i className="bi bi-vector-pen"></i>
              <h3>Wireframing & Prototyping</h3>
              <p>
                Creating interactive wireframes and prototypes for better
                visualization.
              </p>
            </div>

            <div className="service-itemuiux fade-in" data-delay="200">
              <i className="bi bi-phone"></i>
              <h3>Web & Mobile UI Design</h3>
              <p>
                Designing responsive and visually stunning interfaces for all
                devices.
              </p>
            </div>

            <div className="service-itemuiux fade-in" data-delay="300">
              <i className="bi bi-people"></i>
              <h3>User Journey Mapping</h3>
              <p>Understanding user touchpoints to enhance experience flow.</p>
            </div>

            <div className="service-itemuiux fade-in" data-delay="400">
              <i className="bi bi-clipboard-check"></i>
              <h3>Usability Testing</h3>
              <p>Evaluating designs with real users to improve efficiency.</p>
            </div>

            <div className="service-itemuiux fade-in" data-delay="500">
              <i className="bi bi-universal-access"></i>
              <h3>Accessibility Optimization</h3>
              <p>
                Ensuring designs meet accessibility standards for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <h2>
            Our <span className="highlight">UI/UX Technology Stack</span>
          </h2>
          <div className="tech-grid">
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma"
              />
              <h3>Figma</h3>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg"
                alt="Adobe XD"
              />
              <h3>Adobe XD</h3>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
                alt="Sketch"
              />
              <h3>Sketch</h3>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                alt="HTML & CSS"
              />
              <h3>HTML & CSS</h3>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JavaScript"
              />
              <h3>JavaScript</h3>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
              />
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our UI/UX Services */}
      <section className="why-choose-usuiux">
        <div className="containeruiux">
          <h2>
            Why Choose <span className="highlightuiux">Our UI/UX Services?</span>
          </h2>
          <div className="choose-us-griduiux">
            <div className="choose-itemuiux" data-aos="fade-up">
              <i className="bi bi-lightbulb"></i>
              <h3>Innovative Designs</h3>
              <p>
                We craft unique, visually appealing, and modern designs tailored
                to your brand.
              </p>
            </div>
            <div
              className="choose-itemuiux"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bi bi-speedometer"></i>
              <h3>Performance Focused</h3>
              <p>
                Our UI/UX designs are optimized for speed, efficiency, and
                smooth user interaction.
              </p>
            </div>
            <div
              className="choose-itemuiux"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-graph-up-arrow"></i>
              <h3>Conversion-Driven</h3>
              <p>
                We design with a focus on increasing user engagement and
                boosting conversions.
              </p>
            </div>
            <div
              className="choose-itemuiux"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-award"></i>
              <h3>Industry Expertise</h3>
              <p>
                Our team has deep industry knowledge and follows the latest
                design trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container1">
          <h2>On-Site Training & Workshops</h2>
          <div className="info-wrapper">
            <div className="info-box">
              <h3>University Collaborations</h3>
              <p>
                We collaborate with leading university to integrate real-world
                experience into the classroom, preparing students for future
                success in technology careers.
              </p>
            </div>
            <div className="info-box">
              <h3>Industry Expert Sessions</h3>
              <p>
                Our training includes sessions led by industry experts,
                providing insights into the latest trends, tools, and best
                practices in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="containercta">
          <h2>Looking for a Modern & Engaging UI?</h2>
          <p>
            Let's build a stunning and user-friendly digital experience
            together!
          </p>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIUXpage;
