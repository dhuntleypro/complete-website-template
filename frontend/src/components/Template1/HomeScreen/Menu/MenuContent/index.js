import React, { useContext } from 'react';
import { Store } from '../../../../../Store';

import { Link } from 'react-router-dom';

import { MenuContext } from '../MenuManager';
// import { Facebook, Instagram, GitHub Youtube, Dribbble, Twitch } from 'react-feather';
import { Facebook, Instagram, GitHub } from 'react-feather';

import cn from 'classnames';
import Badge from 'react-bootstrap/Badge';

import './style.scss';

export default function MenuContent() {
  const { open } = useContext(MenuContext);
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  // No User
  const internalLinks = [
    {
      url: '/Pricing',
      component: <span>Pricing</span>,
      img: 'https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    },
    {
      url: '/Shop',
      component: <span>Shop</span>,
      img: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80',
    },
    {
      url: '/Studio',
      component: <span>Studio</span>,
      img: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      url: '/About',
      component: <span>About</span>,
      img: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    },
    {
      url: userInfo ? '#signout' : '/signin',
      component: userInfo ? (
        <Link to="#signout" onClick={signoutHandler}>
          Sign Out
        </Link>
      ) : (
        <Link to="/signin">Sign In</Link>
      ),
      img: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    },
  ];

  // Sign In User
  const internalLinks_SignedIn = [
    {
      url: userInfo && userInfo.isAdmin ? '/admin/dashboard' : '/pricing',
      component:
        userInfo && userInfo.isAdmin ? (
          <span>Dashboard </span>
        ) : (
          <span>Pricing</span>
        ),
      img: 'https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    },
    {
      url: '/shop',
      component:
        userInfo && userInfo.isAdmin ? (
          <span>Preview Shop</span>
        ) : (
          <span>Shop</span>
        ),
      img: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80',
    },
    {
      url: '/About',
      component: <span>About</span>,
      img: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },
    {
      url: '/Cart',
      component: (
        <span to="/cart">
          Cart
          {cart.cartItems.length > 0 && (
            <Badge pill bg="danger">
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </Badge>
          )}
        </span>
      ),
      img: 'https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    },

    {
      url: '/Profile',
      component: <span>Profile</span>,
      img: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    },
    {
      url: userInfo ? '#signout' : '/signin',
      component: userInfo ? (
        <Link to="#signout" onClick={signoutHandler}>
          Sign Out
        </Link>
      ) : (
        <Link to="/signin">Sign In</Link>
      ),
      img: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    },
  ];

  const externalLinks = [
    {
      // url to website ...
      url: 'https://www.facebook.com', // directory link
      component: <Facebook />,
    },
    {
      // url: 'www.instagram.com/_just_live/',
      url: 'https://www.instagram.com/_just_live',
      component: <Instagram />,
    },
    {
      url: 'https://github.com/dhuntleypro',
      component: <GitHub />,
    },
    //   {
    //     url: 'www.dribbble.com',
    //     component: <Dribbble />,
    //   },
    //   {
    //     url: 'www.twitch.com',
    //     component: <Twitch />,
    //   },
  ];

  return (
    // browsrouter....

    <div className="menu-holder">
      <div className={cn('menu-inside', { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {userInfo ? <>Welcome, {userInfo.name}</> : ''}

            {userInfo
              ? internalLinks_SignedIn.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.component}</a>
                    <img alt="menu" src={link.img} />
                  </li>
                ))
              : internalLinks.map((link) => (
                  <li key={link.url}>
                    <a href={link.url}>{link.component}</a>
                    <img alt="menu" src={link.img} />
                  </li>
                ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
