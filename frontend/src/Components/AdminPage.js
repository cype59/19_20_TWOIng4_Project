import React, { Component, useState } from 'react';
import { CustomInput, Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./AdminPage.css";
import settings from '../settings.svg'
import { Table } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

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
                      <tr>
                        <th scope="row">2</th>
                        <td>273907273912</td>
                        <td>Thornton</td>
                        <td>data</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>749278871827</td>
                        <td>the Bird</td>
                        <td>data</td>
                      </tr>
                    </tbody>
                  </Table>

                  <Button color="info">Ajouter un utilisateur</Button>
                  
                </CardBody>
              </Card>
            </Col>



            <Col>
              <Form className="formulaire">
                <h2 className="titreForm" >Ajout Utilisateur</h2>
                <p className="titreForm">Entrez les informations de l'utilisateur à ajouter.</p>
                <Row form>
                  <Col>
                    <FormGroup>
                      <Label for="exampleCountry">Pays</Label>
                      <Input type="country" name="country" id="exampleCountry" placeholder="France" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleNumber">Number</Label>
                  <Input
                    type="number"
                    name="number"
                    id="exampleNumber"
                    placeholder="2 personnes"
                  />
                </FormGroup>

                <Row form>
                  <Col lg="6">
                    <FormGroup>
                      <Label for="exampleCheckbox">Taille de la maison</Label>
                      <div>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Petite" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Moyenne" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Grande" check />

                      </div>
                    </FormGroup>
                  </Col>
                </Row>

                <Button outline color="secondary">Sign in</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;