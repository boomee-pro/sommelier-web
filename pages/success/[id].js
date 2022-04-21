import { Container } from "react-grid-system";

import styles from "styles/success.module.scss"

import { BiCheckCircle, BiArrowBack } from "react-icons/bi";

const CheckoutSuccess =  ({session, customer}) => {
  if(session === undefined) return <p>Une erreur s&apos;est produite !</p>

  return (
    <Container>
      <div className={styles.success}>
        <BiCheckCircle  size={80}/>

        <h2>Commande réussie !</h2>
        <p>Merci pour votre achat, vous recevrez votre commande d&apos;ici quelques jours!</p>

        <button>Mes commandes</button>
      </div>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    const customer = await stripe.customers.retrieve(session.customer);
    return {
      props: {
        session,
        customer
      }
    }
  } catch(err) {
    return {
      props: {}
    }
  }



}

export default CheckoutSuccess;