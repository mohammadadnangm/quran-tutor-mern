import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learn Quran with tajweed <br /> Easy For You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.png"
                alt="heroimg"
                className="img-fluid"
              />
              <div class="two-btn">
                <button type="button" class="btn btn-primary btn-lg p-3 ">
                  Get Free Trial
                </button>
                <button type="button" class="btn btn-secondary btn-lg p-3">
                  Sign Up as Tutor
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
