import { Head } from "minista"

export default function () {
  return (
    <>
      <Head>
        <title>Pages list</title>
      </Head>

      <main>
        <h1>Список страниц</h1>
        <ol>
          <li><a href="ads-add-error.html" target="_blank">Добавление заявки АДС с ошибкой (<b>ads-add-error</b>)</a></li>
          <li><a href="ads-add.html" target="_blank">Добавление заявки АДС (<b>ads-add</b>)</a></li>
          <li><a href="ads.html" target="_blank">Заявки АДС (<b>ads</b>)</a></li>
          <li><a href="auth-error.html" target="_blank">Авторизация c ошибкой (<b>auth-error</b>)</a></li>
          <li><a href="auth.html" target="_blank">Авторизация (<b>auth</b>)</a></li>
          <li><a href="services.html" target="_blank">Услуги (<b>services</b>)</a></li>
        </ol>
      </main>
    </>
  )
}
