import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Login.module.css';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    if (validateEmail(email)) {
      setShowAdditionalFields(true);
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page description" />
      </Head>
      <main className={styles.main}>
        <div className={styles.rightSection}>
          <Link href="/">
            <Image src="/siprate.svg" alt="SIPRATE Logo" className={styles.logo} width={100} height={50} />
          </Link>
          <div className={styles.glassEffect}>
            {!showAdditionalFields && (
              <>
                <h2 className={styles.loginTitle}>Bem-vindo</h2>
                <p className={styles.agreementText}>Efetue login na Siprate para continuar</p>
              </>
            )}
            <CustomInput
              name="E-mail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu e-mail"
            />
            {!showAdditionalFields && (
              <Button title="Continuar" fullWidth onClick={handleContinue} />
            )}
            {showAdditionalFields && (
              <>
                <CustomInput
                  name="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  type="password"
                />
                <p className={styles.agreementText2}>
                  Ao continuar, você concorda com o Cronograma Específico do Produto e a Política de Privacidade.
                </p>
                <Button title="Finalizar Cadastro" fullWidth />
              </>
            )}
            {!showAdditionalFields && (
              <>
                <div className={styles.dividerContainer}>
                  <span className={styles.divider}></span>
                  <span className={styles.orText}>OU</span>
                  <span className={styles.divider}></span>
                </div>
                <div className={styles.socialButtons}>
                  <button className={styles.socialButton}>
                    <Image src="/images/google.svg" alt="Google" className={styles.socialIcon} width={24} height={24} />
                    Continuar com Google
                  </button>
                  <button className={styles.socialButton}>
                    <Image src="/images/microsoft.svg" alt="Microsoft" className={styles.socialIcon} width={24} height={24} />
                    Continuar com Microsoft
                  </button>
                  <button className={styles.socialButton}>
                    <Image src="/images/github.svg" alt="GitHub" className={styles.socialIcon} width={24} height={24} />
                    Continuar com GitHub
                  </button>
                </div>
              </>
            )}
          </div>          
          <div className={styles.heroSection}>
            <Image src="/images/symbol.svg" alt="Symbol" className={styles.symbolImage} width={200} height={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
