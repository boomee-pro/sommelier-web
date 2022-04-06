import { useEffect } from "react";
import 'styles/globals.css';

import { CartProvider } from "contexts/CartContext";



export default function MyApp({ Component, pageProps }) {
  

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CartProvider>
      {getLayout(<Component {...pageProps} />)}
    </CartProvider>
  )
}
