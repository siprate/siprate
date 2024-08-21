import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './IconStack.module.css';

const IconStack = () => {
  const [iconStack, setIconStack] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIconStack(prevStack => (prevStack === 12 ? 1 : prevStack + 1));
    }, 3000); // Troca após 3 segundos, ajuste conforme necessário

    return () => clearTimeout(timer);
  }, [iconStack]);

  return (
    <div className={styles.container}>
      {iconStack === 1 && (
        <div className={styles.iconStack}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON1.svg" alt="ICON1" className={`${styles.icon} ${styles.icon1}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 2 && (
        <div className={styles.iconStack2}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON2.svg" alt="ICON2" className={`${styles.icon} ${styles.icon2}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 3 && (
        <div className={styles.iconStack3}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON3.svg" alt="ICON3" className={`${styles.icon} ${styles.icon3}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 4 && (
        <div className={styles.iconStack4}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON4.svg" alt="ICON4" className={`${styles.icon} ${styles.icon4}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 5 && (
        <div className={styles.iconStack5}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON5.svg" alt="ICON5" className={`${styles.icon} ${styles.icon5}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 6 && (
        <div className={styles.iconStack6}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON6.svg" alt="ICON6" className={`${styles.icon} ${styles.icon6}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 7 && (
        <div className={styles.iconStack7}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON7.svg" alt="ICON7" className={`${styles.icon} ${styles.icon7}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 8 && (
        <div className={styles.iconStack8}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON8.svg" alt="ICON8" className={`${styles.icon} ${styles.icon8}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 9 && (
        <div className={styles.iconStack9}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON9.svg" alt="ICON9" className={`${styles.icon} ${styles.icon9}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 10 && (
        <div className={styles.iconStack10}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON10.svg" alt="ICON10" className={`${styles.icon} ${styles.icon10}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 11 && (
        <div className={styles.iconStack11}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON11.svg" alt="ICON11" className={`${styles.icon} ${styles.icon11}`} width={50} height={50} />
        </div>
      )}
      {iconStack === 12 && (
        <div className={styles.iconStack12}>
          <div className={`${styles.rect} ${styles.rect1}`}></div>
          <div className={`${styles.rect} ${styles.rect2}`}></div>
          <div className={`${styles.rect} ${styles.rect3}`}></div>
          <Image src="/icons/ICON12.svg" alt="ICON12" className={`${styles.icon} ${styles.icon12}`} width={50} height={50} />
        </div>
      )}
    </div>
  );
};

export default IconStack;
