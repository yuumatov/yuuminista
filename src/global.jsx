import { Head } from "minista"

import "./styles"

export default function ({ url, title, children }) {
  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>{title}</title>
        <link
          rel="icon"
          href="src/assets/favicons/favicon.ico"
          type="image/x-icon"
        ></link>
        <script src="/src/main.js" type="module" />
      </Head>
      <body>
        <div className="container">{children}</div>
      </body>
    </>
  )
}
