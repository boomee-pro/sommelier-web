/* eslint-disable @next/next/no-img-element */
import styles from "styles/card.module.scss";

import { useCart } from "contexts/CartContext";

// ICONS
import { BiShow } from "react-icons/bi";

const Card = ({ wine }) => {

  const {addToCart} = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.image}>

        <div className={styles.hideOverflow}>
          <div className={styles.background}></div>
        </div>

        <img className={styles.wineImg} src={wine.img} alt="" />
        <img className={styles.flag} src={wine.flag} alt="" />

      </div>

      <h2>{wine.domain}</h2>
      <p>{wine.name}</p>
      <h3>{wine.price} €</h3>
      
      <div className={styles.buttons}>
        <button onClick={() => addToCart(wine)}>Ajouter</button>
        <a href={`/wine/${wine.id}`}>
          <BiShow size={24} />
        </a>
      </div>
    </div>
  )
}

export default Card;