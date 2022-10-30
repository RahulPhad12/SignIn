import vector from "../assets/about-banner.png";
import { BsBriefcase } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import "../styles/about.css";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-box">
          <div className="about-top">
            <h2 className="h2 section-title">What we do</h2>

            <p className="section-text">
              Each time a digital asset is purchased or sold, Sequoir donates a
              percentage of the fees back into the development of the asset
              through its charitable foundation.
            </p>

            <ul className="about-list">
              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <BsBriefcase />
                  </div>

                  <h3 className="h3 card-title">
                    Paid Search and Social Management
                  </h3>

                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir
                    donates a percentage of the fees back
                  </p>
                </div>
              </li>

              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <IoChatbubblesOutline />
                  </div>

                  <h3 className="h3 card-title">Direct Response Content</h3>

                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir
                    donates a percentage of the fees back
                  </p>
                </div>
              </li>

              <li>
                <div className="about-card">
                  <div className="card-icon">
                    <IoRocketOutline />
                  </div>

                  <h3 className="h3 card-title">
                    CRO and Retention Optimizations
                  </h3>

                  <p className="card-text">
                    Each time a digital asset is purchased or sold, Sequoir
                    donates a percentage of the fees back
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="about-bottom">
            <figure className="about-bottom-banner">
              <img src={vector} alt="about banner" className="about-banner" />
            </figure>

            <div className="about-bottom-content">
              <h2 className="h2 section-title">We’re obsessed with growth</h2>

              <p className="section-text">
                Each time a digital asset is purchased or sold, Sequoir donates
                a percentage of the fees back into the development of the asset
                through its charitable foundation.
              </p>

              <button className="btn btn-secondary">Sign Up For Free</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
