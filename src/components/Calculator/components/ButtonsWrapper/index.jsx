import React from 'react';
import styles from './styles.module.css';

const ButtonsWrapper = ({ children }) => {
  return (
    <div className={styles.buttonsWrapper}>
      { children }
    </div>
  )
};

export default ButtonsWrapper;

