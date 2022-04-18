import Image from "next/image";
import Link from "next/link";

import styles from "styles/navbar.module.scss";

import { useEffect } from "react";

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector("#navbar");
    if(!navbar) return;
    if(window.scrollY > 20) {
      navbar.classList.add("py-2");
    } else {
      navbar.classList.remove("py-2");
    }
  }

  return (
    <header id="navbar" className="sticky top-0 bg-white p-1 py-6 overflow-hidden transition-all ease-linear delay-30 z-10">
        <div className="-z-10 absolute top-0 w-full h-full left-1/4 bg-header bg-center bg-no-repeat bg-cover opacity-10"/>
        
        <div className="flex flex-wrap items-center justify-between px-20 mx-auto">
          <div className="text-gold-main text-2xl uppercase"><Link href="/" >Sommelier</Link></div>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium">

              <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"><Link href="/">Accueil</Link></li>
              <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"><Link href="/">Accueil</Link></li>
              <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"><Link href="/">Accueil</Link></li>

            
            </ul>
          </div>



        </div>

    </header>
  )

}


export default Header;