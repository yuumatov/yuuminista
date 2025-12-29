import "./CardRequest.scss"
import clsx from "clsx"

export default ({ type, className, ...props }) => {
  if (type === "completed") {
    return (
      <div
        className={clsx("card-reguest card-reguest--completed", className)}
        {...props}
      >
        <div className="card-reguest__item">
          <div className="card-reguest__meta">№4849730, 11 ноя 2025 12:23</div>
          <div className="card-reguest__text">
            Непредоставление / некачественное предоставление услуг
          </div>
        </div>
        <div className="card-reguest__item">
          <div className="card-reguest__label">Заявка:</div>
          <div className="card-reguest__text">
            Мы вынуждены отталкиваться от того, что семантический разбор внешних
            противодействий требует от нас анализа стандартных подходов.
          </div>
        </div>
        <div className="card-reguest__item">
          <div className="card-reguest__label">Ответ:</div>
          <div className="card-reguest__text">
            Ясность нашей позиции очевидна: социально-экономическое развитие
            способствует повышению качества дальнейших направлений развития.
          </div>
        </div>
        <div className="card-reguest__item card-reguest__item--completed">
          <div className="card-reguest__subtitle">
            13 ноября 2025 12:23
            <span>Исполнено</span>
          </div>
          <div className="card-reguest__text">
            Ясность нашей позиции очевидна: социально-экономическое развитие
            способствует повышению качества дальнейших направлений развития.
          </div>
        </div>
      </div>
    )
  } else if (type === "accent") {
    return (
      <div
        className={clsx("card-reguest card-reguest--accent", className)}
        {...props}
      >
        <div className="card-reguest__item">
          <div className="card-reguest__meta">№4849730, 7 дек 2025 12:39</div>
          <div className="card-reguest__text">
            Непредоставление / некачественное предоставление услуг
          </div>
        </div>
        <div className="card-reguest__item">
          <div className="card-reguest__label">Заявка:</div>
          <div className="card-reguest__text">
            Мы вынуждены отталкиваться от того, что семантический разбор внешних
            противодействий требует от нас анализа стандартных подходов.
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={clsx("card-reguest", className)} {...props}>
        <div className="card-reguest__item">
          <div className="card-reguest__meta">№4849730, 11 ноя 2025 12:23</div>
          <div className="card-reguest__text">
            Непредоставление / некачественное предоставление услуг
          </div>
        </div>
        <div className="card-reguest__item">
          <div className="card-reguest__label">Заявка:</div>
          <div className="card-reguest__text">
            Мы вынуждены отталкиваться от того, что семантический разбор внешних
            противодействий требует от нас анализа стандартных подходов.
          </div>
        </div>
        <div className="card-reguest__item">
          <div className="card-reguest__label">Ответ:</div>
          <div className="card-reguest__text">
            Ясность нашей позиции очевидна: социально-экономическое развитие
            способствует повышению качества дальнейших направлений развития.
          </div>
        </div>
      </div>
    )
  }
}
