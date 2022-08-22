import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css'
import data from '../data/data';

function MyApp({ Component, pageProps }) {
  const { products, categories } = data
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
