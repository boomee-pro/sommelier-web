import 'styles/globals.css';
import { ToastContainer } from 'react-toastify';
import { motion } from "framer-motion";

import { CartProvider } from "contexts/CartContext";
import { AuthProvider } from "contexts/AuthContext";

export default function MyApp({ Component, pageProps, router }) {
  

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />
          {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </AuthProvider>
  )
}
