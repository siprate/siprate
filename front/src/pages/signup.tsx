import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Signup.module.css';
import CustomInput from '../components/CustomInput/CustomInput';
import Button from '../components/Button/Button';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');

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
            {!showAdditionalFields && (
              <h2 className={styles.signupTitle}>Inscrever-se</h2>
            )}
            <CustomInput
              name="E-mail"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu e-mail"
            />
            {!showAdditionalFields && (
              <><p className={styles.agreementText}>
                Ao continuar, você concorda com o Cronograma Específico do Produto e a Política de Privacidade.
              </p><Button title="Continuar" fullWidth onClick={handleContinue} /></>
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
                <CustomInput
                  name="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                />
                <CustomInput
                  name="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="Digite seu CPF"
                />
                <div className={styles.flexRow}>
                  <CustomInput
                    name="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Digite seu telefone"
                  />
                  <CustomInput
                    name="Data de Nascimento"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    placeholder="Digite sua data de nascimento"
                    type="date"
                  />
                </div>
                <p className={styles.agreementText}>
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
              </>
            )}
          </div>
          <div className={styles.heroSection}>
            <img src="/images/symbol.svg" alt="Symbol" className={styles.symbolImage} />
          </div>
        </div>
        <div className={styles.DownSection}>
          <h1 className={styles.title2}>Comece da forma certa com seu plano gratuito</h1>
          <p className={styles.text2}>Não é preciso informar dados do cartão de crédito.</p>
          <footer className={styles.footer2}>
            © 2024 Siprate SA. All Rights Reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Signup;
