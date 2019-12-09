import React, { Component} from 'react';
import {Col, Row,Container } from 'reactstrap';
import "./AdminPage.css";
import { Table } from 'reactstrap';

import {Card, CardBody,CardTitle} from 'reactstrap';
import ModalBtn from './ModalBtn';
import DataTable from './DataTable';

import axios from 'axios';


class AdminPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usersCollection: []
    }
}

componentDidMount() {
    axios.get('http://localhost:3000/users')
        .then(res => {
          console.log("response "+res)  
          this.setState({ usersCollection: res.data });
        })
        .catch(function (error) {
            alert("Sarah"+error);
        })
}

dataTable() {
    return this.state.usersCollection.map((data, i) => {
        return <DataTable obj={data} key={i} />;
    });
}

  render() {
    return (
      <div className="pageAdmin">
        <Row>
          <Col></Col>
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
                        <th>Id users</th>
                        <th>Location</th>
                        <th>Nb people in house</th>
                        <th>House size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.dataTable()}
                     
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