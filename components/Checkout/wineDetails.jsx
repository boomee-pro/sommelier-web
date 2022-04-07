import { useCart } from 'contexts/CartContext';
import styles from 'styles/checkout.module.scss';


export default function WineDetails({wine}) {

	const {incrementQuantity, decrementQuantity} = useCart();

  return (
    <div className={styles.wineCheckoutProduct}>
        <div className={styles.productInfo}>
            <img src={wine.img} alt="" />
            <div className={styles.text}>
                <p>{wine.domain}</p>
                <p>{wine.name}</p>
            </div>
        </div>
        <div className={styles.quantity}>
            <div className={styles.quantityStyle}>
                <button onClick={() => decrementQuantity(wine.id)}>-</button>
                <p>{wine.quantity}</p>
                <button onClick={() => incrementQuantity(wine.id)}>+</button>
            </div>

        </div>

        <p>{wine.price} €</p>
        <p>{wine.price*wine.quantity} €</p>
    </div>
  )
}
