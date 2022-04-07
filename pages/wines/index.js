import Head from "next/head"

import styles from "styles/wines.module.scss";

import Card from "components/card"
import Layout from 'components/Layout/layout';


export async function getStaticProps() {
  const res = await fetch(`http://localhost:3030/api/wines`)
  const wines = await res.json();

  if (!res.ok) {
      throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return { props: { wines } }
}


const Wines = ({ wines }) => {
  return (
    <div>
      <Head>
        <title>Nos vins</title>
        <meta name="description" content="Liste des vins" />
      </Head>

      <div className={styles.wines__container}>
        {wines.map((wine) => 
          <Card key={wine.id} wine={wine}/>
        )}
      </div>
    </div>
  )
}

Wines.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Wines;