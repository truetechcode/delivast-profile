import React from 'react'
import '../assets/css/Header.css';
import logo from '../assets/images/logo.png';
import { Navbar, Nav, Image } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

// Icons
import Cart from '../assets/images/cart.png';
import ShoppingList from '../assets/images/shopping_list.png';
import Person from '../assets/images/navigation-person.png';

const NavLink = ({ icon, text, url }) => (
    <Link to={url} className="nav-link">
        <div className="nav-link-container">
            <Image src={icon} className="" fluid />{' '}
            <p>{text}</p>
        </div>
    </Link>
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
                        <NavLink icon={ShoppingList} text="Shopping list" url="/shopping-list" />
                        <NavLink icon={Cart} text="My cart" url="/cart" />
                        <NavLink icon={Person} text="Sign in" url="/signin" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
