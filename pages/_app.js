import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { categories, products } = pageProps.dataJson;
  return (
    <>
      <Header cats={categories || []} products={products || []} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
