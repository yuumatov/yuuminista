import { Head } from "minista"
import { Image } from "minista"
import Field from "../components/Field"
import Button from "../components/Button"

export default function () {
  return (
    <>
      <Head>
        <title>Авторизация</title>
      </Head>

      <form action="#" method="get" className="login-form">
        <Image src="/src/assets/images/logo.svg" className="login-form__img" />
        <div className="login-form__title">Авторизация</div>
        <div className="login-form__wrapper">
          <Field
            id="user-id"
            name="user-id"
            placeholder="ID"
            beforeIcon="user"
          />
          <Field
            id="user-password"
            name="user-password"
            type="password"
            placeholder="Пароль"
            beforeIcon="lock"
            button={true}
          />
          <Button type="submit" className="login-form__submit">
            Войти
          </Button>
        </div>
      </form>
    </>
  )
}
