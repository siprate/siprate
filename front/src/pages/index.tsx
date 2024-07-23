import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import IconStack from '../components/IconStack/IconStack';
import Button from '../components/Button/Button';
import TransparentButton from '../components/TransparentButton/TransparentButton';
import Footer from '../components/Footer/Footer';

const carouselData = [
  {
    overlayImage: "/images/imageStore1.svg",
    salesparImage: "/images/ComponentSalespar.svg",
    icon: "/icons/ICON7.svg",
    title: "Salespar",
    productImage: "/images/imageStore1.svg",
    productTitle: "productStartTitle",
    productDescription: "productDescription",
    productDescription2: "productDescription2",
    button1: { title: "initiateNowButton", component: TransparentButton },
    button2: { title: "learnMoreButton", component: Button, showArrow: true }
  },
  {
    overlayImage: "/images/imagePhoto.svg",
    salesparImage: "/images/ComponentSalespar.svg",
    icon: "/icons/ICON1.svg",
    title: "New Product",
    productImage: "/images/imagePhoto.svg",
    productTitle: "Outra produto incrível para sua empresa",
    productDescription: "productDescription",
    productDescription2: "productDescription2",
    button1: { title: "initiateNowButton", component: TransparentButton },
    button2: { title: "learnMoreButton", component: Button, showArrow: true }
  }
  // Adicione mais itens conforme necessário
];

const Home = () => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(t('emailInvalidMessage'));
    } else {
      setError('');
      // Lógica para enviar o e-mail
      console.log('Email enviado:', email);
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const currentData = carouselData[currentSlide];

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('homePageTitle')}</title>
        <meta name="description" content={t('homePageDescription')} />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <img src="/images/symbol.svg" alt="Simbo" className={styles.simbo} />
          <img src="/images/minorSymbol.svg" alt="Simbo Menor" className={styles.simboMenor} />
          <div className={styles.heroContent}>
            <IconStack />
            <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
            <h2 className={styles.heroSubtitle}>{t('heroSubtitle')}</h2>
            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder={t('workEmailPlaceholder')}
                className={styles.emailInput}
                value={email}
                onChange={handleEmailChange}
              />
              <Button title={t('startNowButton')} fullWidth />
            </form>
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </section>

        <section className={styles.solutionsSection}>
          <div className={styles.solutionsImage}>
            <div className={`${styles.circle} ${styles.circle1}`}>
              <span className={styles.tooltip}>Texto 1</span>
            </div>
            <div className={`${styles.circle} ${styles.circle2}`}>
              <span className={styles.tooltip}>Texto 2</span>
            </div>
            <div className={`${styles.circle} ${styles.circle3}`}>
              <span className={styles.tooltip}>Texto 3</span>
            </div>
          </div>
          <div className={styles.solutionsContent}>
            <h2 className={styles.solutionsTitle}>{t('solutionsTitle')}</h2>
            <h3 className={styles.solutionsSubtitle}>{t('solutionsSubtitle')}</h3>
            <p className={styles.solutionsParagraph}>
              {t('solutionsDescription')}
            </p>
          </div>
        </section>

        <section className={styles.iconSection}>
          <div className={styles.iconContent}>
            <h2 className={styles.text1}>{t('workUpgrade')}</h2>
            <h1 className={styles.text2}>{t('imagineLibrary')}</h1>
            <h1 className={styles.text2}>{t('entireBusinessApps')}</h1>
            <h1 className={styles.text2}>{t('entireBusinessApps1')}</h1>
            <div className={styles.iconButton}>
              <Button title={t('viewAllApps')} showArrow={true} />
            </div> 
          </div>
          <img src="/icons/ICON1.svg" alt="ICON1" className={`${styles.icon} ${styles.icon1}`} />
          <img src="/icons/ICON2.svg" alt="ICON2" className={`${styles.icon} ${styles.icon2}`} />
          <img src="/icons/ICON3.svg" alt="ICON3" className={`${styles.icon} ${styles.icon3}`} />
          <img src="/icons/ICON4.svg" alt="ICON4" className={`${styles.icon} ${styles.icon4}`} />
          <img src="/icons/ICON5.svg" alt="ICON5" className={`${styles.icon} ${styles.icon5}`} />
          <img src="/icons/ICON6.svg" alt="ICON6" className={`${styles.icon} ${styles.icon6}`} />
          <img src="/icons/ICON7.svg" alt="ICON7" className={`${styles.icon} ${styles.icon7}`} />
          <img src="/icons/ICON8.svg" alt="ICON8" className={`${styles.icon} ${styles.icon8}`} />
          <img src="/icons/ICON9.svg" alt="ICON9" className={`${styles.icon} ${styles.icon9}`} />
          <img src="/icons/ICON10.svg" alt="ICON10" className={`${styles.icon} ${styles.icon10}`} />
          <img src="/icons/ICON11.svg" alt="ICON11" className={`${styles.icon} ${styles.icon11}`} />
          <img src="/icons/ICON12.svg" alt="ICON12" className={`${styles.icon} ${styles.icon12}`} />
        </section>

        <section className={styles.imageOverlay}>
          <div className={styles.salesparTitleContainer}>
            <img src={currentData.icon} alt="ICON" className={styles.salesparIcon} />
            <h1 className={styles.salesparTitle}>{t(currentData.title)}</h1>
          </div>
          <img src={currentData.overlayImage} alt="Store Overlay" className={styles.overlayImage} />
          <img src={currentData.salesparImage} alt="Component Salespar" className={styles.salesparImage} />
        </section>

        <section className={styles.productSection}>
          <img src={currentData.productImage} alt="Store" className={styles.productImage} />
          <div className={styles.productContent}>
            <h1 className={styles.productTitle}>{t(currentData.productTitle)}</h1>
            <p className={styles.productDescription}>{t(currentData.productDescription)}</p>
            <p className={styles.productDescription2}>{t(currentData.productDescription2)}</p>
            <div className={styles.buttonGroup}>
              {React.createElement(currentData.button1.component, { title: t(currentData.button1.title) })}
              {React.createElement(currentData.button2.component, { title: t(currentData.button2.title), showArrow: currentData.button2.showArrow })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
