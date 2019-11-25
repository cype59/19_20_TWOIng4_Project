import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Widget from './widget'



function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Widget></Widget>
        <Widget></Widget>
    </div>
  );
}

export default App;
