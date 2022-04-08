import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';

import styles from 'styles/layout.module.scss';
import classNames from 'classnames';

import { useAuth } from 'contexts/AuthContext';

// ICONS
import { BiMenu, BiSearch, BiDoorOpen } from "react-icons/bi";

const Navbar = () => {

  const [isExpanded, setExpanded] = useState(false);

  const test = () => {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  }

  const {user, logout} = useAuth();
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.bg}></div>
      
      <div className={styles.menu} onClick={test}>
        <BiMenu />
      </div>
      <div className={styles.logo}>Sommelier</div>

      <div className={classNames(styles.items, isExpanded && styles.expanded)}>
        <ul>
          <li className={classNames(router.pathname === "/" && styles.activeLink)}><Link href="/">Accueil</Link></li>
          <li className={classNames(router.pathname === "/wines" && styles.activeLink)}><Link href="/wines">Vins</Link></li>
          <li className={classNames(router.pathname === "/shop" && styles.activeLink)}>Notre boutique</li>
          <li className={classNames(router.pathname === "/story" && styles.activeLink)}>Notre histoire</li>
          <li className={styles.spacer}></li>
          <li>
            {(user.connected && user.details.length !== 0) ? 
            <Link href="/profile">{user.details.surname}</Link> : 
            <Link href="/sign-in">Se connecter</Link>}
          </li>
          <div className={styles.icons}>
            <li className={styles.logoSvg}>{isExpanded ? "Rechercher" : <BiSearch size={24} />}</li>
            <li aria-label="Tooltip message" className="cooltipz--top">test</li>
            {user.connected && user.details.length !== 0 && <li className={styles.logoSvg} onClick={() => logout()}><BiDoorOpen size={24} /></li>}
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;