import React, {Component} from 'react';
import 
{
    Navbar,
    NavDropdown,
    Nav
} from 'react-bootstrap';

class Header extends Component{
    render(){
        return <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <NavDropdown title="Experiences" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Business</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Leadership</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Arts and Music</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>}
}

export default Header;