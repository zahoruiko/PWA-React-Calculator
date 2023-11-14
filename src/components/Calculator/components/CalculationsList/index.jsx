import React from 'react';
import styles from './styles.module.css';

const CalculationsList = ({ data }) => {
  return (
    <div className={styles.calculationsListWrapper}>
      <div className={styles.listWrapper}>
        {data.map((item, id) => {
          return (
            <div key={id + 1} className={styles.listItemWrapper}>
              <div className={styles.displayText}>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalculationsList;
