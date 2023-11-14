import React from 'react';
import styles from './styles.module.css';

const CalculatorUIWrapper = ({ children }) => {
  return <div className={styles.calculatorUIWrapper}>{children}</div>;
};

export default CalculatorUIWrapper;
