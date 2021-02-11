import React from 'react'
import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';
import { Navbar, Nav, Image } from 'react-bootstrap';

// Icons
import Cart from '../assets/images/cart.png';
import ShoppingList from '../assets/images/shopping_list.png';
import Person from '../assets/images/navigation-person.png';

const NavLink = ({ icon, text }) => (
    <Nav.Link href="#home" className="nav-link">
        <div className="nav-link-container">
            <Image src={icon} className="" fluid />{' '}
            <p>{text}</p>
        </div>
    </Nav.Link>
)

const Header = () => {
    return (
        <div className="mb-5 nav-container">
            <Navbar className="justify-content-between" expand="lg">
                <Navbar.Brand href="#home">
                    <Image src={logo} fluid />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink icon={ShoppingList} text="Shopping list" />
                        <NavLink icon={Cart} text="My cart" />
                        <NavLink icon={Person} text="Sign in" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
