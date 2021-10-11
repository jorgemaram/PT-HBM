import React, { Component } from 'react'
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap'
import AuthService from './../../../service/auth.service'
import { Link } from 'react-router-dom'
import HBLogo from './images/harbest-market.png'

class navbar extends Component {

    constructor() {
        super()
        this.authService = new AuthService()
    }

    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Navbar className="sticky-top" expand="lg">
                <Navbar.Brand>
                    <Link to='/'>
                        <Nav.Link as="div" className="brand-navbar" ><img className="logo_brand" src={HBLogo} alt="Harbest Market"/></Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-2">
                    <Nav>
                        <Link to="/productos">
                            <Nav.Link as="div"><p className="links">Productos</p></Nav.Link>
                        </Link>

                        {
                            this.props.loggedUser
                                ?
                                <Nav.Link as="div" onClick={this.logOut}>Cerrar sesión</Nav.Link>
                                :
                                <>
                                    <Link to="/registro">
                                        <Nav.Link as="div">Regístrate</Nav.Link>
                                    </Link>
                                    <Link to="/acceso-usuario">
                                        <Nav.Link as="div">Área usuario</Nav.Link>
                                    </Link>
                                </>
                        }
                        <Nav.Link as="div">Hola, {this.props.loggedUser ? this.props.loggedUser.username : 'invitado'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default navbar
