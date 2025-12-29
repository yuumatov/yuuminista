import "./CardService.scss"
import clsx from "clsx"

export default ({ title, className, ...props }) => {
  return (
    <div className={clsx("card-service", className)} {...props}>
      <div className="card-service__title">{title}</div>
      <div className="card-service__grid">
        <div className="card-service__item">
          <div className="card-service__value">231 ₽</div>
          <div className="card-service__param">корректировка</div>
        </div>
        <div className="card-service__item">
          <div className="card-service__value">3 083 ₽</div>
          <div className="card-service__param">начисление</div>
        </div>
        <div className="card-service__item card-service__item--paid">
          <div className="card-service__value">5 472 ₽</div>
          <div className="card-service__param">оплачено</div>
        </div>
        <div className="card-service__item card-service__item--debt">
          <div className="card-service__param">Долг</div>
          <div className="card-service__value">135 231 ₽</div>
        </div>
      </div>
    </div>
  )
}
