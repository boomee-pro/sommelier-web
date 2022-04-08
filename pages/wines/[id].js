import { useRouter } from "next/router";
import Head from "next/head";

import styles from "styles/wine.module.scss";

import { useCart } from "contexts/CartContext";

import Layout from "components/Layout/layout";

const WinePage = () => {
  const router = useRouter()
  const { id } = router.query

  const {addToCart} = useCart();

  const wine = {
    id: 0,
    name: "Montrachet Grand Cru",
    price: 4205,
    origin: "France",
    domain: "Domaine Leflaive",
    img: "/wines/grand-cru.png",
    flag: "/flags/FR.svg"
  }

  return (
    <>
      <Head>
        <title>Wine #{id}</title>
        <meta name="description" content="Wine " />
      </Head>
      
      <div className={styles.wine__container}>
        <div className={styles.image__container}>
          <div className={styles.image}>
            <img src={wine.img} alt="" />
          </div>
        </div>

        <div className={styles.wine__details}>
          <h3>{wine.domain}</h3>
          <h1>{wine.name}<span>In Stock</span></h1>
          <p>Beautiful robe, heavy deep with beautiful garnet reflections. The nose is concentrated, powerful on notes of red fruits (strawberry - cherry) very fresh and very ripe. The mouth is full, unctuous with very melted tannins. One finds the freshness of the red fruits marries well with perfectly dosed wood. A treat of balance and length for this delicate and powerful wine. A wine of beautiful future.</p>
          <h2>{wine.price} €</h2>
          <button onClick={() => addToCart(wine)}>Ajouter au panier</button>
        </div>
      </div>

    </>
  )
}

WinePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default WinePage;