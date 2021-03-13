import React from 'react';
import styles from './navbarItem.module.css';

const NavbarItem = ({menu}) => (
  <li className={styles.item}>
    {menu.title}
    <i className="fas fa-sort-down"></i> 
  </li>  
);

export default NavbarItem;