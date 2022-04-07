import styles from 'styles/cart.module.scss';

import { useCart } from 'contexts/CartContext';

const CartWine = ({wine}) => {

  const {incrementQuantity, decrementQuantity} = useCart();

  return (
      <div className={styles.wine__container}>
        <img src={wine.img} alt="main picture" />

        <div className={styles.wine__details}>
          <h1>{wine.name}</h1>
        
          <button>{wine.price} €</button>
        
          <div className={styles.details__quantity}>
            <button onClick={() => decrementQuantity(wine.id)}>-</button>

            <p>{wine.quantity}</p>
            
            <button onClick={() => incrementQuantity(wine.id)}>+</button>
          </div>
        
        </div>

      </div>
  )
}

export default CartWine;