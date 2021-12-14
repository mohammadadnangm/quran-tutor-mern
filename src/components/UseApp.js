import React, { useState } from "react";
import "./UseApp.css";
import useAppApi from "../API/useAppApi.js";

const UseApp = () => {
  const [aboutData, setAboutData] = useState(useAppApi);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">Quran Tutor App</h3>
              <p className="mini-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                optio rerum beatae sapiente molestias unde doloremque veritatis
                officia nesciunt consequatur magnam vitae recusandae vel
                consectetur, vero voluptas asperiores possimus ullam.
              </p>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UseApp;
