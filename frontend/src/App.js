import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";
import PageDashboard from './Components/PageDashboard';
import AdminPage from './Components/AdminPage';
import Routes from './routes';
import Navbar from './Components/Navbar';



function App() {
  return (
  <div>
     <Navbar></Navbar>
    <Routes/>
    </div>
    
  );
}

export default App;

