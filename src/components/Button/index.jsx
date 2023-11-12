import React from 'react';
import styles from './styles.module.css';

const Button = ({ handler, buttonTitle, optionalStyle }) => {
  return (
    <div onClick={handler} className={[styles.button, optionalStyle].join(' ')}>
      {buttonTitle}
    </div>
  );
};

export default Button;
