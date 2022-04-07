import styles from 'styles/layout.module.scss';
import Link from 'next/link';
import { useRouter } from "next/router";
import classNames from 'classnames';
import { useAuth } from 'contexts/AuthContext';

import { BiMenu } from "react-icons/bi";

export default function Navbar() {

  const {user} = useAuth();

  const router = useRouter();

  return (
    <header className={styles.nav}>
      <div className={styles.bg}></div>
      <div className={styles.menu}>
        <BiMenu />
      </div>
      <div className={styles.logo}>Sommelier</div>
      <div className={styles.items}>
        <ul>
          <li className={classNames(router.pathname === "/" && styles.activeLink)}><Link href="/">Accueil</Link></li>
          <li className={classNames(router.pathname === "/wines" && styles.activeLink)}><Link href="/wines">Vins</Link></li>
          <li className={classNames(router.pathname === "/shop" && styles.activeLink)}>Notre boutique</li>
          <li className={classNames(router.pathname === "/story" && styles.activeLink)}>Notre histoire</li>
          <li className={styles.spacer}></li>
          <li>
            <Link href="/sign-in">
              Se connecter
            </Link>
          </li>
          <li className={styles.logoSvg}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg></li>
        </ul>
      </div>
    </header>
  )
}