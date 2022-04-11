import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="35"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white fw-bold' href="/">Home</Nav.Link>
                        <Nav.Link className='text-white fw-bold' href="/services">Services</Nav.Link>
                        <Nav.Link className='text-white fw-bold' href="/experts">Our Experts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;