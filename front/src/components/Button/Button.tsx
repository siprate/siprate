import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  title: string;
  showArrow?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, showArrow = false, fullWidth = false, onClick }) => {
  return (
    <button className={`${styles.button} ${fullWidth ? styles.buttonFullWidth : ''}`} onClick={onClick}>
      {title}
      {showArrow && <img src="/icons/arrow.svg" alt="arrow" className={styles.arrow} />}
    </button>
  );
};

export default Button;
