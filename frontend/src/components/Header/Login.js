import React, { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password");
    } else {
      const res = await postLogin(email, password);
      if (res && res.errCode === 0) {
        toast.success(res.errMessage);
        localStorage.setItem("token", res.data.token); // Lưu token vào localStorage
        window.dispatchEvent(new Event("storage")); // Kích hoạt sự kiện storage
        history.push("/");
      } else {
        toast.error(res.errMessage);
      }
    }
  };

  return (
    <div className="container-login">
      <div className="login">
        <div className="title-login">Login</div>
        <div className="content-login">
          <div className="form-login">
            <div>
              {/* <label>Email</label> */}
              <input
                type="email"
                placeholder=" Email"
                onChange={(event) => {
                  handleOnChangeEmail(event);
                }}
              />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder=" Password"
                onChange={(event) => {
                  handleOnChangePassword(event);
                }}
              />
            </div>
          </div>
          <div className="forgot-pass">Forgot password?</div>
          <button onClick={() => handleLogin()}>Login</button>
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
