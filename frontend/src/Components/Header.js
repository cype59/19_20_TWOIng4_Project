import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import "./Header.css";


class Header extends Component {
    render() {
        return (
          <div>
            <Row>
                <Col sm={{ size: 'auto'}} className="titre">ECE DASHBOARD</Col>    
            </Row>

            <Row>
                <ButtonGroup>
                    <Button>Today</Button>
                    <Button>Month</Button>
                    <Button>Year</Button>
            </ButtonGroup>
            </Row>
           </div>
        );
    }
}

export default Header;