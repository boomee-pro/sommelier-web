import 'styles/globals.css';
import { ToastContainer } from 'react-toastify';
import CookieConsent from 'react-cookie-consent';

import { CartProvider } from "contexts/CartContext";
import { AuthProvider } from "contexts/AuthContext";

import Layout from 'components/Layout/layout';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />

        <CookieConsent
          location="bottom"
          buttonText="J'accepte"
          cookieName="wineCookie"
          style={{ background: "#fff", color: "#000", boxShadow: "0 -5px 5px -5px #333" }}
          buttonStyle={{ color: "#4e503b", fontSize: "17px" }}
          expires={150}
        >
          Ce site utilise des cookies à des fins fonctionnels
        </CookieConsent>
        
        
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
