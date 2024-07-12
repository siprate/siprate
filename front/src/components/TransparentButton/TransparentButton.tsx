import React from 'react';
import styles from './TransparentButton.module.css';

type TransparentButtonProps = {
  title: string;
};

const TransparentButton: React.FC<TransparentButtonProps> = ({ title }) => {
  return (
    <button className={styles.button}>
      {title}
    </button>
  );
};

export default TransparentButton;