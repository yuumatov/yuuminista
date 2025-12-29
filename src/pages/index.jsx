import { Head } from "minista"

export default function () {
  return (
    <>
      <Head>
        <title>Pages list</title>
      </Head>

      <div className="pages-list">
        <h1>Pages</h1>
        <ul>
          <li><a href="ads-add-error">Добавление заявки АДС с ошибкой</a></li>
          <li><a href="ads-add">Добавление заявки АДС</a></li>
          <li><a href="ads">Заявки АДС</a></li>
          <li><a href="auth-error">Авторизация c ошибкой</a></li>
          <li><a href="auth">Авторизация</a></li>
          <li><a href="services">Услуги</a></li>
        </ul>
      </div>
    </>
  )
}
