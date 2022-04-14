import Layout from "components/Layout/layout";

import BreadCrumbs from "components/breadcrumbs";

import styles from "styles/order.module.scss";

const Order = () => {

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