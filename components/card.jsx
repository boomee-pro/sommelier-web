/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "styles/card.module.scss";

import { useCart } from "contexts/CartContext";

// ICONS
import { BiShow, BiLoaderCircle } from "react-icons/bi";

const Card = ({ wine }) => {

  const {addToCart} = useCart();
  const [loading, setLoading] = useState(false);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const addItem = async (wine) => {
    setLoading(true);
    await sleep(500);
    addToCart(wine);
    setLoading(false);
  }

  return (
    <div className={styles.card__container}>
      <div className={styles.card__image}>

        <div className={styles.card__overflow}>
          <div className={styles.card__background}></div>
        </div>

        <img className={styles.wine__img} src={wine.img} alt="" />
        <img className={styles.wine__flag} src={wine.flag} alt="" />

      </div>

      <h2>{wine.domain}</h2>
      <p>{wine.name}</p>
      <h3>{wine.price} €</h3>
      
      <div className={styles.card__buttons}>
        <button disabled={loading} onClick={() => addItem(wine)}>{loading ? <BiLoaderCircle size={18} className="spin"/> : "Ajouter"}</button>
        <a href={`/wines/${wine.id}`}>
          <BiShow size={24} />
        </a>
      </div>
    </div>
  )
}

export default Card;