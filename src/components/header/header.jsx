import React from 'react';
import NavbarItem from '../navbarItem/navbarItem';
import styles from './header.module.css';
import headerData from '../../data/header.json';
import Slider from '../slider/slider';


const Header = (props) => {

  return (
    <header className={styles.header}>
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