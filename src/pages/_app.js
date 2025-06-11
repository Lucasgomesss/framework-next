import "@/styles/globals.css";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

export default function App({ Component, pageProps }) {
  return <>
    <Menu />
    <Component {...pageProps} />
    <Footer />
  </>
}