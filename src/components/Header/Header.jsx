import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (

        <div className='container'>
            <Navbar bg="light" expand="lg">
                
                    <Navbar.Brand className='fw-bold' href="#home">Technology Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            
                            <img style={{ width: '3rem' }} src="/public/Ash-Read.png" alt="" />
                            
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    );
};

export default Header;

// <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
// <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
//     <li className="nav-item">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//     </li>
//     <li className="nav-item">
//         <a className="nav-link" href="#">About</a>
//     </li>
//     <img style={{ width: '3rem' }} src="/public/Ash-Read.png" alt="" />
// </ul>

// </div>