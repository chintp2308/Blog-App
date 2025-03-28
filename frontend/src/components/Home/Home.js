import "./Home.scss";
import logo from "../../assets/img/logo192.png";
import { CiSearch } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllBlog } from "../../services/apiServices";
import { toast } from "react-toastify";
import { Buffer } from "buffer";
const Home = () => {
  const history = useHistory();

  const [listBlog, setListBlog] = useState([]);

  const getAllPost = async () => {
    const res = await getAllBlog();
    if (res && res.errCode === 0) {
      toast.success(res.errMessage);
      setListBlog(res.data);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const handleViewDetailPost = (data) => {
    history.push(`/detail/${data.id}`);
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
