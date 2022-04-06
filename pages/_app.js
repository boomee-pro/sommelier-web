import { Provider } from "react-redux";
import store from "redux/store";
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}
