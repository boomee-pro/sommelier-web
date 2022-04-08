import Head from "next/head";

import styles from "styles/checkout.module.scss";

import Layout from "components/Layout/layout";
import WineDetails from "components/Checkout/wineDetails";

import { useCart } from "contexts/CartContext";


import withAuth from "utils/withAuth";


const Checkout = () => {

  const {cart, getTotalPrice} = useCart();

  if(cart.length === 0) return <div className={styles.checkout__container}><p>Vous n&apos;avez pas de panier</p></div>

  return (
    <>
    <Head>
      <title>Panier</title>
      <meta name="description" content="Liste des vins" />
    </Head>

    <div className={styles.checkout__container}>
      <h2>Votre commande</h2>

      <div className={styles.checkout__subcontainer}>
        <div className={styles.checkout__details}>
          <div className={styles.details__title}>
            <p>Produit</p>
            <p>Quantité</p>
            <p>Prix</p>
            <p>Total</p>
          </div>
          
          <div className={styles.checkout__content}>
            {cart.map((item) => <WineDetails wine={item} key={item.id}/>)}
          </div>
        </div>

        <div className={styles.details__summary}>
          <div className={styles.details__title}>
            Résumé
          </div>

          <div className={styles.checkout__content}>
            <div className={styles.content__data}>
              <h3>Total<span>{getTotalPrice()} €</span></h3>
              <button>Procéder au paiement</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
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