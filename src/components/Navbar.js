import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import { useHistory } from "react-router-dom";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Navbar = () => {
  // toggle bar in mobile view click functionality
  const [show, setShow] = useState(false);
  const history = useHistory();

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              Quran Tutor
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink class="nav-link" to="/findtutors">
                    Find Tutors
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/findstudents">
                    Find Students
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/priceplan">
                    Plans
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/aboutme">
                    About Me
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink class="nav-link" to="/signin">
                    SignIn
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/signup">
                    SignUp
                  </NavLink>
                </li> */}
              </ul>
              <form class="d-flex">
                <button
                  class="btn  btn-style"
                  type="submit"
                  //onClick={<Signup />}
                  onClick={() => history.push("/signup")}
                >
                  Sign Up
                </button>
                <button
                  class="btn  btn-style btn-style-border"
                  type="submit"
                  // onClick={<Signin />}
                  onClick={() => history.push("/signin")}
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
