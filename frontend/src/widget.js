import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardText
} from 'reactstrap';

import './widget.css';


class Widget extends React.Component {
    render() {
        return (
            <div>
                <Card className= "widget">
                    <h3>Header</h3>
                    <hr></hr>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Widget;


