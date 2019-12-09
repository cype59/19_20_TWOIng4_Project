/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';






class ModalBtn extends Component {

   
    constructor(props) {

        super(props);


        this.state = {
            id:'',
            valuePays: '',
            valueNbPers: '2',
            valueTailleMaison:'small',
            
        };

        //Modal
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggle = this.toggle.bind(this);

        //Changer pays
        this.handleChange = this.handleChange.bind(this);
        //Changer taille maison
        this.handleChangeTailleMaison = this.handleChangeTailleMaison.bind(this);
        //Changer Nb personnes
        this.handleChangeNbPers = this.handleChangeNbPers.bind(this);

        //OnSubmit
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /** Pour Modal */
    toggle() {

        this.setState({
            modal: !this.state.modal
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    showModal() {
        this.setState({
            isModalOpen: true
        });
    }

    //Pour Pays
    handleChange(event) {
        this.setState({ valuePays: event.target.value });
    }

    //Pour taille maison
    handleChangeTailleMaison(event) {
        this.setState({valueTailleMaison: event.target.value});
    }

    //Pour Nombre de personnes
    handleChangeNbPers(event) {
        this.setState({ valueNbPers: event.target.value });
    }


    handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:3000/user', {
            
            location:this.state.valuePays,
            personsInHouse:this.state.valueNbPers,
            houseSize:this.state.valueTailleMaison
        })
        .then(res => {
          console.log("response "+res)  
          console.log(res.data);
        })
        .catch(function (error) {
            alert("Ajout UserSarah"+error);
        })


        alert('Pays : ' + this.state.valuePays 
        + '\nTaille maison : '+ this.state.valueTailleMaison
        + '\nNb de personnes : '+ this.state.valueNbPers);
        event.preventDefault();
    }


    render() {

        return (
            <div>
                <Row>
                    <Col lg="6"><Button color="info" onClick={this.toggle}>Ajouter un utilisateur</Button></Col>
                </Row>
                <Modal isOpen={this.state.modal} show={this.state.show} onHide={this.handleClose} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Ajouter un utilisateur</ModalHeader>
                    <ModalBody>
                        <Form className="formulaire" onSubmit={this.handleSubmit}>
                            <h2 className="titreForm" >Ajout Utilisateur</h2>
                            <p className="titreForm">Entrez les informations de l'utilisateur à ajouter.</p>
                            <Row form>
                                <Col>
                                    <FormGroup>
                                        <Label for="exampleCountry">Pays</Label>
                                        <Input 
                                            value={this.state.valuePays} 
                                            onChange={this.handleChange} 
                                            type="text" 
                                            placeholder="France" />
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
                                    value={this.state.valueNbPers} 
                                    onChange={this.handleChangeNbPers}
                                />
                            </FormGroup>

                            <Row form>
                                <Col lg="6">
                                    <FormGroup>
                                        <Label for="exampleSelectMulti">Taille de la maison :</Label>
                                        <Input value={this.state.valueTailleMaison} onChange={this.handleChangeTailleMaison} type="select" >
                                            <option value='small'>Small</option>
                                            <option value='medium'>Medium</option>
                                            <option value='big'>Big</option>
                                            
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" color="info" onClick={this.toggle}>Sign In</Button>{' '}

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={this.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalBtn;



/*
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
                <ModalHeader toggle={toggle}>Ajouter un utilisateur</ModalHeader>
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


                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button color="info" onClick={toggle}>Sign In</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalBtn;
*/