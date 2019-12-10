import React from 'react';
import {
    Card, CardBody,
} from 'reactstrap';

import MyLineChart from './LineChart';
import MyPieChart from './PieChart';
import MySpiderChart from './SpiderChart';
import MyBarChart from './BarChart';
import MapChart from './MapChart';
import MoyenneChart from './MoyenneChart'


import './widget.css';
import MyDemiPieChart from './DemiPieChart';

const components = {
    piechart: MyPieChart,
    demipiechart: MyDemiPieChart,
    linechart: MyLineChart,
    spiderchart: MySpiderChart,
    barchart: MyBarChart,
    mapchart: MapChart,
    moyennechart: MoyenneChart
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
                        <SpecificStory nombre={this.props.nombre} 
                            nombreSmall={this.props.nombreSmall}
                            nombreMedium={this.props.nombreMedium}
                            nombreBig={this.props.nombreBig}
                            
                        />
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default WidgetBase;

