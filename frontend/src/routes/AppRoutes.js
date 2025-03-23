import { Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import CreateNewBlog from "../components/Blog/CreateNewBlog";
import DetailBlogApp from "../components/Blog/DetailBlogApp";
import EditBlog from "../components/Blog/EditBlog";
import Login from "../components/Header/Login";
import Register from "../components/Header/Register";

// import Login from '../components/Login/Login';
// import Register from '../components/Register/Register';

const AppRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create-blog">
          <CreateNewBlog />
        </Route>
        <Route path="/detail-blog">
          <DetailBlogApp />
        </Route>
        <Route path="/edit-detail">
          <EditBlog />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        <Route path="*" exact>
          404 not found
        </Route>
      </Switch>
    </>
  );
};
export default AppRoutes;
