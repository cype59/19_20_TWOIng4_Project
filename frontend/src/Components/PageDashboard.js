import React, { Component } from 'react';
import '../App.css';
import WidgetBase from '../Widgets/WidgetBase';
import Header from './Header';
import WidgetChiffre from '../Widgets/WidgetChiffre';
import AdminPage from './AdminPage';

import { Container, Row, Col } from 'reactstrap';

class PageDashboard extends Component {
    render() {
        return (


            <div className="App">
               
                <div className="grilleWidget">
                    <Row>
                        <Col><Header /></Col>
                    </Row>
                    <Row>
                        <Col><WidgetChiffre nombre="8000" couleur='#0088FE' intitule="Capteurs"></WidgetChiffre></Col>
                        <Col><WidgetChiffre nombre="352" couleur='#00C49F' intitule="Utilisateurs"></WidgetChiffre></Col>
                        <Col><WidgetChiffre nombre="80" couleur='#FFBB28' intitule="Capteurs"></WidgetChiffre></Col>
                        <Col><WidgetChiffre nombre="80" couleur='#FF8042' intitule="Capteurs"></WidgetChiffre></Col>
                    </Row>
                    <Row>
                        <Col lg="4" sm="6"><WidgetBase nomWidget="MyBarChart" chartType="barchart"></WidgetBase></Col>
                        <Col lg="4" sm="6"><WidgetBase nomWidget="MySpiderChart" chartType="spiderchart"></WidgetBase></Col>
                        <Col lg="4" sm="12"><WidgetBase nomWidget="MyLineChart" chartType="linechart"></WidgetBase></Col>
                    </Row>
                    <Row>
                        <Col lg="4" sm="12"><WidgetBase nomWidget="MyPieChart" chartType="piechart"></WidgetBase></Col>
                        <Col lg="8" sm="12"><WidgetBase nomWidget="MyMapChart" chartType="mapchart"></WidgetBase></Col>
                    </Row>
                </div>
                <Container>
                    <AdminPage />
                </Container>
            </div>

        );
    }
}

export default PageDashboard;


