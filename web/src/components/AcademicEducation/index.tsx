import styles from './styles.module.scss'
import PhotoSvg from '../../assets/SVGS/PhotoSvg'

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export const AcademicEducation = ({ ...rest }) => {

    return(
      <section className={styles.container} {...rest}>
        <div>
          <PhotoSvg urlImage='/me2.png' />

        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='font-sans2 font-bold text-7xl mb-16'>Academic Education</h2>
          <div className='flex justify-center items-start'>
            <img src="/1623686887166.jpg" alt=""  className='w-[86px] h-[86px]'/>
            <div className='flex flex-col ml-7 gap-1 justify-center'>
              <h4 className='font-sans2 text-2xl text-gray-50 '>Faculdade Católica Paulista</h4>
              <p>Software analyst and Development</p>
              <span className='text-gray-300'>2021-2023</span>
            </div>
          </div>
        </div>
        </section>
    );
}
