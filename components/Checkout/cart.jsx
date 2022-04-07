import Link from "next/link";
import { useState } from "react";

import classnames from "classnames";
import styles from 'styles/layout.module.scss';

import CartWine from "./cartWine";
import { useCart } from "contexts/CartContext";

// ICONS
import { BiCart } from "react-icons/bi";

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
          <div onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg></div>
          <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='currentColor'><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></div>
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