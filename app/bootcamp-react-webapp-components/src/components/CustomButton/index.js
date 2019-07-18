import React from 'react';

import styles from './index.module.css';

const CustomButton = ({ text, onClick, className }) => (
  <button
    className={`${styles.button} ${className}`}
    onClick={onClick}
  >
    { text }
  </button>
);

export default CustomButton;
