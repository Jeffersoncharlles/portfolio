import Head from 'next/head';
import { Header } from '../home/Header';
import styles from './styles.module.css'

const blog = () => {

    return (
        <>
        <Head>
            <title>Blog | Jefferson Charlles</title>
            <meta name="description" content="Blog Jefferson Charlles" />
        </Head>
            <main className={styles.container}></main>
        </>
    );
}
export default blog
