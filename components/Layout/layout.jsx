import Navbar from './navbar';
import Cart from './cart';
// import Footer from './footer';

export default function Layout ({children}) {

  return (
    <>
      <Navbar />
      <Cart />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )

}
