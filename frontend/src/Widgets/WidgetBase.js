import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardText
} from 'reactstrap';

import './widget.css';
import Exemple from '../Charts/Exemple';



class WidgetBase extends React.Component {
    render() {
        return (
            <div>
                <Card className= "widget">
                    <h3>{this.props.nomWidget}</h3>
                    <hr></hr>
                    <CardBody>
                        <Exemple></Exemple>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default WidgetBase;
