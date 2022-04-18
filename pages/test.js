import Header from "components/Layout/Header"

const test = () => {
  return (
    <div>
      <Header/>
      <main className="relative h-screen bg-yellow-50">
        <div className="h-56 w-full bg-red-300 text-center">toto</div>

      </main>
    </div>
  )
}

export default test;