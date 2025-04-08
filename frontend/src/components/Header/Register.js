import React, { useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (firstName, lastName, email, password) => {
    const resRegister = await postRegister(
      firstName,
      lastName,
      email,
      password
    );
    if (resRegister && resRegister.errCode === 0) {
      toast.success(resRegister.errMessage);
      history.push("/login");
    } else {
      toast.error(resRegister.errMessage);
    }
  };
  return (
    <div className="container-register">
      <div className="register">
        <div className="title-register">Sign up</div>
        <div className="content-register">
          <div className="form-register">
            <div>
              {/* <label>Password</label> */}
              <input
                type="text"
                placeholder=" First Name"
                onChange={handleFirstName}
                value={firstName}
              />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type="text"
                placeholder=" Last Name"
                onChange={handleLastName}
                value={lastName}
              />
            </div>
            <div>
              {/* <label>Email</label> */}
              <input
                type="email"
                placeholder=" Email"
                onChange={handleEmail}
                value={email}
              />
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type="password"
                placeholder=" Password"
                onChange={handlePassword}
                value={password}
              />
            </div>
          </div>
          <button
            onClick={() => handleRegister(firstName, lastName, email, password)}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
