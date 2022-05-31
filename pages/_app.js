import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
