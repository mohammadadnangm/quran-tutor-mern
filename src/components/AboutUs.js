import React, { useState } from "react";
import "./AboutUs.css";
import howToUseApp from "../API/useAppApi.js";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="about-section">
        <div className="container mb-5 about-container">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-start flex-column">
              <h1 className="mini-title">About Quran Tutor</h1>
              <h3 className="main-heading">A Brief Summary</h3>
              <p className="description">
                Do you want to read the Quran with proper pronunciation
                (Tajweed)? Would you like your child to memorize the Quran
                (Hifz) but don't know where to start? At Qutor, we make it our
                mission to develop innovative tools to help you achieve these
                goals. Whether you are proficient in reading the Quran and want
                to teach others or whether you wish to learn, create an account
                and begin your journey towards success.
              </p>

              <br />
              <button className="btn-style btn-style-border">About Us</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5 text-center  about-section-rightside-img">
              <img
                src="./images/aboutsection.png"
                alt="aboutusIMg"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
