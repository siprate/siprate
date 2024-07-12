import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  title: string;
  showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, showArrow = false }) => {
  return (
    <button className={styles.button}>
      {title}
      {showArrow && <img src="/icons/arrow.svg" alt="arrow" className={styles.arrow} />}
    </button>
  );
};

export default Button;