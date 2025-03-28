import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header/Header";
import "./App.scss";
import "react-image-lightbox/style.css";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="app-header">
            <Header />
          </div>
          <div className="app-container">
            <AppRoutes />
          </div>
          <div className="app-footer"></div>
        </div>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
