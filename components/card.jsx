import Image from "next/image"

import styles from "../styles/card.module.scss"

export default function Card({ wine }) {
  return (
    <div className={styles.card}>
      <div className={styles.wine}>
        <Image className={styles.backWine} src="/grapes-drawing.png" alt="grapes" layout="fill" />
        <Image className={styles.wineBottle} src={wine.img} alt="Wine" layout="fill"/>
        <Image className={styles.flag} src={wine.flag} alt="" width={50} height={32} />
      </div>
      <div>Domaine {wine.domain}</div>
      <p>{wine.name}</p>
      <button>{wine.price} €</button>
    </div>
  )
}