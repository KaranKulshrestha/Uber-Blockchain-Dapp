import '@/styles/globals.css'
import { UberProvider } from '@/context/uberContext'

export default function App({ Component, pageProps }) {
  return <UberProvider><Component {...pageProps} /></UberProvider>
}
