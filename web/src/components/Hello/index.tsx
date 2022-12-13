import { Box } from './Box';
import styles from './styles.module.scss'
import Vscode from '../../assets/SVGS/VsCodeSoft'

interface Props extends React.HTMLAttributes<HTMLDivElement>{}

export const Hello = ({ ...rest}:Props) => {

    return(
      <section className={styles.container} {...rest}>
        <h2 className={styles.subtitle}>Hello!!👋 I’m {"\n"}
          <strong>Jefferson charlles</strong>
        </h2>
        <div className={styles.container_about_stacks}>
          <div className={styles.box} >
            <Box />
            <Box />
            <Box />
          </div>
          <Vscode />
        </div>
      </section>
    );
}
