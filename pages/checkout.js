import Layout from "components/Layout/layout";
import { useCart } from "contexts/CartContext";
import styles from "styles/checkout.module.scss";

import WineDetails from "components/Checkout/wineDetails";

export default function Checkout() {

  const {cart} = useCart();

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
  