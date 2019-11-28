import React from 'react';
import {
    Card, CardBody,
} from 'reactstrap';


import './widget.css';

class WidgetChiffre extends React.Component {
    render() {
        return (
            <div>
                <Card className= "widgetChiffre" style={{backgroundColor: this.props.couleur }}>
                    <CardBody>
                        <h1>{this.props.nombre}</h1>
                        <h3>{this.props.intitule}</h3>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default WidgetChiffre;