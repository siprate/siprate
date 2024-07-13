import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import IconStack from '../components/IconStack/IconStack';
import Button from '../components/Button/Button';

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
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
            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Seu e-mail de trabalho"
                className={styles.emailInput}
                value={email}
                onChange={handleEmailChange}
              />
              <Button title="Começar Agora" fullWidth />
            </form>
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </section>
        <h1>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
