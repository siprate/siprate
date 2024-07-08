import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Signup = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="Signup page description" />
      </Head>
      <main className={styles.main}>
        <h1>Signup Page</h1>
      </main>
    </div>
  );
};

export default Signup;
