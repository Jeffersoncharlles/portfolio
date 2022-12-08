import styles from './styles.module.scss'
import Image from 'next/image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    imageUrl: string;
    title: string;
    body: string;
  }
  active?: boolean;
}

export const CardSliderProject = ({ data, active, ...rest }: Props) => {
  const bodyLength = data.body.length >= 78

  const bodySlice = bodyLength ? data.body.slice(0, 78) : data.body
    return(
      <div className={`${styles.container} ${active && styles.active}`} {...rest} >
        <Image  src={data.imageUrl} alt="" width={573} height={380.65} />
        <div className={styles.container_body}>
          <h4>{data.title}</h4>
          <p>{bodySlice }</p>
        </div>
      </div>
    );
}
