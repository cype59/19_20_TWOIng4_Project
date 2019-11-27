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
          <Col lg="3" sm="4"><WidgetBase nomWidget="MyPieChart" chartType= "piechart"></WidgetBase></Col>
          <Col lg="6" sm="4"><WidgetBase nomWidget="MyLineChart" chartType= "linechart"></WidgetBase></Col>
          <Col lg="3" sm="4"><WidgetBase nomWidget="MySpiderChart" chartType= "spiderchart"></WidgetBase></Col>
        </Row>
        <Row>
          <Col lg="4" sm="12"><WidgetBase nomWidget="MyBarChart" chartType= "barchart"></WidgetBase></Col>
        </Row>

      </div>

    </div>
  );
}

export default App;

