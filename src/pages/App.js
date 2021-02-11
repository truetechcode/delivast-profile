import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
import UserCart from '../pages/UserCart';
import SignIn from '../pages/SignIn';

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
            <Switch>
              <Route path="/" component={UserProfile} exact />
              <Route path="/addresses" component={UserAddresses} />
              <Route path="/contacts" component={UserContacts} />
              <Route path="/orders" component={UserOrders} />
              <Route path="/shopping-list" component={UserShoppingList} />
              <Route path="/shopping-cart" component={UserShoppingCart} />
              <Route path="/cart" component={UserCart} />
              <Route path="/signin" component={SignIn} />
              {/* <Route component={Error} /> */}
            </Switch>
          </Col>
        </Row>
      </Container>
      <Image src={Stroke} className="stroke" fluid />{' '}
    </Container>
  );
}

export default App;
