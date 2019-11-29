import React from 'react';
import {
    Card, CardBody,
} from 'reactstrap';

import MyLineChart from './LineChart';
import MyPieChart from './PieChart';
import MySpiderChart from './SpiderChart';
import MyBarChart from './BarChart';
import MapChart from './MapChart'

import './widget.css';

const components = {
    piechart: MyPieChart,
    linechart: MyLineChart,
    spiderchart: MySpiderChart,
    barchart: MyBarChart,
    mapchart: MapChart,
};

class WidgetBase extends React.Component {
    render() {
        const SpecificStory = components[this.props.chartType];
        return (
            <div>
                <Card className= "widget">
                    <h3>{this.props.nomWidget}</h3>
                    <hr></hr>
                    <CardBody>
                        <SpecificStory/>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default WidgetBase;

