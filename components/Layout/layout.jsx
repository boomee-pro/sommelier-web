import Navbar from './navbar';
import Footer from './footer';

import Cart from '../Cart/cart';

const Layout = ({noCartIcon, children}) => {

  return (
    <>
      <div className="background"></div>
      <Navbar />
      {!noCartIcon && <Cart />}
      <main>{children}</main>
      <Footer />
    </>
  )

}

export default Layout;