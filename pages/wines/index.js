import Head from "next/head";

import { Container, Row, Col } from 'react-grid-system';

import Card from "components/card"
import BreadCrumbs from "components/breadcrumbs";



export async function getStaticProps() {
  // const res = await fetch(`http://localhost:3030/api/wines`)
  // const wines = await res.json();

  // if (!res.ok) {
  //     throw new Error(`Failed to fetch posts, received status ${res.status}`)
  // }

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

  return { props: { wines } }
}


const Wines = ({ wines }) => {
  return (
    <>
      <Head>
        <title>Nos vins</title>
        <meta name="description" content="Liste des vins" />
      </Head>
      <Container>

          <BreadCrumbs items={[
            {title: "Accueil", destination: "/"},
            {title: "Liste des vins", active: true,}
          ]} />
          
          <Row style={{rowGap: "5em"}}>
            {wines.map((wine) => 
              <Col xs={12} md={4} lg={3} key={wine.id}><Card wine={wine}/></Col>
            )}
          </Row>

        </Container>

    </>
  )
}

export default Wines;