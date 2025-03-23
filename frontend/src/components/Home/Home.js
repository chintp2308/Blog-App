import "./Home.scss";
import logo from "../../assets/img/logo192.png";
import { CiSearch } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="container-home">
      <div className="add-search">
        <div className="btn-add-blog">
          <button onClick={() => history.push("/create-blog")}>
            Add new blog
            <MdAddCircleOutline />
          </button>
        </div>
        <div className="search-blog">
          <input
            type="text"
            className="title-search"
            placeholder="Tìm kiếm bài kiếm..."
          />
          {/* <a className="icon-search">
          <CiSearch />
        </a> */}
          <button className="search-button">
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <img src={logo} className="card-image" />
          <div className="title-1">Hành trình khám phá sức khoẻ</div>
          <div className="title-2">Bí quyết</div>
          <button onClick={() => history.push("/detail-blog")}>Chi tiết</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
