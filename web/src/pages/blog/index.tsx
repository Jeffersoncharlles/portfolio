import Head from 'next/head';
import { Header } from '../home/Header';
import styles from './styles.module.css'

const blog = () => {

    return (
        <>
        <Head>
            <title>Jefferson Charlles</title>
            <meta name="description" content="Portfolio Jefferson Charlles" />
        </Head>
            <Header />
            <main className={styles.container}></main>
        </>
    );
}
export default blog
