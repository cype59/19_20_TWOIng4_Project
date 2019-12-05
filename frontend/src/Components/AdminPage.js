import React, { Component} from 'react';
import { CustomInput, Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./AdminPage.css";
import settings from '../settings.svg'
import { Table } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import axios from 'axios';
import ModalBtn from './ModalBtn';

class AdminPage extends Component {

  render() {

   

    return (
      <div className="pageAdmin">
        <Row>
          <Col lg="1" ></Col>
          <Col lg="1" ><img src={settings} alt='engrenages' id="engrenages"></img></Col>
          <Col lg="10" className="titreAdmin"><h1>Admin</h1></Col>
        </Row>

        <Container>
          <Row>
            <Col lg="6">
              <Card>
                <CardBody>
                  <CardTitle>Liste des utilisateurs</CardTitle>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Id utilisateur</th>
                        <th>Hisajda</th>
                        <th>Yioabdg</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>268774821768</td>
                        <td>Otto</td>
                        <td>data</td>
                      </tr>
                     
                    </tbody>
                  </Table>

              
                  <ModalBtn/>
                  
                </CardBody>
              </Card>
            </Col>

        
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;