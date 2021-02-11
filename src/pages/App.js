import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

// Components

import Header from '../components/Header';
import SideBar from '../components/SideBar';

// Stroke

import Stroke from '../assets/images/bottom-stroke.svg';

// Pages

import UserProfile from '../pages/UserProfile';
import UserAddresses from '../pages/UserAddresses';
import UserContacts from '../pages/UserContacts';
import UserOrders from '../pages/UserOrders';
import UserShoppingList from '../pages/UserShoppingList';
import UserShoppingCart from '../pages/UserShoppingCart';

function App(props) {
  return (
    <Container className="app-container" fluid>
      <Container className="app">
        <Header />
        <Row>
          <Col sm={2}>
            <SideBar />
          </Col>
          <Col sm={10}>
            <UserProfile />
          </Col>
        </Row>
      </Container>
      <Image src={Stroke} className="stroke" fluid />{' '}
    </Container>
  );
}

export default App;
