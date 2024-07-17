import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import IconStack from '../components/IconStack/IconStack';
import Button from '../components/Button/Button';
import TransparentButton from '../components/TransparentButton/TransparentButton';


const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
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
            <h2 className={styles.solutionsTitle}>Soluções modulares</h2>
            <h3 className={styles.solutionsSubtitle}>Um pacote totalmente integrado de produtos para gestão da sua empresa</h3>
            <p className={styles.solutionsParagraph}>
              Reduza custos, aumente a receita e administre sua empresa com mais eficiência em uma plataforma totalmente integrada. 
              Use a Siprate para gerenciar todas as suas necessidades e operações e ainda lançar – ou criar – novos modelos de negócios.
            </p>
          </div>
        </section>

        <section className={styles.iconSection}>
        <div className={styles.iconContent}>
          <h2 className={styles.text1}>Leve o seu trabalho a outro patamar</h2>
          <h1 className={styles.text2}>Imagine uma biblioteca</h1>
          <h1 className={styles.text2}>inteira de aplicativos</h1>
          <h1 className={styles.text2}>empresariais ao seu dispor.</h1>
          <div className={styles.iconButton}>
            <Button title="Ver todos os apps" showArrow={true} />
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

        <section className={styles.productSection}>
          <img src="/images/imageStore1.svg" alt="Store" className={styles.productImage} />
          <div className={styles.productContent}>
            <h1 className={styles.productTitle}>Tudo começa com um produto e um sonho</h1>
            <p className={styles.productDescription}>
              Simplifique a gestão do seu negócio com nosso app de vendas e emissão de notas fiscais! Ideal para pequenas e médias empresas, ele permite cadastrar produtos, gerenciar clientes, controlar estoques e emitir NF-e e NFS-e de forma rápida e segura.
              <br /><br />
              Com relatórios detalhados, integração com meios de pagamento e acesso móvel, você terá tudo o que precisa na palma da mão. Maximize a eficiência e a lucratividade do seu negócio com nossa solução completa e intuitiva. Baixe agora e transforme sua gestão!
            </p>
            <div className={styles.buttonGroup}>
              <TransparentButton title="Iniciar Agora" />
              <Button title="Saiba mais sobre a Salespar" showArrow={true} />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default Home;
