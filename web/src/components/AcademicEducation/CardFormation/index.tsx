import styles from './styles.module.css'

export const CardFormation = () => {

    return(
        <div className={styles.container}>
          <img src="/1623686887166.jpg" alt="" className={styles.avatar} />
        <div className={styles.container_card_body}>
            <h4 className='font-sans2 text-2xl text-gray-50 '>Faculdade Católica Paulista</h4>
            <p>Software analyst and Development</p>
            <span className='text-gray-300'>2021-2023</span>
          </div>
        </div>
    );
}
