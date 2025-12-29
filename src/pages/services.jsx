import { Head } from "minista"
import Toggle from "../components/Toggle"
import CardService from "../components/CardService"

export default function () {
  const links = [
    {
      link: "services",
      text: "Услуги",
      isActive: true,
    },
    {
      link: "ads",
      text: "Заявки АДС",
      isActive: false,
    },
  ]

  return (
    <>
      <Head>
        <title>Услуги</title>
      </Head>

      <section className="services">
        <Toggle links={links} className="services__toggle" />

        <div className="services__wrapper">
          <CardService title="Техническое обслуживание" />
          <CardService title="Вода" />
          <CardService title="Газ" />
          <CardService title="Отопление" />
          <CardService title="Техническое обслуживание" />
          <CardService title="Вода" />
          <CardService title="Газ" />
          <CardService title="Отопление" />
          <CardService title="Техническое обслуживание" />
          <CardService title="Вода" />
          <CardService title="Газ" />
          <CardService title="Отопление" />
        </div>

        <div className="services__fixed">
          <div className="container">
            <div className="services__fixed-inner">
              <span>Общая задолженность</span>
              <div className="services__total">263 083 ₽</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
