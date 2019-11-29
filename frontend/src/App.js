import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import WidgetBase from './Widgets/WidgetBase'
import Header from './Components/Header'
import WidgetChiffre from './Widgets/WidgetChiffre'
import AdminPage from './Components/AdminPage';

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
          <Col><WidgetChiffre nombre="8000" couleur = '#0088FE' intitule="Capteurs"></WidgetChiffre></Col>
          <Col><WidgetChiffre nombre="352" couleur = '#00C49F' intitule="Utilisateurs"></WidgetChiffre></Col>
          <Col><WidgetChiffre nombre="80" couleur = '#FFBB28' intitule="Capteurs"></WidgetChiffre></Col>
          <Col><WidgetChiffre nombre="80" couleur = '#FF8042' intitule="Capteurs"></WidgetChiffre></Col>
        </Row>
        <Col lg="4" sm="12"><WidgetBase nomWidget="MyBarChart" chartType= "barchart"></WidgetBase></Col>
        <Row>
          <Col lg="4" sm="6"><WidgetBase nomWidget="MyPieChart" chartType= "piechart"></WidgetBase></Col>
          <Col lg="8" sm="6"><WidgetBase nomWidget="MyLineChart" chartType= "linechart"></WidgetBase></Col>
          <Col lg="3" sm="4"><WidgetBase nomWidget="MySpiderChart" chartType= "spiderchart"></WidgetBase></Col>
        </Row>
        <WidgetBase nomWidget="MyMapChart" chartType= "mapchart"></WidgetBase>
      </div>
      <Container>
      <AdminPage/></Container>
    </div>
  );
}

export default App;

