import Link from 'next/link';
import styles from './styles.module.css'

export const Box = () => {

    return(
      <div className={styles.container}>
        <h4 className={styles.title}>Front-End</h4>
        <p className={styles.body}>I’m developer front-end with ReactJs</p>
        <Link className={styles.viewsProject} href="">views projects</Link>
      </div>
    );
}
