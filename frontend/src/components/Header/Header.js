import React from "react";
import { FaReact } from "react-icons/fa";
import "./Header.scss";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <div className="container-header">
      <div className="title-blog" onClick={() => history.push("/")}>
        <FaReact /> Blog App
      </div>
      <div className="btn-blog">
        <button onClick={() => history.push("/login")}>Login</button>
      </div>
    </div>
  );
};

export default Header;
