import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Notifications from "../Notifications/Notifications";
import NotificationsAPI from "../../API/NotificationsAPI";
import Logout from "../../pages/authentication/logout.js";

import "./NavBar.css";
import logo from "../../static/img/logoClassUp.png";
import blankAvatar from "../../static/img/blank-avatar.svg";
import bAvatar from "../../static/img/b-avatar.png";
// import mailIcon from "../../static/img/mail.jpeg";
import bellIcon from "../../static/img/bell.svg";
import alertIcon from "../../static/img/bell_alert.svg";
import logout from "../../static/img/logout.png";
import calendar from "../../static/img/calendar.png";
import classes from "../../static/img/classes.png";
import { NavBarContext } from "../../context/NavBarContext";

const Navbar = () => {
  const { alerts, loadNotifications, clearNotification } = useContext(NavBarContext)

  {/* 
   useEffect(() => {
    loadNotifications();
  }, []);

            */}

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        {alerts.length > 0 ? (
          <Notifications
            alerts={alerts}
            handleItemClick={clearNotification}
          />
        ) : (
            <span>no notifications</span>
          )}
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <BootstrapNavbar className="navbar">
        <BootstrapNavbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Image className="navbarLogo" src={logo} roundedCircle />
          </Link>
        </BootstrapNavbar.Brand>

        {/* <BootstrapNavbar.Brand href="#profile">
          <Image className="navbarImage" src={blankAvatar} roundedCircle />
        </BootstrapNavbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/my-calender">
            My Calendar
          </Nav.Link>
          <Nav.Link as={Link} to="/myClasses">
            My Classes
          </Nav.Link>
          <Nav.Link as={Link} to="/myReviews">
            My Reviews
          </Nav.Link>
          <Nav.Link as={Link} to="/JoinAClass">
            Join a Class
          </Nav.Link>
        </Nav>
        <BootstrapNavbar.Brand style={{ cursor: "pointer" }}>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose
          >
            <Image
              className="navbarImage"
              src={alerts.length > 0 ? alertIcon : bellIcon}
            />
          </OverlayTrigger>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Brand >
          <Nav.Link as={Link} to="/logout">
            <Image className="navbarImage" src={logout} />
          </Nav.Link>
        </BootstrapNavbar.Brand>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
