import React from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="container-register">
      <div className="register">
        <div className="title-register">Sign up</div>
        <div className="content-register">
          <div className="form-register">
            <div>
              {/* <label>Password</label> */}
              <input type="text" placeholder=" First Name" />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input type="text" placeholder=" Last Name" />
            </div>
            <div>
              {/* <label>Email</label> */}
              <input type="email" placeholder=" Email" />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input type="password" placeholder=" Password" />
            </div>
          </div>
          <button onClick={() => history.push("/login")}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
