import React, { Children } from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/logo.png'
import { IoHomeSharp } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/currentuserContext';
import Avatar from "./Avatar";
import axios from 'axios';



const NavBar = () => {
    const currentUser=useCurrentUser();

    const setCurrentUser=useSetCurrentUser();

    const handleSignOut=async()=>{
      try{
        await axios.post('dj-rest-auth/logout/');
        setCurrentUser(null);
      }  catch(err){
        console.log(err);
      }
    };

    const addPostIcon=(
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create" > <FaPlusSquare /> Add post</NavLink>

    )

    const loggedInIcons= <>
     <NavLink className={styles.NavLink} activeClassName={styles.Active} to="feed" > <FaStream />Feed</NavLink>

     <NavLink className={styles.NavLink} activeClassName={styles.Active} to="liked" > <FaHeart /> Liked</NavLink>

     <NavLink className={styles.NavLink} to="/"  onClick={handleSignOut}><FaSignOutAlt />  Sign out</NavLink>

     <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`} >< Avatar src={currentUser?.profile_image} text="Profile" height={40} />  </NavLink>
    
    </>;
    const loggedOutIcons =(
      <>
      
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="signup" > < FaUserPlus/>Sign up</NavLink></>
      
    )


  return (
  
      <Navbar className={styles.NavBar} expand="md" fixed='top' >
      <Container>
        <NavLink to="/">
        <Navbar.Brand href="#home"> <img src={logo} alt='a logo' height="45px" ></img>   </Navbar.Brand>
        </NavLink>
         
         {/* The add post icon will only show when its the currently logged in user */}
        {currentUser && addPostIcon}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/" exact > <IoHomeSharp/>  Home</NavLink>
            
            {currentUser? loggedInIcons : loggedOutIcons}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
