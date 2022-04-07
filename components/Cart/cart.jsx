import Link from "next/link";
import { useState } from "react";

import classnames from "classnames";
import styles from 'styles/layout.module.scss';

import CartWine from "./cartWine";
import { useCart } from "contexts/CartContext";

// ICONS
import { BiCart, BiArrowBack } from "react-icons/bi";

const Cart = () => {
  
  const [open, setOpen] = useState(false);

  const {cart, getTotalPrice, getItemsCount} = useCart();

  return (
    <>
      <div className={styles.cart__float} onClick={() => setOpen(true)}>
        <BiCart size={24} />
        <span className={styles.float__amount}>{getItemsCount()}</span>
      </div>

      <div className={classnames(styles.cart__slider, open && styles.active)}>
        <div className={styles.slider__background} />

        <div className={styles.slider__header}>
          <div onClick={() => setOpen(false)}>
            <BiArrowBack size={24} />
          </div>
          <div>
            <BiCart size={24} />
          </div>
        </div>

        <h3>Votre commande</h3>

        <div className={styles.slider__content}>
          {cart.map((item) => <CartWine wine={item} key={item.id} />)}
        </div>

        <h2>Prix total<span>{getTotalPrice()} €</span></h2>

        <button><Link href="/checkout">Commander</Link></button>
      </div>
    </>
  )
}

export default Cart;