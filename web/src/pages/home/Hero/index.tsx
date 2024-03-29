import SlacksIcons from '../../../assets/SVGS/SlacksIcons';
import UnionDegrade from '../../../assets/SVGS/UnionDegrade';
import styles from './styles.module.css'
interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export const Hero = ({...rest}:Props) => {

    return(
      <section className={styles.containerHero}  {...rest} >

        <div className={styles.container_item1} data-aos="fade-up"  data-aos-duration="2000">
          <h1 className={styles.container_title} aria-label='Software Analyst'>Software Analyst</h1>
          <h2 className={styles.container_subtitle}>Jefferson Charlles</h2>
          <p className={styles.container_body}>
            code beautifully things and l love what I do
            I'm always learning. I love technology, energy
            drinks and applying knowledge to solve problem
          </p>
          <button className={styles.container_button}>
            Chat me
          </button>
        </div>

        <div className={styles.container_item2} data-aos="fade-up" data-aos-delay="400">
          <UnionDegrade className={styles.union} />
          <div className={styles.stacks} >
            <SlacksIcons className={styles.icons} />
          </div>
        </div>
      </section>
    );
}
