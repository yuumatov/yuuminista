import { Head } from "minista"
import Field from "../components/Field"
import Textarea from "../components/Textarea"
import Button from "../components/Button"
import Select from "../components/Select"
import Tag from "../components/Tag"

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

      <br />

      <Button>Войти</Button>

      <br />
      <br />

      <Button variant="secondary">Отменить</Button>

      <br />
      <br />

      <Button disabled>Добавить</Button>

      <br />
      <br />

      <Select
        id="select"
        name="select"
        placeholder="Выберите категорию"
        options={options}
      />

      <br />
      <br />

      <Select
        id="select-error"
        name="select-error"
        placeholder="Выберите категорию"
        options={options}
        error="Не выбрана категория"
      />

      <br />
      <br />

      <div className="tag-wrapper">
        <Tag>Авария</Tag>
        <Tag>Замечания, жалобы, предложения по работе</Tag>
        <Tag>
          Заявка на выполнение работамечания, жалобы, предложения по работе
        </Tag>
      </div>
    </>
  )
}
