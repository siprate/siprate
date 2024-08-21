import React from 'react';
import Image from 'next/image';
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
      {showArrow && <Image src="/icons/arrow.svg" alt="arrow" className={styles.arrow} width={16} height={16} />}
    </button>
  );
};

export default Button;
