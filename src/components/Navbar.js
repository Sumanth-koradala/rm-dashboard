import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>RM Dashboard</Navbar.Brand>
                <Nav className="ml-auto">
                    {!user ? (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
