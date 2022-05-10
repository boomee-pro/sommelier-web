import Head from "next/head";
import { BiErrorCircle } from "react-icons/bi";

const CheckoutError =  ({session}) => {
  if(session === undefined) return <p>Une erreur s&apos;est produite !</p>

  return (
    <>
    <Head>
      <title>Erreur Paiement</title>
      <meta name="errorpage" content="Page de d'erreur" />
    </Head>

    <div style={styles}>
      <BiErrorCircle size={80} />
      <h2>Le paiement a été annulé !</h2>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    return {
      props: {
        session,
      }
    }
  } catch(err) {
    return {
      props: {}
    }
  }



}

export default CheckoutError;