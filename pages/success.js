import Layout from "components/Layout/layout";

import styles from "styles/success.module.scss";
import { BiCheckCircle } from "react-icons/bi";

const Success = () => {
  return (
    
    <div className={styles.success__container}>

      <div className={styles.success__box}>
        <BiCheckCircle  size={80}/>
        <h2>Commande réussie</h2>
        <p>Merci pour votre achat, vous recevrez votre commande d&apos;ici quelques jours!</p>
        <button>Mes commandes</button>
      </div>

    </div>
  )
}

Success.getLayout = function getLayout(page) {
  return (
    <Layout noCartIcon>
      {page}
    </Layout>
  )
}


export default Success;