import Image from "next/image"

import styles from "../styles/card.module.scss"

export default function Card({ wine }) {
  return (
    <div className={styles.card}>
      <div className={styles.overlayWine}>
        {/* <Image className={styles.backWine} src="/grapes-drawing.png" alt="grapes" layout="fill" /> */}
        {/* <Image className={styles.wineBottle} src={wine.img} alt="Wine" layout="fill"/> */}
        {/* <Image className={styles.flag} src={wine.flag} alt="" width={50} height={32} /> */}
        
        <Image src={wine.img} className={styles.wineBottle} alt="" layout="responsive" width="100%" height="100%" />
        <Image src="/grapes-drawing.png" className={styles.backWine} alt="" layout="responsive" width="100%" height="100%"/>
        <Image src={wine.flag} className={styles.flag} alt="" width="53px" height="30px"/>
        
        {/* <img className={styles.backWine} src="/grapes-drawing.png" alt="" /> */}
        {/* <img className={styles.wineBottle} src={wine.img} alt="" /> */}
        {/* <img className={styles.flag} src={wine.flag} alt="" /> */}
      </div>
      <h2>{wine.domain}</h2>
      <p>{wine.name}</p>
      <button>{wine.price} €</button>
    </div>
  )
}