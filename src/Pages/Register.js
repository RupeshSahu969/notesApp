import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";

import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import {registerInitiate} from "../Redux/action";


const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const currentUser = useSelector((state) => state.user);

  const dispach = useDispatch();

  const navigate = useNavigate();

  
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (password !== passwordConfirm) {
      return;
    }
    dispach(registerInitiate(state))
     
    // alert(`${state.email}`)
    setState({ email:"",  displayName:"",  password:"",   passwordConfirm:""})
    navigate("/login");
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup text-center">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign Up
          </h1>

          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="inputRePassword"
            className="form-control"
            placeholder="Repeat Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button onClick={handleSubmit}  className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-user-plus"></i> &nbsp; Sign Up
          </button>
          <Link to="/login">
            <p style={{ textAlign: "center" }}>
              {" "}
              <i className="fas fa-angle-left"></i>Back
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
