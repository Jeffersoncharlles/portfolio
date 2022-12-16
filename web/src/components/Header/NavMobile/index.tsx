import styles from './styles.module.css'

interface Props extends React.HTMLAttributes<HTMLDListElement> {
  data?: {
    title: string;
    linkUrl: string;
  }[];
  showMe?: boolean;
}


export const NavMobile = ({ data, showMe = false }:Props) => {

    return(
      <nav className={`${styles.container} ${showMe ? styles.active_mobile : ''}`}>
        <ul className={styles.navbarMobile}>
          {data?.map((item) => (
            <li key={item.title}>
              <a href={item.linkUrl} className={styles.menu_mobile_list_link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        </nav>
    );
}
