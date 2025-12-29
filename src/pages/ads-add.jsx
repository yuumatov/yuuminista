import { Head } from "minista"
import Topbar from "../components/Topbar"
import Select from "../components/Select"
import Tag from "../components/Tag"
import Textarea from "../components/Textarea"
import Button from "../components/Button"

export default function () {
  const options = [
    {
      label: "Хранение различных типов обращений:",
      items: [
        {
          value: "emergency",
          label: "Авария",
        },
        {
          value: "poor_service",
          label: "Непредоставление / некачественное предоставление услуг",
        },
        {
          value: "engineering_systems_failure",
          label:
            "Работоспособность инженерных систем (выход из строя оборудования)",
        },
        {
          value: "water_supply",
          label: "Водоснабжение (отсутствие, протечки, низкое давление)",
        },
        {
          value: "heating",
          label: "Отопление (холодные батареи, отсутствие тепла)",
        },
        {
          value: "electricity",
          label: "Электроснабжение (отключения, перепады напряжения)",
        },
      ],
    },
    {
      label: "Содержание и обслуживание помещений",
      items: [
        {
          value: "common_areas",
          label: "Содержание мест общего пользования",
        },
        {
          value: "cleaning",
          label: "Уборка подъездов и придомовой территории",
        },
        {
          value: "lighting_common",
          label: "Освещение в местах общего пользования",
        },
        {
          value: "elevators",
          label: "Работа лифтового оборудования",
        },
        {
          value: "garbage",
          label: "Вывоз твердых коммунальных отходов",
        },
      ],
    },
    {
      label: "Благоустройство территории",
      items: [
        {
          value: "yard_improvement",
          label: "Благоустройство дворовой территории",
        },
        {
          value: "snow_removal",
          label: "Уборка снега и наледи",
        },
        {
          value: "greenery",
          label: "Озеленение и уход за зелеными насаждениями",
        },
        {
          value: "playgrounds",
          label: "Состояние детских и спортивных площадок",
        },
      ],
    },
    {
      label: "Документы и начисления",
      items: [
        {
          value: "payments",
          label: "Начисления и перерасчеты коммунальных услуг",
        },
        {
          value: "receipts",
          label: "Ошибки в квитанциях",
        },
        {
          value: "contracts",
          label: "Договоры и условия обслуживания",
        },
        {
          value: "certificates",
          label: "Справки и выписки",
        },
      ],
    },
    {
      label: "Прочее",
      items: [
        {
          value: "consultation",
          label: "Консультация",
        },
        {
          value: "proposal",
          label: "Предложение или инициатива",
        },
        {
          value: "complaint_other",
          label: "Другое обращение",
        },
      ],
    },
  ]

  return (
    <>
      <Head>
        <title>Добавление заявки АДС</title>
      </Head>

      <section className="ads">
        <div className="ads__header">
          <Topbar link="ads" text="Добавление заявки АДС" />
        </div>
        <div className="ads__body">
          <Select
            id="select"
            name="select"
            placeholder="Выберите категорию"
            options={options}
          />
          <div className="ads__tags">
            <Tag>Авария</Tag>
            <Tag>Замечания, жалобы, предложения по работе</Tag>
            <Tag>
              Заявка на выполнение работамечания, жалобы, предложения по работе
            </Tag>
          </div>
          <Textarea id="message" name="message" placeholder="Текст заявки" />
        </div>
        <div className="ads__footer">
          <Button>Добавить</Button>
          <Button variant="secondary">Отменить</Button>
        </div>
      </section>
    </>
  )
}
