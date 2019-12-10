import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import axios from 'axios';




export default class MyLineChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  constructor(props) {
    super(props);
    this.state = {


      measuresAirPollutionBedroom: [],
      measuresAirPollutionBathroom: [],
      measuresAirPollutionLivingRoom: [],
      measuresAirPollutionEntrance: [],
      averagePollutionBathroom: 0,
      averagePollutionBedroom: 0,
      averagePollutionLivingRoom: 0,
      averagePollutionEntrance: 0,

    }

  }

  componentDidMount() {

    //Moyenne des mesures d'AirPollution dans les chambres
    axios.get('http://localhost:3000/measures/getSensorDataBedroom')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionBedroom: res.data });

        var nbTotal = 0;
        var nbSum = 0;
        //var averagePollutionBedroom=0;
        for (var i = 0; i < this.state.measuresAirPollutionBedroom.sensors.length; i++) {
          if (this.state.measuresAirPollutionBedroom.sensors[i].sensorID == null) {

          }
          else {
            nbTotal++;
            nbSum += this.state.measuresAirPollutionBedroom.sensors[i].value;
          }
        }
        this.state.averagePollutionBedroom = nbSum / nbTotal;
      })
      .catch(function (error) {
        alert(error);
      })

    //Moyenne des mesures d'AirPollution dans les bathroom
    axios.get('http://localhost:3000/measures/getSensorDataBathroom')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionBathroom: res.data });

        var nbTotal = 0;
        var nbSum = 0;
        //var averagePollutionBathroom=0;
        for (var i = 0; i < this.state.measuresAirPollutionBathroom.sensors.length; i++) {
          if (this.state.measuresAirPollutionBathroom.sensors[i].sensorID == null) {

          }
          else {
            nbTotal++;
            nbSum += this.state.measuresAirPollutionBathroom.sensors[i].value;
          }
        }

        this.state.averagePollutionBathroom = nbSum / nbTotal;
      })
      .catch(function (error) {
        alert(error);
      })

    //Moyenne des mesures d'AirPollution dans les living room
    axios.get('http://localhost:3000/measures/getSensorDataEntrance')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionEntrance: res.data });

        var nbTotal = 0;
        var nbSum = 0;
        //var averagePollutionEntrance=0;
        for (var i = 0; i < this.state.measuresAirPollutionEntrance.sensors.length; i++) {
          if (this.state.measuresAirPollutionEntrance.sensors[i].sensorID == null) {

          }
          else {
            nbTotal++;
            nbSum += this.state.measuresAirPollutionEntrance.sensors[i].value;
          }
        }

        this.state.averagePollutionEntrance = nbSum / nbTotal;
      })
      .catch(function (error) {
        alert(error);
      })

    //Moyenne des mesures d'AirPollution dans les living room
    axios.get('http://localhost:3000/measures/getSensorDataLivingRoom')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionLivingRoom: res.data });

        var nbTotal = 0;
        var nbSum = 0;
        //var averagePollutionLivingRoom=0;
        for (var i = 0; i < this.state.measuresAirPollutionLivingRoom.sensors.length; i++) {
          if (this.state.measuresAirPollutionLivingRoom.sensors[i].sensorID == null) {

          }
          else {
            nbTotal++;
            nbSum += this.state.measuresAirPollutionLivingRoom.sensors[i].value;
          }
        }

        this.state.averagePollutionLivingRoom = nbSum / nbTotal;
      })
      .catch(function (error) {
        alert(error);
      })

    axios.get('http://localhost:3000/measures/getSensorDataLivingRoom')
      .then(res => {
        this.setState({ measuresAirPollutionLivingRoom: res.data });

      })
      .catch(function (error) {
        alert(error);
      })


  }
  render() {
    const data = [
      {
        name: 'Chambre', moyenne: this.state.averagePollutionBedroom,
      },
      {
        name: 'Salle de bain', moyenne: this.state.averagePollutionBathroom,
      },
      {
        name: 'Salon', moyenne: this.state.averagePollutionLivingRoom,
      },
      {
        name: 'Entrée', moyenne: this.state.averagePollutionEntrance,
      },
    ];
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>

          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="moyenne" stroke="#FFBB28" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}