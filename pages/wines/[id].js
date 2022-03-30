import { useRouter } from "next/router"
import Head from "next/head"

export default function WinePage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Wine #{id}</title>
        <meta name="description" content="Wine " />
      </Head>
      <p>{id}</p>
    </>
  )
}