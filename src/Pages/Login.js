import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { googleSignInInitiate, loginInitiate } from "../Redux/action";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));

    navigate("/note");
  };
  const handleGooglesignIn = () => {
    dispatch(googleSignInInitiate());
    navigate("/note");
  };

  const handleFBsignIn = () => {};

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin text-center" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign In{" "}
          </h1>

          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGooglesignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Google
              </span>
            </button>
            
          </div>

          <p style={{ textAlign: "center" }}>OR</p>
          <input
            type="email"
            id="inputEmail"
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
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> &nbsp; Sign In
          </button>
          <hr />
          <p style={{ textAlign: "center" }}>Dont't have an account </p>
          <Link to="/signup">
            <button
              className="btn btn-primary btn-block "
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i>Sign up New Account{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
