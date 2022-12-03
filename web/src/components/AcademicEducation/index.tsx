import styles from './styles.module.scss'
import PhotoSvg from '../../assets/SVGS/PhotoSvg'

export const AcademicEducation = () => {

    return(
      <section className={styles.container}>
        <div>
          <PhotoSvg urlImage='/me2.png' />

        </div>
        <div>
          <h2>Academic Education</h2>
          <div>
            <img src="/1623686887166.jpg" alt="" />
            <div>
              <h4>Faculdade Católica Paulista</h4>
              <p>Software analyst and Development</p>
              <span>2021-2023</span>
            </div>
          </div>
        </div>

        </section>
    );
}
