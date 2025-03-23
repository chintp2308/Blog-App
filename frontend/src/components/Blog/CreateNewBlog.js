import React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import "./CreateNewBlog.scss";
import { useHistory } from "react-router-dom";
import { GrUpload } from "react-icons/gr";
const CreateNewBlog = (props) => {
  const md = new MarkdownIt();
  const history = useHistory();
  const handleClickSave = () => {
    alert("Save succeed!");
  };

  return (
    <div className="container-add-bog">
      <div className="content-title">Add new Blog</div>
      <div className="content-body row">
        <div className="col-6 form-group">
          <span>Title(*)</span>
          <input type="text" placeholder="Thêm tiêu đề " />
        </div>
        <div className="col-6 preview-image-container">
          <label htmlFor="fileInput" className="image-new-blog ">
            Tải ảnh <GrUpload />
          </label>

          <input id="fileInput" type="file" hidden />
          <div className="preview-image"> </div>
        </div>
        <div className="col-6 form-group">
          <span>Description(*)</span>
          <input
            type="text"
            placeholder="Mô tả "
            className="description-input"
          />
        </div>
      </div>
      <MdEditor
        style={{ height: "300px" }}
        renderHTML={(text) => md.render(text)}
        // onChange={handleEditorChange}
        // value={postData?.contentMarkdown || ""}
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
          history.push("/");
        }}
      >
        Close
      </button>
    </div>
  );
};

export default CreateNewBlog;
