import React from 'react'
import '../assets/css/SideBar.css';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

// Icons
import Cart from '../assets/images/cart.png';
import Contact from '../assets/images/contact.png';
import Location from '../assets/images/location.png';
import ShoppingList from '../assets/images/shopping_list.png';
import Person from '../assets/images/navigation-person.png';

const SidebarLink = ({ icon, text, url }) => (
    <Link to={url} className="sidebar-link">
        <div className="sidebar-link-container">
            <Image src={icon} className="" fluid />{' '}
            <p>{text}</p>
        </div>
    </Link>
)

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__nav-one">
                <SidebarLink icon={Cart} text="My orders" url="/orders" />
                <SidebarLink icon={ShoppingList} text="Shopping list" url="/shopping-list" />
            </div>
            <div className="sidebar__nav-two">
                <SidebarLink icon={Person} text="My profile" url="/" />
                <SidebarLink icon={Location} text="Addresses" url="/addresses" />
                <SidebarLink icon={Contact} text="Contacts" url="/contacts" />
            </div>
        </div>
    )
}

export default SideBar
