import { useCart } from "contexts/CartContext";
import styles from "styles/checkout.module.scss";

export default function WineDetails({ wine }) {
  const { incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className={styles.checkout__card}>
      <div className={styles.card__details}>
        <img src={wine.img} alt="wine's picture" />
        <div>
          <p>{wine.domain}</p>
          <p>{wine.name}</p>
        </div>
      </div>
      <div className={styles.card__quantity}>
        <div className={styles.quantity__style}>
          <button onClick={() => decrementQuantity(wine.id)}>-</button>
          <p>{wine.quantity}</p>
          <button onClick={() => incrementQuantity(wine.id)}>+</button>
        </div>
      </div>

      <p>{wine.price} €</p>
      <p>{wine.price * wine.quantity} €</p>
    </div>
  );
}
