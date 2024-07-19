import React from 'react';
import styles from './Footer.module.css';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h2 className={styles.title}>Comece gratuitamente</h2>
        <div className={styles.emailContainer}>
          <input type="email" placeholder="Seu e-mail de trabalho" className={styles.emailInput} />
          <Button title="Começar" fullWidth />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.section}>
        <div className={styles.linksContainer}>
          <div className={styles.column}>
            <h3>DESENVOLVEDORES</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Identidade desbloqueada - Podcasts</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>DOCUMENTOS</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Bibliotecas SDK</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>APRENDIZADO</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Programa de pesquisa da Siprate</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>EMPRESA</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Segurança, privacidade e conformidade</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>APOIO</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>APRENDA</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>PLATAFORMA</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>RECURSOS</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.section}>
        <div className={styles.bottomContainer}>
          <p>© 2024 Siprate SA. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Status</a> • <a href="#">Jurídico</a> • <a href="#">Privacidade</a> • <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
