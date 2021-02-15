import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import UserContext from '../lib/userContext';
import Router from 'next/router';

import Cookies from 'js-cookie';

function MyNavbar() {

  const { user, setUser } = React.useContext(UserContext);

  function onLogout() {
    Cookies.set('jwt', '');
    setUser({ user: null });
    Router.push('/login');
  }

  const renderUserNav = () => {
    if (user) {
      return <Nav>
        <Navbar.Text>
          Signed in as: {user.username}
        </Navbar.Text>
        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
      </Nav>
    }

    return <Nav>
      <Link href="/login" passHref>
        <Nav.Link>Login</Nav.Link>
      </Link>
    </Nav>
  }

  return <Navbar>
    <Link href="/index" passHref>
      <Navbar.Brand href="/">Next JS Bootstrap</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      {renderUserNav()}
    </Navbar.Collapse>
  </Navbar>;
}

export default MyNavbar;