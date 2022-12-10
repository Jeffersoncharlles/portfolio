import styles from './styles.module.scss'
import PhotoSvg from '../../assets/SVGS/PhotoSvg'
import { CardFormation } from './CardFormation';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const AcademicEducation = ({ ...rest }) => {

    return(
      <section className='lg:flex lg:flex-col lg:justify-start lg:items-end relative flex justify-center '  {...rest}>
        <h2 className='font-sans2 font-bold text-7xl absolute '>Academic Education</h2>
        <div className={styles.container}>
          <div>
            <PhotoSvg urlImage='/me2.png' />
          </div>
          <div className='flex flex-col  mt-36'>
            <CardFormation />
          </div>
        </div>
        </section>
    );
}
