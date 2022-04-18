import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BiMenu, BiX} from "react-icons/bi";


const NAVIGATIONS = [
  {label: "Accueil", href:"/"},
  {label: "Vins", href:"/wines"},
  {label: "Notre histoire", href:"/story"},
  {},
  {label: "Se connecter", href:"/sign-in"}
]

const Header = () => {

  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setSticky(window.scrollY > 25));
  }, []);


  return (
    <header className=
      {`sticky top-0 bg-white p-1 transition-all ease-linear duration-30 z-10
      ${sticky ? "py-2.5 shadow-custom" : "py-6"}
      `}>
        
        <div className="absolute overflow-hidden top-0 left-0 w-full h-full -z-10">
          <div className="absolute w-full h-full left-1/4 bg-header bg-center bg-no-repeat bg-cover opacity-10"/>
          </div>
        
        <div className="flex flex-wrap items-center justify-between px-10 font-semibold mx-auto">
          <div className="text-gold-main text-3xl uppercase"><Link href="/">Sommelier</Link></div>

          <div onClick={() => setExpanded(true)} className="cursor-pointer text-gold-main md:hidden">
            <BiMenu size={30} />
          </div>

          <div className={`
            ${expanded ? "absolute top-0 left-0 w-screen bg-white h-screen flex items-center justify-center max-w-full" : "hidden md:block"}`}>
            <ul className={`flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-14 md:text-sm md:font-medium`}>
              {NAVIGATIONS.map((item,i) => 
                <li key={i}
                    className={`${!item.label && "hidden"} block text-gold-main text-center md:bg-transparent md:p-0 text-xl md:relative`} 
                >
                  {item.label && <Link href={item.href}>
                    <a className={`
                      ${router.pathname === item.href ? 
                        "md:after:scale-x-100" :
                        "md:hover:after:origin-bottom-left md:hover:after:scale-x-100"
                      }
                      md:after:absolute md:after:content-[''] 
                      md:after:w-full md:after:h-0.5 md:after:-bottom-0.5 md:after:left-0 
                    md:after:bg-gold-main md:after:scale-x-0 md:after:origin-bottom-right 
                      md:after:transition-transform md:after:duration-300`} 
                    >
                      {item.label}
                    </a></Link>}
                </li>
              )}
            </ul>
          </div>

          {expanded && 
          <div onClick={() => setExpanded(false)} className="cursor-pointer text-gold-main absolute right-10 top-7">
            <BiX size={30} />
          </div>}

        </div>

    </header>
  )

}


export default Header;