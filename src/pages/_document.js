import { Html, Head, Main, NextScript } from "next/document";
import Menu from "./componentes/menu.js";
import Footer from "./componentes/footer.js";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu />
        <Main />
        <NextScript />
        <Footer />

        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

      </body>
    </Html>
  );
}
