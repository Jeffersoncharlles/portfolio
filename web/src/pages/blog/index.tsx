import Head from 'next/head';
import { Header } from '../../components/Header';
import styles from './styles.module.scss'

const blog = () => {

    return (
        <>
        <Head>
            <title>Jefferson Charlles</title>
            <meta name="description" content="Portfolio Jefferson Charlles" />
        </Head>
            <Header />
        </>
    );
}
export default blog
