import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

import styles from 'styles/navbar.module.scss';
import classNames from 'classnames';

import { useAuth } from 'contexts/AuthContext';

// ICONS
import { BiMenu, BiSearch, BiDoorOpen, BiX } from "react-icons/bi";

const Navbar = () => {

  const [open, setOpen] = useState(false);



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector("#navbar");
    if(!navbar) return;
    window.scrollY > 20 ? navbar.classList.add(styles.sticky) : navbar.classList.remove(styles.sticky);
  }

  const {user, logout} = useAuth();
  const router = useRouter();

  return (
    <nav className={styles.nav__container} id="navbar">

      <div className={styles.nav__background} />
      
      <div className={styles.nav__content}>
        <div className={styles.nav__logo}><Link href="/">SOMMELIER</Link></div>

        <ul className={classNames(styles.nav__menu, open && styles.nav__active)}>
          <div onClick={() => setOpen(false)} className={classNames(styles.icon, styles.cancelBtn, open && styles.show)}>
            <BiX size={30}/>
          </div>

          <li className={classNames(router.pathname === "/" && styles.activeLink)}><Link href="/">Accueil</Link></li>
          <li className={classNames(router.pathname === "/wines" && styles.activeLink)}><Link href="/wines">Vins</Link></li>
          <li className={classNames(router.pathname === "/ourshop" && styles.activeLink)}><Link href="/">Notre boutique</Link></li>
          <li className={classNames(router.pathname === "/ourstory" && styles.activeLink)}><Link href="/">Notre histoire</Link></li>
          <li className={styles.spacer}></li>
          <li>
            {(user.connected && user.details.length !== 0) ? 
            <Link href="/profile">{user.details.surname}</Link> : 
            <Link href="/sign-in">Se connecter</Link>}
          </li>
          {/* <div className={styles.icons}>
            <li className={styles.logoSvg}>{open ? "Rechercher" : <BiSearch size={24} />}</li>
            {user.connected && user.details.length !== 0 && <li className={styles.logoSvg} onClick={() => logout()}><BiDoorOpen size={24} /></li>}
          </div> */}
        </ul>

        <div onClick={() => setOpen(true)} className={classNames(styles.icon, open && styles.hide)}>
          <BiMenu size={30} />
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