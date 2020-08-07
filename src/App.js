import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar'
import HomePage from "./pages/HomePage";
import MyCalenderPage from './pages/MyCalenderPage';
import TestPage from './pages/TestPage';
import Container from "react-bootstrap/Container";
import ProtectedRoute from './pages/authentication/requiresAuth';
import Profile from './pages/ProfilePage';




const history = createBrowserHistory();
const App = () => {
  const [navRenderSwitch, setNavRenderSwitch] = useState(true)

  const flipNavRenderSwitch = () => {
    setNavRenderSwitch(!navRenderSwitch)
  }

  const CalenderRenderer = (props) => {
    return <MyCalenderPage flipNavRenderSwitch={flipNavRenderSwitch} />
  }

  const DefaultContainer = () => (
    <Fragment>
      <Navbar />
      <Container>
        <ProtectedRoute exact path='/' component={HomePage} />
        <ProtectedRoute exact path='/my-calender' render={CalenderRenderer} />
        <ProtectedRoute exact path='/profile' component={Profile} />
      </Container>
    </Fragment>
  )

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
