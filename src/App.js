import React, {Fragment, useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar'
import HomePage from "./pages/HomePage";
import MyCalenderPage from './pages/MyCalenderPage';
import MyClasses from "./pages/MyClasses";
import TestPage from './pages/TestPage';
import Container from "react-bootstrap/Container";




const history = createBrowserHistory();
const App = () => {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJleHAiOjE1OTc0MzE0NTIsImVtYWlsIjoiIn0.ST4QhUmUOKgumwo7LIUun-QR37z4Rk3ZPYuzseFeUBI')


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
        <Route exact path='/my-classes' component={MyClasses} /> 
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
