import styles from './styles.module.css'
import Image from 'next/image';
interface Props {
  data: {
    title: string;
    description: string;
    imagUrl: string;
    dateFrom: number;
    dateTo: number;
  }
}

export const CardFormation = ({data }:Props) => {

    return(
      <div className={styles.container}>
        <Image src={data.imagUrl} alt="" className={styles.avatar} width={86} height={86} />
          <div className={styles.container_card_body}>
          <h4 className={styles.title}>{data.title}</h4>
            <p className='text-base sm:text-sm'>{data.description}</p>
          <span className='text-gray-300 text-base sm:text-xs'>{data.dateFrom}-{ data.dateTo}</span>
          </div>
        </div>
    );
}
