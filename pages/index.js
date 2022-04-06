import Head from 'next/head'
import Layout from '../components/Layout/layout'
import styles from '../styles/home.module.scss'
import Image from 'next/image';

import Card from '../components/card';

export default function Home() {

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
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>

        <section className={styles.sectionImg}>
          <img className={styles.image} src="/header.png" alt=""/>
          <h3>Lorem Ipsum dolor sit amet</h3>
        </section>

        <section className={styles.sectionFavorite}>
          <div className={styles.background}></div>
          <h1>Vos préférés</h1>
          <div className={styles.favoriteWineContainer}>
          {wines.map((wine) => 
            <Card key={wine.id} wine={wine}/>
          )}
          </div>
          <button>Voir tous les vins</button>
        </section>

        <section>

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
