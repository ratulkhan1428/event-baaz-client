import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand className="ms-5" to="/"><img style={{height: '100px', width: '150px', borderRadius: '10px'}} src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto"></Nav>
            <Nav style={{fontWeight: '600'}}>
                <Nav.Link className="ms-5" href="/">Home</Nav.Link>
                <Nav.Link className="ms-5" href="/addBooking">Dashboard</Nav.Link>
                <Nav.Link className="ms-5" href="/orders">Admin</Nav.Link>
                <Nav.Link className="ms-5" href="/">Contact Us</Nav.Link>
                <Nav.Link className="ms-5" style={{backgroundColor: 'gray', borderRadius: '10px', marginRight: '50px', width: '80px', textAlign: 'center'}} href="/login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;