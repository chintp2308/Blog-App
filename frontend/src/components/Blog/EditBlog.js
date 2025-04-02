import React, { useEffect, useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import "./CreateNewBlog.scss";
import { useHistory } from "react-router-dom";
import { GrUpload } from "react-icons/gr";
import CommonUtils from "../../utils/CommonUtils";
import Lightbox from "react-image-lightbox";
import { getDetailBlog, putUpdateBlog } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditBlog = (props) => {
  const md = new MarkdownIt();
  const history = useHistory();
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [contentHTML, setContentHTML] = useState("");
  const { id } = useParams();
  const [isImageOpen, setIsImageOpen] = useState(false);

  const data = {
    id,
    title,
    description,
    image,
    contentMarkdown,
    contentHTML,
  };

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const res = await getDetailBlog(id);
      if (res && res.errCode === 0) {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setContentMarkdown(res.data.contentMarkdown);
        setContentHTML(res.data.contentHTML);
        setImage(res.data.image);
      }
    };
    fetchBlogDetails();
  }, [id]);

  const handleClickSave = async () => {
    const res = await putUpdateBlog(data);
    if (res && res.errCode === 0) {
      toast.success(res.errMessage);
      history.push("/");
    } else {
      toast.error(res.errMessage);
    }
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = await CommonUtils.getBase64(file);
      setImage(url);
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEditorChange = ({ text }) => {
    setContentMarkdown(text);
    setContentHTML(md.render(text));
  };

  const handeClickImage = () => {
    setIsImageOpen(true);
  };

  return (
    <div className="container-add-bog">
      <div className="content-title">Edit Blog</div>
      <div className="content-body row">
        <div className="col-6 form-group">
          <span>Title(*)</span>
          <input
            type="text"
            placeholder="Thêm tiêu đề "
            onChange={(event) => handleTitleChange(event)}
            value={title}
          />
        </div>
        <div className="col-6 preview-image-container">
          <label htmlFor="fileInput" className="image-new-blog">
            Tải ảnh <GrUpload />
          </label>

          <input
            id="fileInput"
            type="file"
            hidden
            onChange={handleImageChange}
          />
          <div className="preview-image">
            {image && <img src={image} onClick={handeClickImage} />}
          </div>
        </div>
        <div className="col-6 form-group">
          <span>Description(*)</span>
          <textarea
            type="text"
            placeholder="Mô tả "
            className="description-input"
            onChange={(event) => handleDescriptionChange(event)}
            value={description}
          />
        </div>
      </div>
      {isImageOpen && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => setIsImageOpen(false)}
        />
      )}
      <MdEditor
        style={{ height: "300px" }}
        renderHTML={(text) => md.render(text)}
        onChange={handleEditorChange}
        value={contentMarkdown}
      />
      <button
        onClick={() => {
          handleClickSave();
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          history.push(`/detail/${id}`); // Redirect to the detail page of the blog
        }}
      >
        Close
      </button>
    </div>
  );
};

export default EditBlog;
