import React from 'react';
import { useRouter } from 'next/router';
import styles from './TransparentButton.module.css';

type TransparentButtonProps = {
  title: string;
  redirectTo?: string; // Adicione a prop redirectTo
};

const TransparentButton: React.FC<TransparentButtonProps> = ({ title, redirectTo }) => {
  const router = useRouter();

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {title}
    </button>
  );
};

export default TransparentButton;
