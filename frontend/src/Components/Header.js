import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import "./Header.css";
import logo from '../iotlogo2.png'


class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <img src={logo} alt='logo' id="logo"></img>
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