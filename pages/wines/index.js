import Head from "next/head"
import Card from "../../components/card"
import styles from "../../styles/wines.module.scss"



export default function Wines() {
  const wines = [
    {
      id: 0,
      name: "Montrachet Grand Cru",
      price: 4205,
      origin: "France",
      domain: "Leflaive",
      img: "/wines/grand-cru.png",
      flag: "/flags/FR.svg"
    },
    {
      id: 1,
      name: "Roumier Musigny Grand Cru",
      price: 4205,
      origin: "France",
      domain: "Georges & Christophe",
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
    {
      id: 3,
      name: "Romanée-Conti Grand Cru",
      price: 4205,
      origin: "France",
      domain: "de la Romanée-Conti",
      img: "/wines/romanee.png",
      flag: "/flags/FR.svg"
    },
  ]  

  return (
    <div>
      <Head>
        <title>Nos vins</title>
        <meta name="description" content="Liste des vins" />
      </Head>

      <div className={styles.container}>
      {wines.map((wine) => 
        <Card key={wine.id} wine={wine}/>
      )}
      </div>


    </div>
  )
}