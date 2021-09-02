import '../styles/globals.css';
import '../public/bootstrap-grid.min.css'

import Header from '../parts/Layout/Header';
import Footer from '../parts/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
