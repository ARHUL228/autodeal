import React, { Component } from 'react'
import { Container, FormControl, Navbar,  Form, Button, Nav } from 'react-bootstrap'
import logo from './logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Services from '../Pages/Services'
import Rent from '../Pages/Rent'


export default class Header extends Component {
    render() {
        return (
            <> 
               <Router>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> AutoDeal
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/"> Home </Nav.Link>
                                <Nav.Link as={Link} to="/about"> About us </Nav.Link>
                                <Nav.Link as={Link} to="/contacts"> Contacts </Nav.Link>
                                <Nav.Link as={Link} to="/services"> Services </Nav.Link>
                                <Nav.Link as={Link} to="/rent"> To Rent </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/about" element={<About/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/services" element={<Services/>} />
                        <Route exact path="/rent" element={<Rent/>} />
                    </Routes>
                </Router>

            </>

        );
    }
}
