import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutmeC.css";

const AboutmeC = () => {
  return (
    <>
      <section className="aboutme-section mt-5">
        <div className="container aboutme-container">
          <form method="">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-image">
                  <img src="./images/hero1.png" alt="profile-pic" />
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-heading">
                  <h3>Adnan</h3>
                  <h4>Tutor</h4>
                  <p className="profile-rating mt-3 mb-5">Ranking</p>

                  <ul class="nav nav" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2 edit-ptofile-button">
                <input
                  type="submit"
                  className="profile-edit-button"
                  value="edit profile"
                  name="btn-AddMore"
                />
              </div>
            </div>
            <div className="row">
              {/* left side link */}
              <div className="col-md-4">
                <div className="profile-links">
                  <p>Work Links</p>
                  <a href="#">youtube</a>
                  <a href="#">Facebook</a>
                  <a href="#">instagram</a>
                  <a href="#">twitter</a>
                  <a href="#">linkedin</a>
                </div>
              </div>

              {/* right side data toggle */}
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="User id">User id</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">aefqa324</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Adnan</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">tutor</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Adnan</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">tutor</label>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <label htmlFor="User id">Adnan</label>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="User id">tutor</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AboutmeC;
