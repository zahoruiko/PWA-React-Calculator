import React from 'react';
import { commaSeparateNumber } from '../../utils/numbersFormatter';
import styles from './styles.module.css';

const CalculatorDisplay = ({ data }) => {
  let displayContent = '';
  if (data.length > 0) displayContent = data.join('');
  return (
    <div className={styles.displayWrapper}>
      <div className={styles.displayText}>{commaSeparateNumber(displayContent)}</div>
    </div>
  );
};

export default CalculatorDisplay;
