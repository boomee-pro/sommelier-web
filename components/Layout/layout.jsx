import Navbar from './navbar';
import Cart from '../Cart/cart';
import Footer from './footer';

export default function Layout ({children}) {

export default function Layout({ children }) {
  return (
    <>
      <div className="background"></div>
      <Navbar />
      <Cart />
      <main>{children}</main>
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
