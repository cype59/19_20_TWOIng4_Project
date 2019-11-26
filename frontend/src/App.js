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
      <div className="grilleWidget">
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col lg="4" sm="6"><WidgetBase nomWidget="MyPieChart" chartType= "piechart"></WidgetBase></Col>
          <Col lg="8" sm="6"><WidgetBase nomWidget="MyLineChart" chartType= "linechart"></WidgetBase></Col>
        </Row>

      </div>


    </div>
  );
}

export default App;
