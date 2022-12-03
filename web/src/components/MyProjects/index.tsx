import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const MyProjects = ({ ...rest}:Props) => {

    return(
        <section className={styles.container} {...rest}>

        </section>
    );
}
