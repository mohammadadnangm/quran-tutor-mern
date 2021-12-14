import React, { useState } from "react";
import "./Services.css";
import forTutorApi from "../API/forTutorApi.js";

const ForTutor = () => {
  const [serviceData, setServiceData] = useState(forTutorApi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Register as a Tutor
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xxl-4 work-container-subdiv"
                    key={id}
                  >
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div class="d-grid gap-2 col-3 mx-auto find-tutor-button">
            <button class="btn btn-secondary" type="button">
              Sign Up As Tutor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForTutor;
