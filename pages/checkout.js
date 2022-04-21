import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import styles from "styles/checkout.module.scss";

import Layout from "components/Layout/layout";
import WineDetails from "components/checkoutWine";
import BreadCrumbs from "components/breadcrumbs";


import { useCart } from "contexts/CartContext";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import { Container, Row, Col } from "react-grid-system"; 
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {

  const [loading, setLoading] = useState(false);

  const {cart, getTotalPrice} = useCart();


  const createCheckoutSession = async() => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("api/stripesession", {
      items: JSON.stringify(cart)
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if(result.error) alert(result.error.message);
    setLoading(false);
  }

  if(cart.length === 0) return <div className={styles.checkout__container}><p>Votre panier est vide !</p></div>

  return (
    <>
    <Head>
      <title>Panier</title>
      <meta name="description" content="Liste des vins" />
    </Head>

    <Container className={styles.checkout}>
      <BreadCrumbs items={[
        {title: "Accueil", destination: "/"},
        {title: "Validation panier", active: true,}
      ]} />
      <h2>Votre commande</h2>

      <Row style={{rowGap: "5em"}}>

        <Col xs={12} md={9}>
          <div className={styles.headers}>
            <Row style={{width:'100%', margin: "auto"}}>
              <Col md={6}>Produit</Col>
              <Col md={2}>Quantité</Col>
              <Col md={2}>Prix</Col>
              <Col md={2}>Total</Col>
            </Row>
          </div>
          
          <div className={styles.content}>
            {cart.map((item) => <WineDetails wine={item} key={item.id}/>)}
          </div>
        </Col>

        <Col xs={12} md={3}>
          <div className={styles.headers}>
            <p>Résumé</p>
          </div>

          <div className={styles.content}>
            <div className={styles.data}>
              <h3>Total<span>{getTotalPrice()} €</span></h3>
              {/* <Link href="/order" passHref> */}
                <button onClick={createCheckoutSession}>
                  {loading ? "Chargement.." : "Procéder au paiement"}
                  {/* Procéder au paiement */}
                </button>
              {/* </Link> */}
            </div>
          </div>
        </Col>

      </Row>



    </Container>
    </>
  )
}

export default Checkout;