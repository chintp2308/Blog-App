import axios from "../axios";

const getAllBlog = () => {
  return axios.get("http://localhost:8081/api/read");
};

const getAddBlog = (data) => {
  return axios.post("http://localhost:8081/api/create", data);
};

const getDetailBlog = (id) => {
  return axios.get(`http://localhost:8081/api/read-detail-by-id?id=${id}`);
};
const getDeleteBlog = (inputId) => {
  return axios.delete("http://localhost:8081/api/delete", {
    data: { id: inputId.id },
  });
};

const putUpdateBlog = (data) => {
  return axios.put("http://localhost:8081/api/update", data);
};

const getSearchBlog = (value) => {
  return axios.get(`http://localhost:8081/api/search?searchTerm=${value}`);
};
export {
  getAllBlog,
  getAddBlog,
  getDetailBlog,
  getDeleteBlog,
  putUpdateBlog,
  getSearchBlog,
};
