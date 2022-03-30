import Image from "next/image"

import styles from "../styles/card.module.scss"

export default function Card({ wine }) {
  return (
    <div className={styles.card}>
      <Image src={wine.img} alt="Wine" width={349} height={349}/>
      <div>Domaine {wine.domain}</div>
      <p>{wine.name}</p>
      <button>{wine.price}€</button>
    </div>
  )
}