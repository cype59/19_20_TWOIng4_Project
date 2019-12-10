import React from 'react';

import './widget.css';

import axios from 'axios';

class MoyenneChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            measuresAvg1: [],
            measuresAvg2: [],
            measuresAvg3: [],
            
        }

    }

    componentDidMount() {
        axios.get('http://localhost:3000/measures/getAvg')
            .then(res => {
                console.log(res.data[0]);
                this.setState({ measuresAvg1: res.data[0],  measuresAvg2: res.data[1], measuresAvg3: res.data[2]});
            })
            .catch(function (error) {
                alert("Sarah" + error);
            })
    }
    render() {
        return (
            <div className="widgetMoyenne">
                <h3 style={{color: "#00C49F" }}>{this.state.measuresAvg1._id} : </h3>
                <p>{this.state.measuresAvg1.avg}</p>
                <hr></hr>
                <h3 style={{color: "#0088FE" }}>{this.state.measuresAvg2._id}</h3>
                <p>{this.state.measuresAvg2.avg}</p>
                <hr></hr>
                <h3 style={{color: "#FFBB28" }}>{this.state.measuresAvg3._id}</h3>
                <p>{this.state.measuresAvg3.avg}</p>
            </div>
        )
    }
}

export default MoyenneChart;