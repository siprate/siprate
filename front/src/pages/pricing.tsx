import Head from 'next/head';
import styles from '../styles/Pricing.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
              <img src="/images/save.svg" alt="arrow" className={styles.icon} />
              <p className={styles.text}>Planos e preços para aplicativos do Save Packeting e muito mais.</p>
            </div>
          </div>
        </section>
        <section className={styles.pricingSection}>
          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Plano Básico</h2>
            <p className={styles.cardText}>Ideal para pequenas empresas.</p>
            <p className={styles.cardPrice}>R$ 99/mês</p>
          </div>
          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Plano Padrão</h2>
            <p className={styles.cardText}>Para empresas em crescimento.</p>
            <p className={styles.cardPrice}>R$ 199/mês</p>
          </div>
          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Plano Avançado</h2>
            <p className={styles.cardText}>Para empresas estabelecidas.</p>
            <p className={styles.cardPrice}>R$ 299/mês</p>
          </div>
          <div className={styles.pricingCard}>
            <h2 className={styles.cardTitle}>Plano Premium</h2>
            <p className={styles.cardText}>Para grandes empresas.</p>
            <p className={styles.cardPrice}>R$ 399/mês</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
