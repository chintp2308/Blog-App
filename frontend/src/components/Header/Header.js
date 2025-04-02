import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import "./Header.scss";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLogin(!!token); // Cập nhật trạng thái đăng nhập dựa trên token
    };

    checkLoginStatus();

    // Lắng nghe sự thay đổi của localStorage
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    history.push("/login");
  };

  return (
    <div className="container-header">
      <div className="title-blog" onClick={() => history.push("/")}>
        <FaReact /> Blog App
      </div>
      <div className="btn-blog">
        {isLogin ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={() => history.push("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
