import 'styles/globals.css';
import App from 'next/app';
import { Toaster } from "react-hot-toast";
import CookieConsent from 'react-cookie-consent';

import { CartProvider } from "contexts/CartContext";
import { AuthProvider, getUser } from "contexts/AuthContext";

import Layout from 'components/Layout/layout';

const noLayout = ["/sign-in", "/sign-up"];
const noCart = ["/success/[id]", "/checkout"];

const MyApp = ({ Component, pageProps, router, auth }) => {
  
  return (
    <AuthProvider authData={auth}>
      <CartProvider>
        <Toaster />

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
        
        
        <Layout noLayout={noLayout.includes(router.pathname)} noCartIcon={noCart.includes(router.pathname)}>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const auth = await getUser(appContext.ctx);
  return {...appProps, auth:auth}
}

export default MyApp;