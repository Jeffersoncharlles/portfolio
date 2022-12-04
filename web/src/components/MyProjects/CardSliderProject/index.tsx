import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title:string
}

export const CardSliderProject = ({ title ,...rest}:Props) => {

    return(
      <div className={styles.container} {...rest} >
          {title}
        </div>
    );
}
