// /src/components/Header/Header.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import Button from '../Button/Button';
import TransparentButton from '../TransparentButton/TransparentButton';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageDropdownOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.section1}>
        <div className={styles.leftSection}>
          <p className={styles.text}>{t('discover')}</p>
          <a href="#" className={styles.link}>{t('requestDemo')}</a>
          <img src="/icons/arrow.svg" alt="arrow" className={styles.icon} />
        </div>
        <div className={styles.rightSection}>
          <Button title={t('adminConsole')} showArrow={false} />
          <div className={styles.languageSwitcher}>
            <div onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}>
              <img src="/icons/globe.svg" alt="globe" />
              <span>{i18n.language === 'pt' ? t('portuguese') : t('english')}</span>
            </div>
            {languageDropdownOpen && (
              <div className={styles.dropdownContent}>
                <a onClick={() => changeLanguage('en')}>{t('english')}</a>
                <a onClick={() => changeLanguage('pt')}>{t('portuguese')}</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.gradientLine}></div>
      <div className={styles.section2}>
        <div className={styles.links}>
          <img src="/siprate.svg" alt="SIPRATE Logo" className={styles.logo} />
          <div className={styles.dropdown}>
            <a href="#" className={styles.link}>{t('apps')}
              <img src="/icons/downArrow.svg" alt="down arrow" />
            </a>
            <div className={styles.dropdownContent}>
              <a href="#">{t('app1')}</a>
              <a href="#">{t('app2')}</a>
              <a href="#">{t('app3')}</a>
            </div>
          </div>
          <a href="#" className={styles.link}>{t('pricing')}</a>
          <div className={styles.dropdown}>
            <a href="#" className={styles.link}>{t('community')}
              <img src="/icons/downArrow.svg" alt="down arrow" />
            </a>
            <div className={styles.dropdownContent}>
              <a href="#">{t('community1')}</a>
              <a href="#">{t('community2')}</a>
              <a href="#">{t('community3')}</a>
            </div>
          </div>
          <a href="#" className={styles.link}>{t('support')}</a>
        </div>
        <div className={styles.rightSection}>
          <TransparentButton title={t('startNow')} />
          <Button title={t('contactSales')} showArrow={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
