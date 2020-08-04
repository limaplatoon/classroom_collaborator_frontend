import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import MyCalenderPage from './pages/MyCalenderPage';
import TestPage from './pages/TestPage';

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={HomePage} /> 
              <Route exact path='/my-calender' component={MyCalenderPage} /> 
              <Route exact path='/test' component={TestPage} /> 
            </Switch>
          </Container>
      </Router>
    </div>
  );
}

export default App;
