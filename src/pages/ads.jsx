import { Head } from "minista"
import Toggle from "../components/Toggle"
import CardRequest from "../components/CardRequest"
import BtnPlus from "../components/BtnPlus"

export default function () {
  const links = [
    {
      link: "services",
      text: "Услуги",
    },
    {
      link: "ads",
      text: "Заявки АДС",
      isActive: true,
    },
  ]

  return (
    <>
      <Head>
        <title>Заявки АДС</title>
      </Head>

      <section className="services">
        <Toggle links={links} className="services__toggle" />

        <div className="services__wrap">
          <CardRequest type="accent" />
          <CardRequest />
          <CardRequest type="completed" />
        </div>

        <div className="services__btn-fixed">
          <BtnPlus />
        </div>
      </section>
    </>
  )
}
