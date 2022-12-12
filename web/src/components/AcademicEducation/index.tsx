import styles from './styles.module.scss'
import PhotoSvg from '../../assets/SVGS/PhotoSvg'
import { CardFormation } from './CardFormation';
import { academic } from '../../utils/helpers';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const AcademicEducation = ({ ...rest }) => {

    return(
      <section className='flex flex-col justify-start items-end w-full lg:items-center'  {...rest}>
        <h2 className='font-sans2 font-bold text-7xl absolute '>Academic Education</h2>
        <div className={styles.container}>
          <div >
            <PhotoSvg urlImage='/me2.png' />
          </div>
          <div className='flex flex-col  mt-36 gap-4'>
            {academic.map((item) => (
              <CardFormation key={item.title} data={item} />
            ))}

          </div>
        </div>
        </section>
    );
}
