import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navber from './components/Navber'
import Member1 from './Templates/Member1';
import Member2 from './Templates/Member2';
import Member3 from './Templates/Member3';
import Member4 from './Templates/Member4';
import Home from './Templates/Home';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navber />
        <Route exact path='/' component={Home}/>
        <Route path='/Member1' component={Member1}/>
        <Route path='/Member2' component={Member2}/>
        <Route path='/Member3' component={Member3}/>
        <Route path='/Member4' component={Member4}/>
      </Router>
    </div>
  );
}

export default App;
