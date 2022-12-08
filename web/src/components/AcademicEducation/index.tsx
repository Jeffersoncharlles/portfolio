import styles from './styles.module.scss'
import PhotoSvg from '../../assets/SVGS/PhotoSvg'
import { CardFormation } from './CardFormation';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const AcademicEducation = ({ ...rest }) => {

    return(
      <section className={styles.container} {...rest}>
        <div>
          <PhotoSvg urlImage='/me2.png' />

        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='font-sans2 font-bold text-7xl mb-16'>Academic Education</h2>
         <CardFormation />
        </div>
        </section>
    );
}
