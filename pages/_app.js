import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const categories = pageProps?.dataJson?.categories || [];
  const products = pageProps?.dataJson?.products || [];
  const getLayout = Component.getLayout || ( page => page )
  const ComponentPage = <Component {...pageProps} />
  return (
    <main className='h-screen overflow-x-hidden'>
        <AuthProvider>
          {getLayout(ComponentPage, products, categories)}
        </AuthProvider>
    </main>
  )
}

export default MyApp
