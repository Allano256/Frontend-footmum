import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/logo.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
  
      <Navbar className={styles.NavBar} expand="md" fixed='top' >
      <Container>
        <NavLink to="/">
        <Navbar.Brand href="#home"> <img src={logo} alt='a logo' height="45px" ></img>   </Navbar.Brand>
        </NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/" exact > <IoHomeSharp/>  Home</NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin" > <PiSignInBold/>Sign in</NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="signup" > < FaUserPlus/>Sign up</NavLink>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
