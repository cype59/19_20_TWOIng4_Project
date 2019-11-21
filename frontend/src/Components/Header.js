import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import "./Header.css";


class Header extends Component {
    render() {
        return (
          <div>
            <Row>
                <Col sm={{ size: 'auto'}} className="titre">Music Dashboard</Col>    
            </Row>

            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}  xs={{ size: 'auto', offset: 1 }} className="groupeButton">
                    <ButtonGroup>
                        <Button>Today</Button>
                        <Button>Month</Button>
                        <Button>Year</Button>
                    </ButtonGroup>
                </Col>
            </Row>
           </div>
        );
    }
}

export default Header;