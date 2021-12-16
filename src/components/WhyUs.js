import React, { useState } from "react";
import "./WhyUs.css";
import whyUsApi from "../API/whyUsApi.js";

const WhyUs = () => {
  const [aboutData, setAboutData] = useState(whyUsApi);
  return (
    <>
      {/* 2nd part of bayt us section  */}

      <section className="whyus-section">
        <div className="container mb-5 whyus-container">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 whyus-section-lefttside d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Why Choose Us?</h3>
              <h1 className="main-heading">
                World class Services <br /> Simple, Reliable, Secure
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row whyus-section-info" key={id}>
                      <div className="col-1 whyus-section-number">{id}</div>
                      <div className="col-10 whyus-section-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border whyus-section-button">
                learn more
              </button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  text-center useapp-section-leftside-img">
              <img src="./images/callcenter.jpg" alt="WhyUsIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
