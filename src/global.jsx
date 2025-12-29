import { Head } from "minista"

import "./styles"

export default function ({ url, title, children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{title}</title>
        <script type="module" src="/src/main.js" />
      </Head>
      <body>
        <div className="container">{children}</div>
      </body>
    </>
  )
}
