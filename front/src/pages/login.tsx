import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login page description" />
      </Head>
      <main className={styles.main}>
        <h1>Login Page</h1>
      </main>
    </div>
  );
};

export default Login;
