import React from 'react';
import styles from './Header.module.css';

const Header = ({ date, year }) => (
  <div className = {styles.header}>
    <div className = {styles.title}>
      The INFO6150 News
    </div>
    <div className = {styles.time} dateTime="Wed, June 26, 2019">
      Wed, June 26, 2019
    </div>
  </div>
)

export default Header;
