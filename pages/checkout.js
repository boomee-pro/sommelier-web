import styles from "styles/checkout.module.scss";

import Layout from "components/Layout/layout";
import WineDetails from "components/Checkout/wineDetails";

import { useCart } from "contexts/CartContext";


import withAuth from "utils/withAuth";


const Checkout = () => {

  const {cart, getTotalPrice} = useCart();

  if(cart.length === 0) return <div className={styles.container}><p>Vous n&apos;avez pas de panier</p></div>

  return (
    <div className={styles.container}>
      <h2>Votre commande</h2>

      <div className={styles.checkout}>
        <div className={styles.details}>
          <div className={styles.title}>
            <p>Produit</p>
            <p>Quantité</p>
            <p>Prix</p>
            <p>Total</p>
          </div>
          
          <div className={styles.content}>
            {cart.map((item) => <WineDetails wine={item} key={item.id}/>)}
          </div>
        </div>

        <div className={styles.summary}>
          <div className={styles.title}>
            Résumé
          </div>

          <div className={styles.content}>
            <div className={styles.data}>
              <h3>Total<span>{getTotalPrice()} €</span></h3>
              <button>Procéder au paiement</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

Checkout.getLayout = function getLayout(page) {
  return (
    <Layout noCartIcon={true}>
      {page}
    </Layout>
  )
}
 
export default Checkout;