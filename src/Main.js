import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux"; replace divs with Provider here for using redux
import App from "./pages/App";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
const history = createBrowserHistory();
const MainApp = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainApp;
