import Navbar from './navbar';
import Footer from './footer';

import Cart from '../Cart/cart';

const Layout = ({noCartIcon, children}) => {


  return (
    <>
      <Navbar />
      {!noCartIcon && <Cart />}
      <main style={{position: "relative"}}>
        <div style={{display: "flex", flexDirection: "column", minHeight: "90vh"}}>
          <main style={{flex: 1}}>{children}</main>
          <Footer />
        </div>
      </main>
    </>
  )

}


export default Layout;