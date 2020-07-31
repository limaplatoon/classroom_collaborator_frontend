import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Router>
            <h1>hello</h1>
            <Route exact path='/' component={HomePage} /> 
          </Router>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
