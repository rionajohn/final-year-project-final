import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

const HeaderAndNavBar = () => {
    return (
        <><Link to="/" style={{ color: "navy", textDecoration: 'none' }}><h1>HoloLens 2</h1></Link>

            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="top-navbar-nav" />
                <Navbar.Collapse id="top-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link ><Link to="/login" style={{ color: "white", textDecoration: 'none' }}>Login</Link></Nav.Link>
                        <Nav.Link ><Link to="/create-account" style={{ color: "white", textDecoration: 'none' }}>Create Account</Link></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar></>
    )
}
export default HeaderAndNavBar
