import Navbar from "./navbar";
import Cart from "../Cart/cart";
import Footer from "./footer";

export default function Layout({ noCartIcon, children }) {
  return (
    <>
      <div className="background"></div>
      <Navbar />
      {!noCartIcon && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
