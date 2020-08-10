import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import myReviewsPage from "./pages/MyReviewsPage"
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar'
import HomePage from "./pages/HomePage";
import MyCalenderPage from './pages/MyCalenderPage';
import MyClassesPage from './pages/MyClassesPage';
import JoinClassPage from './pages/JoinClassPage';
import ProfessorReviewsPage from './pages/ProfessorReviewsPage';
import Container from "react-bootstrap/Container";
import ProtectedRoute from './pages/authentication/requiresAuth';
import Profile from './pages/ProfilePage';
import Logout from "./pages/authentication/logout";
import NavBarContextProvider from "./context/NavBarContext";




const history = createBrowserHistory();
const App = () => {

  console.log(localStorage.token)
  const DefaultContainer = () => (
    <Fragment>
      {!localStorage.getItem('token') && <Redirect to={{ pathname: '/login' }} />}

      <NavBarContextProvider>
        <Navbar />

        <Container>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/myClasses' component={MyClassesPage} />
          <Route exact path='/myReviews' component={myReviewsPage} />
          <Route exact path='/Reviews/Professor/:ProfID' component={ProfessorReviewsPage} />
          <Route exact path='/JoinAClass' component={JoinClassPage} />
          <Route exact path='/my-calender' component={MyCalenderPage} />
          <Route exact path='/profile' component={Profile} />
        </Container>
      </NavBarContextProvider>
    </Fragment>
  )



  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
