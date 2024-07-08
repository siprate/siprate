import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
    <Head>
        <title>Home Page</title>
        <meta name="description" content="Home page description" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
    </Head>
      <main className={styles.main}>
        <h1>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
