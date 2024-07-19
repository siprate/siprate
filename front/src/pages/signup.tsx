import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Signup.module.css';
import CustomInput from '../components/CustomInput/CustomInput';

const Signup = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="Signup page description" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftSection}>
          <a href="/"><img src="/siprate.svg" alt="SIPRATE Logo" className={styles.logo} /></a>
          <h1 className={styles.title}>Comece da forma certa com seu plano gratuito</h1>
          <p className={styles.text}>Não é preciso informar dados do cartão de crédito.</p>
          <footer className={styles.footer}>
            © 2024 Siprate SA. All Rights Reserved.
          </footer>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.glassEffect}>
            <h2 className={styles.signupTitle}>Inscrever-se</h2>
            <CustomInput
              name="E-mail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu e-mail"
            />
            <p className={styles.agreementText}>
              Ao continuar, você concorda com o Cronograma Específico do Produto e a Política de Privacidade.
            </p>
            <div className={styles.dividerContainer}>
              <span className={styles.divider}></span>
              <span className={styles.orText}>OU</span>
              <span className={styles.divider}></span>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <img src="/images/google.svg" alt="Google" className={styles.socialIcon} />
                Inscrever-se com Google
              </button>
              <button className={styles.socialButton}>
                <img src="/images/microsoft.svg" alt="Microsoft" className={styles.socialIcon} />
                Inscrever-se com Microsoft
              </button>
              <button className={styles.socialButton}>
                <img src="/images/github.svg" alt="GitHub" className={styles.socialIcon} />
                Inscrever-se com GitHub
              </button>
            </div>
          </div>
          <div className={styles.heroSection}>
            <img src="/images/symbol.svg" alt="Symbol" className={styles.symbolImage} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
