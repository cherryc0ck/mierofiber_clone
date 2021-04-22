import React, { useEffect, useRef } from 'react';
import NavbarItem from '../navbarItem/navbarItem';
import styles from './header.module.css';
import headerData from '../../data/header.json';
import Slider from '../slider/slider';


const Header = (props) => {

  const headerRef = useRef();

  return (
    <header className={styles.header} ref={headerRef}>
      <nav className={styles.navbar}>
        <h1>
          <a>
            <img className={styles.logo} src="/images/header/h_logo.png" />
          </a>
        </h1>
        <ul className={styles.list}>
          {headerData.category.map(menu => 
            <NavbarItem
              key={menu.title}
              menu={menu}
            />
          )}
        </ul>
      </nav>
      <Slider />
    </header>
  )     
};

export default Header;