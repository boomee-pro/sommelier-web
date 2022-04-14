import Navbar from './navbar';
import Footer from './footer';

import Cart from '../Cart/cart';

const Layout = ({noCartIcon, children, wines}) => {


  return (
    <>
      <div className="background" />
        <Navbar />
        {!noCartIcon && <Cart />}
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <main style={{flex: 1}}>{children}</main>
        <Footer />
      </div>


    </>
  )

}


export default Layout;