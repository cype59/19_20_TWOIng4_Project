import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip
} from 'recharts';

import axios from 'axios';





export default class MyDemiPieChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';
    constructor(props) {
        super(props);
        this.state = {

            measuresCollectionTemperature: [],
            measuresCollectionHumidity: [],
            measuresCollectionAirPollution: [],

        }

    }

    componentDidMount() {

        axios.get('http://localhost:3000/measures/type/temperature')
            .then(res => {
                console.log("response " + res)
                this.setState({ measuresCollectionTemperature: res.data });
            })
            .catch(function (error) {
                alert(error);
            })

        axios.get('http://localhost:3000/measures/type/humidity')
            .then(res => {
                console.log("response " + res)
                this.setState({ measuresCollectionHumidity: res.data });
            })
            .catch(function (error) {
                alert(error);
            })

        axios.get('http://localhost:3000/measures/type/airPollution')
            .then(res => {
                console.log("response " + res)
                this.setState({ measuresCollectionAirPollution: res.data });
                //alert(this.state.measuresCollectionAirPollution[0].value);
            })
            .catch(function (error) {
                alert(error);
            })

    }

    render() {

        const data = [
            { name: "Nombre total de capteurs de pollution d'air", value: this.state.measuresCollectionAirPollution.length },
            { name: "Nombre total de capteurs d'humidité", value: this.state.measuresCollectionHumidity.length },
            { name: 'Nombre total de capteurs température', value: this.state.measuresCollectionTemperature.length },
            
        ];

        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart onMouseEnter={this.onPieEnter}>
                        <Pie
                            data={data}

                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label
                        >
                            {
                                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
