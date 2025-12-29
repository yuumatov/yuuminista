import { Head } from "minista"

import "./styles"

export default function ({ url, title, children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{title}</title>
        <script src="/src/main.js" type="module" />
      </Head>
      <div className="container">{children}</div>
    </>
  )
}
