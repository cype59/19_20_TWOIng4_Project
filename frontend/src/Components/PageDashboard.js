import React, { Component } from 'react';
import '../App.css';
import WidgetBase from '../Widgets/WidgetBase';
import Header from './Header';
import WidgetChiffre from '../Widgets/WidgetChiffre';

import { Row, Col } from 'reactstrap';

import axios from 'axios';


class PageDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersCollection: [],
            sensorsCollection: [],
            measuresCollection: [],
        }

    }
    componentDidMount() {
        axios.get('http://localhost:3000/users')
            .then(res => {
                console.log("response " + res)
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                alert(error);
            })
        axios.get('http://localhost:3000/sensors')
            .then(res => {
                console.log("response " + res)
                this.setState({ sensorsCollection: res.data });
            })
            .catch(function (error) {
                alert(error);
            })
        axios.get('http://localhost:3000/measures')
            .then(res => {
                console.log("response " + res)
                this.setState({ measuresCollection: res.data });
            })
            .catch(function (error) {
                alert(error);
            })
    }

    render() {
        return (

            <div className="App">

                <div className="grilleWidget">
                    <Row>
                        <Col><Header /></Col>
                    </Row>
                    <Row>
                        <Col><WidgetChiffre nombre={this.state.usersCollection.length} couleur='#00C49F' intitule="Utilisateurs"></WidgetChiffre></Col>
                        <Col><WidgetChiffre nombre={this.state.sensorsCollection.length} couleur='#0088FE' intitule="Capteurs"></WidgetChiffre></Col>
                        <Col><WidgetChiffre nombre={this.state.measuresCollection.length} couleur='#FFBB28' intitule="Mesures"></WidgetChiffre></Col>
                    </Row>
                    <Row>
                        <Col lg="6" md="6" sm="12"><WidgetBase nomWidget="Taille des maisons" chartType="piechart"></WidgetBase></Col>
                        <Col lg="6" md="6" sm="12"><WidgetBase nomWidget="Type de capteurs les plus utilisés" chartType="demipiechart"></WidgetBase></Col>
                        <Col lg="8"><WidgetBase nomWidget="Données importantes sur les mesures" chartType="barchart"></WidgetBase></Col>
                        <Col lg="12"><WidgetBase nomWidget="Répartition des personnes par pays" chartType="mapchart"></WidgetBase></Col>
                    </Row>
                </div>

            </div>

        );
    }
}

export default PageDashboard;


