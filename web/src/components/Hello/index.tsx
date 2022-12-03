import { Box } from './Box';
import styles from './styles.module.scss'
import Vscode from '../../assets/SVGS/VsCodeSoft'

interface Props extends React.HTMLAttributes<HTMLDivElement>{}

export const Hello = ({ ...rest}:Props) => {

    return(
      <section className={styles.container} {...rest}>
        <h2>Hello!!👋 I’m {"\n"}
          <strong>Jefferson charlles</strong>
        </h2>
        <div className={styles.container_about_stacks}>
          <div className='gap-4'>
            <Box />
            <Box />
            <Box />
          </div>
          <Vscode />
        </div>
      </section>
    );
}
