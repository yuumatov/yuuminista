import { Head } from "minista"
import Field from "../components/Field"
import Textarea from "../components/Textarea"

export default function () {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>

      <Field id="user-id" name="user-id" placeholder="ID" beforeIcon="user" />

      <br />

      <Field
        id="user-password"
        name="user-password"
        type="password"
        placeholder="Пароль"
        beforeIcon="lock"
        button={true}
      />

      <br />

      <Field
        id="user-password-error"
        name="user-password-error"
        type="password"
        placeholder="Пароль"
        beforeIcon="lock"
        button={true}
        error="Неправильный пароль"
      />

      <br />

      <Textarea id="message" name="message" placeholder="Текст заявки" />

      <br />

      <Textarea
        id="message-error"
        name="message-error"
        placeholder="Текст заявки"
        error="Не введен текст заявки"
      />
    </>
  )
}
