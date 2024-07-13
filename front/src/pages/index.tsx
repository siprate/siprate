import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import IconStack from '../components/IconStack/IconStack';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page description" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <img src="/images/symbol.svg" alt="Simbo" className={styles.simbo} />
          <img src="/images/minorSymbol.svg" alt="Simbo Menor" className={styles.simboMenor} />
          <div className={styles.heroContent}>
            <IconStack />
            <h1 className={styles.heroTitle}>O seu negócio inteiro em uma plataforma.</h1>
            <h2 className={styles.heroSubtitle}>Simples, prático e tecnológico</h2>
          </div>
        </section>
        <h1>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
