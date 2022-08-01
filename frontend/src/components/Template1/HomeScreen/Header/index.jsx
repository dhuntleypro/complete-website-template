import React from 'react';
import Menu from '../Menu';
import './style.scss';

export default function Header() {
  return (
    <div className="header-wrap">
      <p className="brand-description">Adaptive website and app studio</p>
      <Menu />
    </div>
  );
}
