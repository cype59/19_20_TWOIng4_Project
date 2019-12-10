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
            usersCollectionSmall: [],
            usersCollectionMedium: [],
            usersCollectionBig: []
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


        axios.get('http://localhost:3000/users/houseSize/small')
            .then(res => {
                console.log("response " + res)
                this.setState({ usersCollectionSmall: res.data });
            })
            .catch(function (error) {
                alert("Sarah" + error);
            })

        axios.get('http://localhost:3000/users/houseSize/medium')
            .then(res => {
                console.log("response " + res)
                this.setState({ usersCollectionMedium: res.data });
            })
            .catch(function (error) {
                alert("Sarah" + error);
            })

        axios.get('http://localhost:3000/users/houseSize/big')
            .then(res => {
                console.log("response " + res)
                this.setState({ usersCollectionBig: res.data });
            })
            .catch(function (error) {
                alert("Sarah" + error);
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
                        <Col lg="5" md="6" sm="12"><WidgetBase
                            nombreSmall={this.state.usersCollectionSmall.length}
                            nombreMedium={this.state.usersCollectionMedium.length}
                            nombreBig={this.state.usersCollectionBig.length}
                            nomWidget="User's House Size"
                            chartType="piechart"
                            collection={this.state.data}></WidgetBase></Col>
                        <Col lg="7" md="6" sm="12"><WidgetBase nomWidget="MyBarChart" chartType="barchart"></WidgetBase></Col>
                        <Col lg="4" sm="6"><WidgetBase nomWidget="Type de sensors les plus utilisés" chartType="demipiechart"></WidgetBase></Col>
                    </Row>
                    <Row>
                        <Col lg="4" sm="12"><WidgetBase nomWidget="MyLineChart" chartType="linechart"></WidgetBase></Col>
                        <Col lg="8" sm="12"><WidgetBase nomWidget="MyMapChart" chartType="mapchart"></WidgetBase></Col>
                    </Row>
                </div>

            </div>

        );
    }
}

export default PageDashboard;


