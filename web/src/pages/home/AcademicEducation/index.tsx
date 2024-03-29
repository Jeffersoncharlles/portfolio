import styles from './styles.module.css'
import PhotoSvg from '../../../assets/SVGS/PhotoSvg'
import { CardFormation } from './CardFormation';
import { academic } from '../../../utils/helpers';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const AcademicEducation = ({ ...rest }) => {

    return(
      <section className={styles.container}  {...rest}>
        <h2 className={styles.container_title} data-aos="fade-up">Academic Education</h2>
        <div className={styles.container_About}>
          <picture className={styles.picture} data-aos="fade-up"  data-aos-delay="300">
            <PhotoSvg urlImage='/mmmm.png'  />
          </picture>
          <div className={styles.container_cards} data-aos="fade-up" data-aos-delay="300">
            {academic.map((item,index) => (
              <CardFormation key={index} data={item} />
            ))}

          </div>
        </div>
        </section>
    );
}
