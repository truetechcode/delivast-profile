import React from 'react'
import '../assets/css/SideBar.css';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

// Icons
import Cart from '../assets/images/cart.png';
import Contact from '../assets/images/contact.png';
import Location from '../assets/images/location.png';
import ShoppingList from '../assets/images/shopping_list.png';
import Person from '../assets/images/navigation-person.png';

const SidebarLink = ({ icon, text }) => (
    <a href="#" className="sidebar-link">
        <div className="sidebar-link-container">
            <Image src={icon} className="" fluid />{' '}
            <p>{text}</p>
        </div>
    </a>
)
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__nav-one">
                <SidebarLink icon={Cart} text="My orders" />
                <SidebarLink icon={ShoppingList} text="Shopping list" />
            </div>
            <div className="sidebar__nav-two">
                <SidebarLink icon={Person} text="My profile" />
                <SidebarLink icon={Location} text="Addresses" />
                <SidebarLink icon={Contact} text="Contacts" />
            </div>
        </div>
    )
}

export default SideBar
