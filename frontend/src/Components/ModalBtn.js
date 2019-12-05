/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CustomInput, Col, Row, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const ModalBtn = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Row>
                <Col lg="6"><Button color="info" onClick={toggle}>Ajouter un utilisateur</Button></Col>
            </Row>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
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
                                        <CustomInput type="radio" id="petite" name="customRadio" label="Petite" />
                                        <CustomInput type="radio" id="moyenne" name="customRadio" label="Moyenne" />
                                        <CustomInput type="radio" id="grande" name="customRadio" label="Grande" />
                                    </div>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button outline color="secondary">Sign in</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalBtn;
