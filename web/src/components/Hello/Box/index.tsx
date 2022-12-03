import Link from 'next/link';
import styles from './styles.module.scss'

export const Box = () => {

    return(
      <div className={styles.container}>
        <h4>Front-End</h4>
        <p>I’m developer front-end with ReactJs</p>
        <Link href="">views projects</Link>
        </div>
    );
}
