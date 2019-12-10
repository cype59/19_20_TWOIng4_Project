import React, { Component } from 'react';
import { Row } from 'reactstrap';
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
            </div>
        );
    }
}

export default Header;