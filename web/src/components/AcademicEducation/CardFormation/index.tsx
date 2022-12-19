import styles from './styles.module.css'

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
          <img src={data.imagUrl} alt="" className={styles.avatar} />
          <div className={styles.container_card_body}>
          <h4 className={styles.title}>{data.title}</h4>
            <p>{data.description}</p>
            <span className='text-gray-300'>{data.dateFrom}-{ data.dateTo}</span>
          </div>
        </div>
    );
}
