import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  return (
    <div className="container-login">
      <div className="login">
        <div className="title-login">Login</div>
        <div className="content-login">
          <div className="form-login">
            <div>
              {/* <label>Email</label> */}
              <input type="email" placeholder=" Email" />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input type="password" placeholder=" Password" />
            </div>
          </div>
          <div className="forgot-pass">Forgot password?</div>
          <button onClick={() => history.push("/")}>Login</button>
        </div>
        <div className="c-sign-up">
          or{" "}
          <a className="sign-up" onClick={() => history.push("/register")}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
