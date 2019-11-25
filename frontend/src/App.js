import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import WidgetBase from './Widgets/WidgetBase'
import Header from './Components/Header'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Header/>  
        <WidgetBase></WidgetBase>
        <WidgetBase></WidgetBase>    
    </div>
  );
}

export default App;
