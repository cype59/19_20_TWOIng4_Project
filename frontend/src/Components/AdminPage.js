import React, { Component } from 'react';
import { CustomInput,Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./AdminPage.css";

class AdminPage extends Component {
    render() {
        return (
            <div>
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
        <Col>
        <FormGroup>
        <Label for="exampleCheckbox">Taille de la maison</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Petite" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Moyenne" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Grande" check/>

        </div>
      </FormGroup>
        </Col>
      </Row>
      
      <Button outline color="secondary">Sign in</Button>
    </Form>
            </div>
        );
    }
}

export default AdminPage;