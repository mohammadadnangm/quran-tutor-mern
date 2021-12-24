import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignupC.css";
import axios from "axios";

const SignupC = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Signup = (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    if (name && email && phone && work && password && password === cpassword) {
      axios.post("/signup", user).then((res) => {
        alert(res.data.message);
        history.push("/signin");
      });
    } else {
      alert("invlid input front end");
    }
  };

  return (
    <>
      <section className="signup-section">
        <div className="container signup-container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="signup-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    New Here <br /> Sign Up.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.png"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="signup-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          autoComplete="off"
                          placeholder="Name"
                          value={user.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Phone Number "
                          value={user.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12 col-lg-6 signup-input-feild">
                        <input
                          type="text"
                          name="work"
                          id="work"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Work"
                          value={user.work}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 signup-input-feild">
                        <input
                          type="text"
                          name="password"
                          id="password"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Password"
                          value={user.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="cpassword"
                          id="cpassword"
                          autoComplete="off"
                          className="form-control"
                          placeholder="Confirm Password"
                          value={user.cpassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100 mt-5"
                      onClick={Signup}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupC;
