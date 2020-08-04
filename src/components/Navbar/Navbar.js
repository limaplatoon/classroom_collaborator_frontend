import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar as BootstrapNavbar} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './NavBar.css'
import logo from '../../img/logoClassUp.png'
import blankAvatar from  '../../img/blank-avatar.png'
import mailIcon from  '../../img/mail.jpeg'
import bellIcon from  '../../img/bell.svg'

const Navbar = () => {
  return (
    <div>
      <BootstrapNavbar bg="light" variant="light">
        <BootstrapNavbar.Brand>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Image className='navbarLogo' src={logo} roundedCircle />
          </Link>
        </BootstrapNavbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to='/my-calender'>My Calendar</Nav.Link>
          <Nav.Link as={Link} to='/my-classes'>My Classes</Nav.Link>
        </Nav>
        <BootstrapNavbar.Brand href="#notifications">
          <Image className='navbarImage' src={bellIcon} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Brand href="#messages">
          <Image className='navbarImage' src={mailIcon} />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Brand href="#profile">
          <Image className='navbarImage' src={blankAvatar} roundedCircle />
        </BootstrapNavbar.Brand>
      </BootstrapNavbar>
    </div>
  )
}

export default Navbar