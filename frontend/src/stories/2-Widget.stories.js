import React from 'react';
import { storiesOf } from '@storybook/react';
import BarChart from '../Widgets/BarChart';
import PieChart from '../Widgets/PieChart';
import DemiPieChart from '../Widgets/DemiPieChart';
import WidgetChiffre from '../Widgets/WidgetChiffre';
import AdminPage from '../Components/AdminPage';

import PageDashboard from '../Components/PageDashboard';
import Navbar from '../Components/Navbar';


import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';



storiesOf('BarChart', module).add('default', () => <BarChart />)
storiesOf('PieChart', module).add('default', () => <PieChart />)
storiesOf('DemiPieChart', module).add('default', () => <DemiPieChart />)

storiesOf('WidgetChiffre', module).add('default', () =>
        <Row>
            <Col><WidgetChiffre nombre="21" couleur='#00C49F' intitule="Utilisateurs"></WidgetChiffre></Col>
            <Col><WidgetChiffre nombre="100" couleur='#0088FE' intitule="Capteurs"></WidgetChiffre></Col>
            <Col><WidgetChiffre nombre="1000" couleur='#FFBB28' intitule="Mesures"></WidgetChiffre></Col>
        </Row>
)

storiesOf('AdminPage', module).add('default', () => <AdminPage />)

storiesOf('PageDashboard', module).add('default', () => <PageDashboard />)









