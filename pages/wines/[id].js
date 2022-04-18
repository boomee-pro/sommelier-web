import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import styles from "styles/wine.module.scss";
import { Container, Row, Col } from "react-grid-system";

import { useCart } from "contexts/CartContext";
import BreadCrumbs from "components/breadcrumbs";


const WinePage = () => {
  const router = useRouter()
  const { id } = router.query;

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

      <Container>
        
        <BreadCrumbs items={[
          {title: "Accueil", destination: "/"},
          {title: "Liste des vins", destination: '/wines'},
          {title: `Vin ${wine.name}`, active: true}
        ]} />

        <Row>

          <Col xs={12} md={4}>
            <div className={styles.image}>
                <Image
                  src={wine.img}
                  width={400}
                  height={400}
                  objectFit="contain"
                  alt="Image de vin"
                />
            </div>
          </Col>

          <Col xs={12} md={8}>
            <div className={styles.details}>
              <h3>{wine.domain}</h3>
              <h1>{wine.name}<span>Disponible</span></h1>
              <p>Beautiful robe, heavy deep with beautiful garnet reflections. The nose is concentrated, powerful on notes of red fruits (strawberry - cherry) very fresh and very ripe. The mouth is full, unctuous with very melted tannins. One finds the freshness of the red fruits marries well with perfectly dosed wood. A treat of balance and length for this delicate and powerful wine. A wine of beautiful future.</p>
              <h2>{wine.price} €</h2>
              <button onClick={() => addToCart(wine)}>Ajouter au panier</button>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default WinePage;