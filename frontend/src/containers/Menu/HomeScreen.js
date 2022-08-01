import React, { useState } from 'react';
import { pageData } from '../../components/Template1/HomeScreen/data';
import Header from '../../components/Template1/HomeScreen/Header';

import ContactButton from '../../components/Template1/HomeScreen/ContactButton';
import MenuManager from '../../components/Template1/HomeScreen/Menu/MenuManager';

import '../../components/Template1/HomeScreen/styles/home.scss';

const HomeScreen = () => {
  return (
    <MenuManager>
      <Header />
      <div className="homescreen-main-container" id="homescreen-main-container">
        <div
          className="homescreen-h1"
          style={{
            fontWeight: '900',
          }}
        >
          We <br /> Build <br /> Apps
        </div>
        <ContactButton />
      </div>
    </MenuManager>
  );
};
export default HomeScreen;
