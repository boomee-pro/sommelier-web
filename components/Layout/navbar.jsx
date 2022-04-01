import styles from '../../styles/layout.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";
import classNames from 'classnames';

export default function Navbar() {

  const router = useRouter();

  return (
    <header className={styles.nav}>
      <div className={styles.bg}></div>
      <div className={styles.menu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>  
      </div>
      <div className={styles.logo}>Sommelier</div>
      <div className={styles.items}>
        <ul>
          <li className={classNames(router.pathname === "/" && styles.activeLink)}><Link href="/">Accueil</Link></li>
          <li className={classNames(router.pathname === "/wines" && styles.activeLink)}><Link href="/wines">Vins</Link></li>
          <li className={classNames(router.pathname === "/shop" && styles.activeLink)}>Notre boutique</li>
          <li className={classNames(router.pathname === "/story" && styles.activeLink)}>Notre histoire</li>
          <li className={styles.spacer}></li>
          <li className={styles.logoSvg}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"/></svg></li>
          <li className={styles.logoSvg}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg></li>
        </ul>
      </div>
    </header>
  )
}