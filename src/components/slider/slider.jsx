import React, { useEffect } from 'react';
import styles from './slider.module.css';
import headerData from '../../data/header.json';

const Slider = (props) => {


  return (
  <div className={styles.slider}>
    <div className={styles.info}>
      <h3 className={styles.title}>
        마시는 식이섬유<br/>미에로화이바
      </h3>
      {headerData.sns.map(sns => 
        <a 
          className={styles.sns}
          target="_blank"
          href={sns.link}
        >
          <i className={sns.icon}></i>
        </a>
      )}
    </div>
    <div className={styles.move}>
      <button className={styles.btn}>
        <img src="/images/header/left.png"></img>
      </button>
      <button className={styles.btn}>
        <img src="images/header/right.png"></img>
      </button>
    </div>
    <ul className={styles.tabs}>
      <li>
        <a 
          className={styles.tab}
          href="#"
        ></a>
      </li>
    </ul>
  </div>  
)};

export default Slider;