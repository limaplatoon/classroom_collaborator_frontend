import React from "react";
import { Navbar as BootstrapNavbar, Nav, Image } from "react-bootstrap";

import "./NavBar.css";
import logo from "../../static/img/logoClassUp.png";
import blankAvatar from "../../static/img/blank-avatar.png";
import mailIcon from "../../static/img/mail.jpeg";
import bellIcon from "../../static/img/bell.svg";

const Navbar = () => {
  return (
    <div>
      <BootstrapNavbar bg="light" variant="light">
        <BootstrapNavbar.Brand href="#home">
          <Image className="navbarLogo" src={logo} roundedCircle />
        </BootstrapNavbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/my-calendar">My Calendar</Nav.Link>
          <Nav.Link href="/my-classes">My Classes</Nav.Link>
        </Nav>
        <BootstrapNavbar.Brand href="#notifications">
          <Image className="navbarImage" src={bellIcon} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Brand href="#messages">
          <Image className="navbarImage" src={mailIcon} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Brand href="#profile">
          <Image className="navbarImage" src={blankAvatar} roundedCircle />
        </BootstrapNavbar.Brand>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
