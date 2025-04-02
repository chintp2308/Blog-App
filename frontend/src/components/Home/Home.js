import "./Home.scss";
import logo from "../../assets/img/logo192.png";
import { CiSearch } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllBlog, getSearchBlog } from "../../services/apiServices";
import { toast } from "react-toastify";
import { Buffer } from "buffer";
import { set } from "lodash";
const Home = () => {
  const history = useHistory();

  const [listBlog, setListBlog] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllPost = async () => {
    const res = await getAllBlog();
    // if (res && res.errCode === 0) {
    //   toast.success(res.errMessage);
    //   setListBlog(res.data);
    // } else {
    //   toast.error(res.errMessage);
    // }
    if (res && res.errCode !== 0) {
      toast.error(res.errMessage);
      setListBlog([]);
    } else {
      setListBlog(res.data);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const handleViewDetailPost = (data) => {
    history.push(`/detail/${data.id}`);
  };

  const handleOnChangeSearch = async (event) => {
    const value = event.target.value.trim().toLowerCase();
    // setSearchTerm(value);
    if (value) {
      setSearchTerm(value);
    } else {
      const res = await getAllBlog();
      setListBlog(res.data);
    }
  };
  const handleSearch = async () => {
    const res = await getSearchBlog(searchTerm);
    if (res && res.errCode === 0) {
      toast.success(res.errMessage);
      setListBlog(res.data);
    } else {
      toast.error(res.errMessage);
    }
  };

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
            onChange={(event) => {
              handleOnChangeSearch(event);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") handleSearch();
            }}
          />
          {/* <a className="icon-search">
          <CiSearch />
        </a> */}
          <button
            onClick={() => {
              handleSearch();
            }}
            className="search-button"
          >
            <CiSearch />
          </button>
        </div>
      </div>

      <div className="cards">
        {listBlog &&
          listBlog.length > 0 &&
          listBlog.map((item, index) => {
            let imageBase64 = "";
            if (item.image) {
              imageBase64 = new Buffer(item.image, "base64").toString("binary");
            }
            return (
              <div className="card" key={index}>
                <img src={imageBase64} className="card-image" />
                <div className="title-1">{item.title}</div>
                <div className="title-2">{item.description}</div>
                <button onClick={() => handleViewDetailPost(item)}>
                  Chi tiết
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Home;
