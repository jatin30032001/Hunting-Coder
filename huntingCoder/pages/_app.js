import '../styles/globals.css'
import Navbar from '../Components/Navbar'
// import styles from "../styles/Home.module.css"
function MyApp({ Component, pageProps }) {

  return <>
  <Navbar/>
  <Component {...pageProps} />
  </> 
}

export default MyApp
