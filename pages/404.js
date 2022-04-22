import Head from "next/head";

import { BiErrorCircle } from "react-icons/bi";

const styles = {
  color: "var(--gold-main)",
  textAlign: "center",
  marginTop: "50px",
}

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Erreur 404</title>
        <meta name="errorpage" content="Page de d'erreur" />
      </Head>

      <div style={styles}>
        <BiErrorCircle size={80} />
        <h2>Erreur, cette page n&apos;existe pas !</h2>
      </div>

    </>
  )
}

export default Custom404;