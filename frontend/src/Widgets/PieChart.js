import React, { PureComponent } from 'react';
import {
  PieChart, Pie, ResponsiveContainer, Cell, Legend,
} from 'recharts';

import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default class MyPieChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  constructor(props) {
    super(props);
    this.state = {
      usersCollectionSmall: [],
      usersCollectionMedium: [],
      usersCollectionBig: [],
    }

  }

  componentDidMount() {
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
    const data = [
      { name: 'Small houses', value: this.state.usersCollectionSmall.length },
      { name: 'Medium houses', value: this.state.usersCollectionMedium.length },
      { name: 'Big Houses', value: this.state.usersCollectionBig.length },
    ];
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}