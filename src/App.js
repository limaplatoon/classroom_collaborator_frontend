import React, {Fragment, useState} from "react";
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
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/my-calender' render={CalenderRenderer} /> 
        <Route exact path='/test' component={TestPage} /> 
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
