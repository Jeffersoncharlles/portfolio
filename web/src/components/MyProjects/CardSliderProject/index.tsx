import styles from './styles.module.scss'
import Image from 'next/image';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    imageUrl: string;
    title: string;
    body: string;
  }
}

export const CardSliderProject = ({data,...rest}:Props) => {

    return(
      <div className={styles.container} {...rest} >
        <Image src={data.imageUrl} alt="" width={573} height={380.65} />
        <div className={styles.container_body}>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      </div>
    );
}
