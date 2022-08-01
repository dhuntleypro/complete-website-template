import React, { useContext } from 'react';
import { Plus } from 'react-feather';
import { MenuContext } from '../Menu/MenuManager';
import cn from 'classnames';

import './style.scss';
import { Link } from 'react-router-dom';

export default function ContactButton() {
  // const { setOpen, open } = useContext(Menuontext);
  // const { open } = useContext(MenuContext);
  return (
    <button
      className={cn('contact-button')}
      // onClick={() => setOpen(!open)}
    >
      <Link className="nav-link red" to="/contact-us">
        <span>Contact us</span> <Plus />
      </Link>
    </button>
  );
}
