import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

import styles from 'styles/layout2.module.scss';
import classNames from 'classnames';

import { useAuth } from 'contexts/AuthContext';

// ICONS
import { BiMenu, BiSearch, BiDoorOpen, BiX } from "react-icons/bi";

const Navbar = () => {

  const [isExpanded, setExpanded] = useState(false);



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector("#navbar");
    const navTop = navbar.offsetTop;
    console.log(navTop);
    if(window.scrollY > 0) {
      navbar.classList.add(styles.sticky);
    } else {
      navbar.classList.remove(styles.sticky);
    }
        
  }

  const test = () => {
    setExpanded(!isExpanded);
  }

  const {user, logout} = useAuth();
  const router = useRouter();

  return (
    <nav className={styles.nav__container} id="navbar">

      {/* <div className={styles.nav__background} /> */}
      
      <div className={styles.nav__content}>
        <div className={styles.nav__logo}><Link href="/">SOMMELIER</Link></div>

        <ul className={styles.nav__menu}>
          <div className={classNames(styles.icon, styles.cancelBtn)}>
            <BiX size={20}/>
          </div>

          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/wines">Vins</Link></li>
          <li><Link href="/">Notre boutique</Link></li>
          <li><Link href="/">Notre histoire</Link></li>
          <li className={styles.spacer}></li>
          <li>
            {(user.connected && user.details.length !== 0) ? 
            <Link href="/profile">{user.details.surname}</Link> : 
            <Link href="/sign-in">Se connecter</Link>}
          </li>
        </ul>

        <div className={classNames(styles.icon, styles.menuBtn)}>
          <BiMenu size={20} />
        </div>

      </div>

      {/* <div className={styles.menu} onClick={test}>
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
            {user.connected && user.details.length !== 0 && <li className={styles.logoSvg} onClick={() => logout()}><BiDoorOpen size={24} /></li>}
          </div>
        </ul>
      </div> */}
    </nav>
  )
}

export default Navbar;