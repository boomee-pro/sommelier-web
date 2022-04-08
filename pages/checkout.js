import Head from "next/head";
import { useState } from "react";

import styles from "styles/checkout.module.scss";

import Layout from "components/Layout/layout";
import WineDetails from "components/Checkout/wineDetails";

import { useCart } from "contexts/CartContext";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";


const Checkout = () => {

  const [loading, setLoading] = useState(false);

  const {cart, getTotalPrice} = useCart();


  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  const createCheckoutSession = async() => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("stripe/session", {
      items: JSON.stringify(cart)
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if(result.error) alert(result.error.message);
    setLoading(false);
  }

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
              <button disabled={loading} onClick={createCheckoutSession}>
                {loading ? "Chargement.." : "Procéder au paiement"}
              </button>
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