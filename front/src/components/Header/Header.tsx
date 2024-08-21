import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../Button/Button';
import TransparentButton from '../TransparentButton/TransparentButton';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAppsDropdownOpen(false);
    setCommunityDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleContinue = () => {
    router.push('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.section1}>
        <div className={styles.leftSection}>
          <p className={styles.text}>
            <Link href="#" className={styles.linkText}>
              {t('discover')}
            </Link>
          </p>
          <Link href="#" className={styles.link}>
            {t('requestDemo')}
          </Link>
          <Image src="/icons/arrow.svg" alt="arrow" className={styles.icon} width={16} height={16} />
        </div>
        <div className={styles.rightSection}>
          <Button title={t('adminConsole')} showArrow={false} onClick={handleContinue} />
          <div className={styles.languageSwitcher}>
            <div onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} className={styles.languageButton}>
              <Image src="/icons/globe.svg" alt="globe" width={16} height={16} />
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
          <Link href="/">
            <Image src="/siprate.svg" alt="SIPRATE Logo" className={styles.logo} width={100} height={50} />
          </Link>
          <div className={styles.dropdown}>
            <Link href="#" className={styles.link}>
              {t('apps')}
              <Image src="/icons/downArrow.svg" alt="down arrow" width={16} height={16} />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/salespar">
                {t('Salespar')}
              </Link>
              <a href="#">{t('app2')}</a>
              <a href="#">{t('app3')}</a>
            </div>
          </div>
          <Link href="/pricing" className={styles.link}>
            {t('pricing')}
          </Link>
          <div className={styles.dropdown}>
            <Link href="#" className={styles.link}>
              {t('community')}
              <Image src="/icons/downArrow.svg" alt="down arrow" width={16} height={16} />
            </Link>
            <div className={styles.dropdownContent}>
              <a href="#">{t('community1')}</a>
              <a href="#">{t('community2')}</a>
              <a href="#">{t('community3')}</a>
            </div>
          </div>
          <Link href="#" className={styles.link}>
            {t('support')}
          </Link>
        </div>
        <div className={styles.rightSection}>
          <TransparentButton title={t('startNow')} redirectTo="/signup" />
          <Button title={t('contactSales')} showArrow={true} />
        </div>
        <Image
          src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
          alt="Menu"
          className={styles.menuIcon}
          width={24}
          height={24}
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          <a href="#" className={styles.mobileLink} onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}>
            {t('apps')} <Image src="/icons/downArrow.svg" alt="down arrow" width={16} height={16} />
          </a>
          {appsDropdownOpen && (
            <div className={styles.dropdownContentMobile}>
              <Link href="/salespar">
                {t('Salespar')}
              </Link>
              <a href="#">{t('app2')}</a>
              <a href="#">{t('app3')}</a>
            </div>
          )}
          <Link href="/pricing" className={styles.mobileLink}>
            {t('pricing')}
          </Link>
          <a href="#" className={styles.mobileLink} onClick={() => setCommunityDropdownOpen(!communityDropdownOpen)}>
            {t('community')} <Image src="/icons/downArrow.svg" alt="down arrow" width={16} height={16} />
          </a>
          {communityDropdownOpen && (
            <div className={styles.dropdownContentMobile}>
              <a href="#">{t('community1')}</a>
              <a href="#">{t('community2')}</a>
              <a href="#">{t('community3')}</a>
            </div>
          )}
          <Link href="#" className={styles.mobileLink}>
            {t('support')}
          </Link>
          <Button title={t('adminConsole')} showArrow={false} onClick={handleContinue} />
          <TransparentButton title={t('startNow')} redirectTo="/signup" />
          <Button title={t('contactSales')} showArrow={true} />
          <div className={styles.languageSwitcher}>
            <div onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)} className={styles.languageButton}>
              <Image src="/icons/globe.svg" alt="globe" width={16} height={16} />
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
      )}
    </header>
  );
};

export default Header;
