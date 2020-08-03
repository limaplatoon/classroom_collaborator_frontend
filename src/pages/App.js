import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import HomePage from "./HomePage";
import Navbar from "../components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
