import React from 'react';
import Router from './Router.jsx'
import './App.css';
import Navber from './components/Navber'


function App() {
  return (
    <div className="App">
      <Navber />
      <Router/>
    </div>
  );
}

export default App;
