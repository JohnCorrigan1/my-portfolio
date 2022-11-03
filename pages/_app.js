import { BrowserRouter } from 'react-router-dom'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <BrowserRouter><Component {...pageProps} /></BrowserRouter>
}

export default MyApp
