import { Head } from "minista"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

import "./styles"

export default function ({ url, title, children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{title}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      {/* <Header url={url} /> */}
      {children}
      {/* <Footer /> */}
    </>
  )
}
