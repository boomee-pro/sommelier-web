import { useState } from "react";
import { useCart } from "contexts/CartContext";

import Layout from "components/Layout/layout";
import BreadCrumbs from "components/breadcrumbs";

import styles from "styles/order.module.scss";

import { motion, AnimatePresence } from "framer-motion";

const Order = () => {

  const [current, setCurrent] = useState(0);

  const { cart } = useCart();


  return (
    <div className={styles.order__container}>
      <BreadCrumbs items={[
        {title: "Accueil", destination: "/"},
        {title: "Validation panier", destination: "/checkout"},
        {title: "Validation commande", active:true}
      ]} />

      <div className={styles.order__grid}>
        <div className={styles.order__forms}>
          <h2>Détails de facturation</h2>

          <h4>Informations de contact</h4>

          <div className={styles.form__split}>
            <div className={styles.form__input}>
              <input type="text" placeholder='Prénom*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Nom*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='N Téléphone*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Email*'/>
            </div>
          </div>

          <h4>Adresse</h4>

          <div className={styles.form__split}>
            <div className={styles.form__input}>
              <input type="text" placeholder='Adresse*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Numéro/Boîte*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Pays*' value="Belgique" disabled />
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Ville*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Province*'/>
            </div>

            <div className={styles.form__input}>
              <input type="text" placeholder='Code postal*'/>
            </div>
          </div>
        </div>

        <div className={styles.order__settings}>
          <div className={styles.order__box}>
            <div className={styles.order__box__content}>
              <h3>Votre commande ({cart.length})</h3>
              <hr />
              <div className={styles.order__details}>
                <h4>Résumé</h4>
                <p>Sous-total<span>8,050$</span></p>
                <hr />
                <p>Livraison<span>INCLUS</span></p>
                <hr />
                <h5>Total<span>12,776$</span></h5>
              </div>
            </div>
          </div>
          


          <div className={styles.order__box}>
            <div className={styles.order__box__content}>
              <ul className={styles.order__payment__list}>
                
                <li onClick={() => setCurrent(0)}>
                  <input type="radio" name="payment_type" id="bancontact"/>
                  <label htmlFor="bancontact">Bancontact</label>
                  <AnimatePresence initial={false}>
                  {current === 0 && <motion.div
                  key="answer"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  exit={{ opacity: 0 }}
                  >
                  <div className={styles.payment__box}>
                    <div className={styles.payment__data}>
                      <span>Vous allez être redirigé vers Bancontact</span>
                    </div>                  
                  </div>
                  </motion.div>
                  }
                  </AnimatePresence>
                </li>
                <li onClick={() => setCurrent(1)}>

                  <input type="radio" name="payment_type" id="stripe" defaultChecked />
                  <label htmlFor="stripe">Paiement par carte (Stripe)</label>
                <AnimatePresence initial={false}>

                  {current === 1 && <motion.div
                  key="answer"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                    },
                  }}
                  exit={{ opacity: 0 }}
                  >
                  <div className={styles.payment__box}>
                    <div className={styles.payment__data}>
                      <span>Vous allez être redirigé vers Stripe</span>
                    </div>                  
                  </div>
                  </motion.div>}
                  </AnimatePresence>

                </li>
              </ul>
            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

Order.getLayout = function getLayout(page) {
  return (
    <Layout noCartIcon>
      {page}
    </Layout>
  )
}



export default Order;