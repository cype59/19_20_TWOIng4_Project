import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios';



export default class MyBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  constructor(props) {
    super(props);
    this.state = {
      measuresAvg1: [],
      measuresAvg2: [],
      measuresAvg3: []
    }

  }

  componentDidMount() {
    axios.get('http://localhost:3000/measures/getAvg')
      .then(res => {
        console.log(res.data[0]);
        this.setState({ measuresAvg1: res.data[0], measuresAvg2: res.data[1], measuresAvg3: res.data[2] });
      })
      .catch(function (error) {
        alert("Sarah" + error);
      })
  }

  render() {
    const data = [
      {
        name: this.state.measuresAvg1._id, min: this.state.measuresAvg1.min, moyenne: this.state.measuresAvg1.avg, max: this.state.measuresAvg1.max,
      },
      {
        name: this.state.measuresAvg2._id, min: this.state.measuresAvg2.min, moyenne: this.state.measuresAvg2.avg, max: this.state.measuresAvg2.max,
      },
      {
        name: this.state.measuresAvg3._id, min: this.state.measuresAvg3.min, moyenne: this.state.measuresAvg3.avg, max: this.state.measuresAvg3.max,
      },

    ];

    return (

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="min" fill="#FFBB28" />
            <Bar dataKey="moyenne" fill="#00C49F" />
            <Bar dataKey="max" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    );
  }
}

