import Link from 'next/link';
import { useRouter } from "next/router";

import styles from 'styles/layout.module.scss';
import classNames from 'classnames';

import { useAuth } from 'contexts/AuthContext';

// ICONS
import { BiMenu, BiSearch } from "react-icons/bi";

const Navbar = () => {

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
          <li><Link href="/sign-in">Se connecter</Link></li>
          <li className={styles.logoSvg}><BiSearch size={24} /></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;