import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardText
} from 'reactstrap';

import MyLineChart from './LineChart';
import MyPieChart from './PieChart';

import './widget.css';

const components = {
    piechart: MyPieChart,
    linechart: MyLineChart,
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

