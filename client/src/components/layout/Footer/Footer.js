import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

import './Footer.css'

const Footer = () => (
    <Navbar className="footer mt-5" expand="lg">
        <Navbar.Brand>
            <Nav as="div" className="footer-text ms-3">Harbest Market &copy; 2021. Jorge Martín</Nav>
        </Navbar.Brand>
    </Navbar>
);

export default Footer;