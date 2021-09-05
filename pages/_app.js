import '../styles/globals.css';
import '../public/bootstrap-grid.min.css'

import PodcastContextProvider from '../context/PodcastContextProvider';
import Header from '../parts/Layout/Header';
import Footer from '../parts/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <PodcastContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PodcastContextProvider>
  )
}

export default MyApp
