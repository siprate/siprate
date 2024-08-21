import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Pricing.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Plans from '../components/Plans/Plans';

const Pricing = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing Page</title>
        <meta name="description" content="Pricing page description" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Cresça seu negócio<br />com o melhor investimento!</h1>
            <div className={styles.gradientLine}>
              <Image src="/images/save.svg" alt="arrow" className={styles.icon} width={50} height={50} />
              <p className={styles.text}>Planos e preços para aplicativos do Save Packeting e muito mais.</p>
            </div>
          </div>
        </section>
        
        <Plans />

      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
