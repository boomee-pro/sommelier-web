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