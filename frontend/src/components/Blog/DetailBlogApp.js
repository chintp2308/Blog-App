import React from "react";
import logo from "../../assets/img/logo192.png";
import "./DetailBlogApp.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DetailBlogApp = () => {
  const history = useHistory();
  return (
    <div className="container-detail-blog">
      <div className="title-detail">Cách để Lập trình</div>
      <div className="img-detail">
        <img src={logo}></img>
      </div>
      <div className="author-date">Tác giả: User| Ngày đăng: 27/12/2025</div>

      <div>
        Khi mà công nghệ ngày càng trở nên dễ tiếp cận, nhu cầu dành cho lập
        trình viên cũng ngày một tăng cao. Lập trình là kỹ năng được trau dồi và
        hoàn thiện theo thời gian. Dù vậy, bất kỳ ai cũng phải trải qua bước
        khởi đầu nhất định. Có vô số ngôn ngữ phù hợp với người mới bắt đầu, bất
        kể lĩnh vực mà họ chọn (ví dụ. JavaScript, v.v... JavaScript tương đối
        cao, do đó bạn hãy bắt đầu với HTML hoặc CSS). Hãy tham khảo tiếp để bắt
        đầu với công cuộc học lập trình của bạn.
      </div>
      <div className="btn-detail">
        <button className="delete-detail">Xoá</button>
        <button
          className="edit-detail"
          onClick={() => history.push("/edit-detail")}
        >
          Sửa
        </button>
        <button className="come-back-detail" onClick={() => history.push("/")}>
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default DetailBlogApp;
