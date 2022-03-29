import '../styles/globals.css';
// LOCAL IMPORT
import Layout from '../components/Layout/layout.jsx';

export default function MyApp({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
