import { useRef, useEffect } from "react";

import Head from 'next/head';
import Link from 'next/link';

import styles from 'styles/home.module.scss'


import Layout from 'components/Layout/layout';
import Card from 'components/card';

import { motion } from 'framer-motion';

export async function getStaticProps() {
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
  return { props: { wines }}
}

const Home = ({wines}) => {

  const favoritesWineAnim = useRef(null);
  const imgAnim = useRef(null);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default

      if(favoritesWineAnim.current) {
        sr().reveal(favoritesWineAnim.current.querySelectorAll("div"), {
          duration: 250,
          delay: 150,
          interval: 100,
          origin: "bottom",
          distance: "20px",
          reset: false,
        });
      }

      if(imgAnim.current) {
        sr().reveal(imgAnim.current, {
          duration: 1200,
          distance: '10px',
        })
      }
    }
    animate();
  }, []);

  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Page d'accueil" />
        <link rel="icon" href="/bx-wine.svg" />
      </Head>

      <motion.div
          initial={{ x: "-300px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: '-300px', opacity: 0 }}
        >
      <div className={styles.banner__header}>


          <div className={styles.banner__background}>
            <img src="/header.png" alt="" />
          </div>
          {/* <div className={styles.banner__content}>
            <div className={styles.banner_data}>
              <div className={styles.banner__wine__details}>
                <h1>LE VIN DU MOIS</h1>
                <h3>{wines[0].name}</h3>
              </div>
              <Card wine={wines[0]}/>
            </div>
          </div> */}


        {/* <section className={styles.banner__section}>
          <img className={styles.banner__img} src="/header.png" alt=""/>
          <h3>Lorem Ipsum dolor sit amet</h3>
        </section> */}
      </div>
      </motion.div>

      <div className={styles.container}>
        
        <section className={styles.favorites__section}>
          <div className={styles.favorites__background} />
          <h1>Vos préférés</h1>
          <div className={styles.favorites__cards} ref={favoritesWineAnim}>
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
            <div className={styles.home__images} ref={imgAnim}>
              <img src="/section/1.jpg" alt="first picture" />
              <img src="/section/2.jpg" alt="second picture"/>
              <img src="/section/3.jpg" alt="third picture"/>
            </div>
            <p>
             &quot;On ne peut avoir de culture gastronomique sans vin.&quot;
            </p>
        </section>



        {/* <section className={styles.details__section}>
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
        </section> */}
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