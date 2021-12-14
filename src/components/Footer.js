import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Our Mission</a>
                    </li>
                    <li>
                      <a href="#">Reliable, Secure</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Available</h2>
                  <ul>
                    <li>
                      <a href="#">Web</a>
                    </li>
                    <li>
                      <a href="#">IOS</a>
                    </li>
                    <li>
                      <a href="#">Android</a>
                    </li>
                    <li>
                      <a href="#">How to Start?</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Quran Teaching</a>
                    </li>
                    <li>
                      <a href="#">Earning</a>
                    </li>
                    <li>
                      <a href="#">Learning</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="#">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ {new Date().getFullYear()} Quran Tutor. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
