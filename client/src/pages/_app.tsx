import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <Navbar/>
  <main>
    <Component {...pageProps} />
  </main>
  </>)
}
