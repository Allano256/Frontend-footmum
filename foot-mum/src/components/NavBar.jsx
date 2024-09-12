import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/logo.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    
      <Navbar className={styles.NavBar} expand="md" fixed='top' >
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt='a logo' height="45px" ></img>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link > <IoHomeSharp/>  Home</Nav.Link>
            <Nav.Link > <PiSignInBold/>Sign in</Nav.Link>
            <Nav.Link > < FaUserPlus/>Sign up</Nav.Link>
           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
