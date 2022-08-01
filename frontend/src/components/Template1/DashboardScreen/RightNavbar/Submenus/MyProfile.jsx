import React, { useContext } from 'react';
//REACT ROUTER
import { Link } from 'react-router-dom';

//HOOKS
import useClickOutside from '../../CustomHooks/ClickOutside';
import { useState } from 'react';

//ICONS , PICS , STYLES
import styles from './MyProfile.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import { ReactComponent as Avatar } from '../../pics/avatar.svg';

import { Store } from '../../../../../Store';

export default function MyProfile() {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const { cart, userInfo } = state;

  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >
      {/* AVATAR ICON */}
      <div className={styles.icon_avatar_container}>
        {/* <Avatar /> */}
      </div>

      {/* NAME */}
      <div className={styles.name}>
        <span>{userInfo ? <>{userInfo.name}</> : ''}</span>

        <MdKeyboardArrowDown />
      </div>

      {/* AVATAR/SETTINGS SUBMENU */}
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ''}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>Adminstrator</span>
          <span className={styles.role}>Controls</span>
        </div>
        <div className={styles.settings}>
          <Link to="/settings">Settings</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      </div>
    </div>
  );
}
