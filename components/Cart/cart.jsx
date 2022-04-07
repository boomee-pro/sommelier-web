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
      <div className={styles.cart} onClick={() => setOpen(true)}>
        <BiCart size={24} />
        <span className={styles.cartNumber}>{getItemsCount()}</span>
      </div>

      <div className={classnames(styles.cartSlide, open && styles.active)}>
        <div className={styles.background}></div>

        <div className={styles.top}>
          <div onClick={() => setOpen(false)}>
            <BiArrowBack size={24} />
          </div>
          <div>
            <BiCart size={24} />
          </div>
        </div>

        <h3>Votre commande</h3>

        <div className={styles.cartContent}>
          {cart.map((item) => <CartWine wine={item} key={item.id} />)}
        </div>

        <h2>Prix total<span>{getTotalPrice()} €</span></h2>

        <button><Link href="/checkout">Commander</Link></button>
      </div>
    </>
  )
}

export default Cart;