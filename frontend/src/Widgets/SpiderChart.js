import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



export default class MySpiderChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';



  render() {


    const data = [
      {
        subject: 'AirPollution', A: 100, fullMark: 150,
      },
      {
        subject: 'Humidity', A: 100, fullMark: 150,
      },
      {
        subject: 'Temperature', A: 200, fullMark: 150,
      },
      {
        subject: 'Greece', A: 99, fullMark: 150,
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
