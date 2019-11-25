import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Widget from './widget'
import Header from './Components/Header'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header/>  
        <Widget></Widget>
        <Widget></Widget>    
    </div>
  );
}

export default App;
