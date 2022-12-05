import styles from './styles.module.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  active: number
  index:number
}

export const CardSliderProject = ({ title,active,index ,...rest}:Props) => {

    return(
      <div className={`${styles.container} ${active === index && styles.active }`} {...rest} >
          {title}
        </div>
    );
}
