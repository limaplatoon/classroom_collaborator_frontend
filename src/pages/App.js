import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "./HomePage";
import Navbar from "../components/Navbar/Navbar";
import FormikBasicFormLevel from "./FormikForm";

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/validation" component={FormikBasicFormLevel} />
          </Switch>
        </Container>
      </div>
    </Fragment>
  );
}

export default withRouter(App);
