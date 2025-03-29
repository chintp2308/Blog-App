import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo192.png";
import "./DetailBlogApp.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDeleteBlog, getDetailBlog } from "../../services/apiServices";
import { useParams } from "react-router-dom";
import { Buffer } from "buffer";
import { toast } from "react-toastify";
import DeleteVerify from "./DeleteVerify";

const DetailBlogApp = (prop) => {
  const history = useHistory();
  const [detailBlog, setDetailBlog] = useState([]);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);

  const getDetailPost = async () => {
    const res = await getDetailBlog(id);
    setDetailBlog([res.data]);
  };

  useEffect(() => {
    getDetailPost();
  }, [id]);

  const handleClickDelete = async () => {
    const res = await getDeleteBlog(blogToDelete);
    if (res && res.errCode === 0) {
      toast.success(res.errMessage);
      history.push("/");
    } else {
      toast.error(res.errMessage);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container-detail-blog">
      {detailBlog &&
        detailBlog.length > 0 &&
        detailBlog.map((item, index) => {
          let imageBase64 = "";
          if (item.image) {
            imageBase64 = new Buffer(item.image, "base64").toString("binary");
          }

          return (
            <div>
              <div className="title-detail">{item.title}</div>
              <div className="img-detail">
                <img src={imageBase64}></img>
              </div>
              <div className="author-date">
                Tác giả: User| Ngày đăng: 27/12/2025
              </div>

              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.contentHTML }}
                ></div>
              </div>
              <div className="btn-detail">
                <button
                  className="delete-detail"
                  onClick={() => {
                    setBlogToDelete(item);
                    setIsModalOpen(true);
                  }}
                >
                  Xoá
                </button>
                <button
                  className="edit-detail"
                  onClick={() => history.push(`/edit-detail/${item.id}`)} // Pass blog ID to edit page
                >
                  Sửa
                </button>
                <button
                  className="come-back-detail"
                  onClick={() => history.push("/")}
                >
                  Quay lại
                </button>
              </div>
            </div>
          );
        })}
      {isModalOpen && (
        <DeleteVerify
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleClickDelete}
          blogToDelete={blogToDelete}
        />
      )}
    </div>
  );
};

export default DetailBlogApp;
