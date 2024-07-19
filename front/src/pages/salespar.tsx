import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salespar Page</title>
        <meta name="description" content="Login page description" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Salespar Page</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
