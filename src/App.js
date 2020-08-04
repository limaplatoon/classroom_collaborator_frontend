import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Container>
            <Switch>
              <Route exact path='/' component={HomePage} /> 
              <Route exact path='/my-calender' component={TestPage} /> 
              <Route exact path='/my-classes' component={TestPage} /> 
            </Switch>
          </Container>
      </Router>
    </div>
  );
}

export default App;
