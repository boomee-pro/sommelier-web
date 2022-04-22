import Navbar from './navbar';
import Footer from './footer';

import Cart from '../Cart/cart';

const Layout = ({noCartIcon, noLayout, children}) => {
  return (
    <>
      <div className="background"/>
      {!noLayout && <Navbar />}
      {(!noCartIcon || !noLayout) && <Cart />}
      <main style={{position: "relative"}}>
        <div style={{display: "flex", flexDirection: "column", minHeight: "87vh"}}>
          <main style={{flex: 1}}>{children}</main>
          {!noLayout && <Footer />}
        </div>
      </main>
    </>
  )

}


export default Layout;