import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useState } from 'react';
import { Store } from '../Store';
import SearchBox from './SearchBox';

import Menu from './HomeScreen/Menu';
import './HomeScreen/Header/style.scss';

function CustomNavBar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <header>
      <p className="brand-description">Adaptive website and app studio</p>
      <Menu />
    </header>
  );
}
export default CustomNavBar;
