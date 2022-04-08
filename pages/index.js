import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home.module.scss'


import Layout from 'components/Layout/layout';
import Card from 'components/card';

import { motion } from 'framer-motion';

const Home = () => {

  const wines = [
    {
      id: 0,
      name: "Montrachet Grand Cru",
      price: 4205,
      origin: "France",
      domain: "Domaine Leflaive",
      img: "/wines/grand-cru.png",
      flag: "/flags/FR.svg"
    },
    {
      id: 1,
      name: "Roumier Musigny Grand Cru",
      price: 4205,
      origin: "France",
      domain: "Domaine Georges & Christophe",
      img: "/wines/musigny.png",
      flag: "/flags/FR.svg"
    },
    {
      id: 2,
      name: "Barolo DOCG",
      price: 4205,
      origin: "Italy",
      domain: "Bruno Giacosa Collina Rionda",
      img: "/wines/barolo.png",
      flag: "/flags/IT.svg"
    },
  ]

  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Page d'accueil" />
        <link rel="icon" href="/bx-wine.svg" />
      </Head>

      <div className={styles.container}>
        
        <motion.div
          initial={{ x: "-300px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: '-300px', opacity: 0 }}
        >
        <section className={styles.banner__section}>
          <img className={styles.banner__img} src="/header.png" alt=""/>
          <h3>Lorem Ipsum dolor sit amet</h3>
        </section>
        </motion.div>

        <section className={styles.favorites__section}>
          <div className={styles.favorites__background} />
          <h1>Vos préférés</h1>
          <div className={styles.favorites__cards}>
          {wines.map((wine) => 
            <Card key={wine.id} wine={wine}/>
          )}
          </div>
          <Link href="/wines" passHref>
            <button>Voir tous les vins</button>
          </Link>
        </section>

        <section className={styles.home__section}>
            <h1>High Quality Wine for you and your beloved ones</h1>
            <div className={styles.home__images}>
              <img src="/section/1.jpg" alt="first picture" />
              <img src="/section/2.jpg" alt="second picture"/>
              <img src="/section/3.jpg" alt="third picture"/>
            </div>
            <p>
             &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua.&quot;
            </p>
        </section>



        <section className={styles.details__section}>
          <img src="/maps.png" />
          <div className={styles.details__content}>
            <h2>Good Wine Shop&apos;s Logo</h2>
            <div>
              <p>37 boulevard Artiside</p>
              <p>Le cannet, Provence Alpes Côte Azur</p>
              <p>France, 06100</p>
            </div>

            <div className={styles.details__content__lower}>
              <p>Tel: (+33) 04.60.00.80.00</p>
              <p>Email: fr.order@goodwhineshop.com</p>
            </div>
          </div>
        </section>
      </div>




    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;