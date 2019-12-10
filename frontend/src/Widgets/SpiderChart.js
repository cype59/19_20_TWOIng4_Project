import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import axios from 'axios';

export default class MySpiderChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';


  constructor(props) {
    super(props);
    this.state = {


      measuresAirPollutionBedroom: [],
      measuresAirPollutionBathroom: [],
      measuresAirPollutionLivingRoom: [],
      measuresAirPollutionEntrance: [],
      averagePollutionBathroom:0,
      averagePollutionBedroom:0,
      averagePollutionLivingRoom:0,
      averagePollutionEntrance:0,

    }

  }

  componentDidMount() {

    //Moyenne des mesures d'AirPollution dans les chambres
    axios.get('http://localhost:3000/measures/getSensorDataBedroom')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionBedroom: res.data });

        var nbTotal=0;
        var nbSum=0;
        //var averagePollutionBedroom=0;
        for (var i = 0; i < this.state.measuresAirPollutionBedroom.sensors.length; i++) 
        {
          if(this.state.measuresAirPollutionBedroom.sensors[i].sensorID == null)
          {
            
          }
          else 
          {
            nbTotal++;
            nbSum+=this.state.measuresAirPollutionBedroom.sensors[i].value;
          }
        }
        this.state.averagePollutionBedroom = nbSum/nbTotal;

      })
      .catch(function (error) {
        alert(error);
      })

      //Moyenne des mesures d'AirPollution dans les bathroom
      axios.get('http://localhost:3000/measures/getSensorDataBathroom')
      .then(res => {
        console.log("response " + res)
        this.setState({ measuresAirPollutionBathroom: res.data });

        var nbTotal=0;
        var nbSum=0;
        //var averagePollutionBathroom=0;
        for (var i = 0; i < this.state.measuresAirPollutionBathroom.sensors.length; i++) 
        {
          if(this.state.measuresAirPollutionBathroom.sensors[i].sensorID == null)
          {
            
          }
          else 
          {
            nbTotal++;
            nbSum+=this.state.measuresAirPollutionBathroom.sensors[i].value;
          }
        }

        this.state.averagePollutionBathroom = nbSum/nbTotal;

      })
      .catch(function (error) {
        alert(error);
      })

       //Moyenne des mesures d'AirPollution dans les living room
       axios.get('http://localhost:3000/measures/getSensorDataLivingRoom')
       .then(res => {
         console.log("response " + res)
         this.setState({ measuresAirPollutionLivingRoom: res.data });
 
         var nbTotal=0;
         var nbSum=0;
         //var averagePollutionLivingRoom=0;
         for (var i = 0; i < this.state.measuresAirPollutionLivingRoom.sensors.length; i++) 
         {
           if(this.state.measuresAirPollutionLivingRoom.sensors[i].sensorID == null)
           {
             
           }
           else 
           {
             nbTotal++;
             nbSum+=this.state.measuresAirPollutionLivingRoom.sensors[i].value;
           }
         }
 
         this.state.averagePollutionLivingRoom = nbSum/nbTotal;
 
       })
       .catch(function (error) {
         alert(error);
       })

       //Moyenne des mesures d'AirPollution dans les living room
       axios.get('http://localhost:3000/measures/getSensorDataEntrance')
       .then(res => {
         console.log("response " + res)
         this.setState({ measuresAirPollutionEntrance: res.data });
 
         var nbTotal=0;
         var nbSum=0;
         //var averagePollutionEntrance=0;
         for (var i = 0; i < this.state.measuresAirPollutionEntrance.sensors.length; i++) 
         {
           if(this.state.measuresAirPollutionEntrance.sensors[i].sensorID == null)
           {
             
           }
           else 
           {
             nbTotal++;
             nbSum+=this.state.measuresAirPollutionEntrance.sensors[i].value;
           }
         }
 
         this.state.averagePollutionEntrance = nbSum/nbTotal;
 
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
        subject: 'Bedroom', A: this.state.averagePollutionBedroom, fullMark: 50,
      },
      {
        subject: 'Bathroom', A: this.state.averagePollutionBathroom, fullMark: 50,
      },
      {
        subject: 'Entrance', A: this.state.averagePollutionEntrance, fullMark: 50,
      },
      {
        subject: 'Living Room', A: this.state.averagePollutionLivingRoom, fullMark: 50,
      },
      /*{
        subject: 'China', A: 85, fullMark: 150,
      },
      {
        subject: 'Japan', A: 65, fullMark: 150,
      },*/
    ];

    return (

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <RadarChart width={500} height={500} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
