import React, { useState, useEffect, Component } from "react";
import { NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  // toggle bar in mobile view click functionality
  const [show, setShow] = useState(false);
  const history = useHistory();

  // function logout() {
  //   // localStorage.clear();
  //   // you can also like
  //   localStorage.removeItem("Token");
  //   window.location.href = "/signin";
  // }
  // const [userData, setUserData] = useState({});
  // let loggedin, loggedout;
  // //login or logout function
  // useEffect(() => {
  //   console.log("before axioss ggget called frontend");
  //   axios
  //     .get("/logout")
  //     .then((res) => {
  //       console.log("history push called sign in frontend");
  //     })
  //     .catch((error) => {
  //       console.log("set profile data error frontend");
  //       console.log(error);
  //     });
  // });

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/">
              Quran Tutor
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/findtutors">
                    Find Tutors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/findstudents">
                    Find Students
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/priceplan">
                    Plans
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/aboutme">
                    About Me
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                {/* {loggedout ? ( */}
                <li class="nav-item">
                  {/* <button onClick={logout}>Logout</button> */}
                  <NavLink class="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
                {/* ) : ( */}
                <li class="nav-item">
                  <form className="d-flex">
                    <button
                      className="btn  btn-style"
                      type="submit"
                      //onClick={<Signup />}
                      onClick={() => history.push("/signup")}
                    >
                      Sign Up
                    </button>
                    <button
                      className="btn  btn-style btn-style-border"
                      type="submit"
                      // onClick={<Signin />}
                      onClick={() => history.push("/signin")}
                    >
                      Log in
                    </button>
                  </form>
                </li>
                {/* )} */}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
