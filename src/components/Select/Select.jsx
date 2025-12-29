import "./Select.scss"
import { Icon } from "minista"

export default ({ id, name, placeholder, options, error, ...props }) => {
  return (
    <div className="select" {...props}>
      <div className="select__trigger">
        <div className="select__value">{placeholder}</div>
        <Icon iconId="arrow-bottom" className="select__arrow" />
        <input
          type="text"
          id={id}
          name={name}
          className="select__input"
          hidden
        />
      </div>

      {error && <div className="select__error">{error}</div>}

      <div className="select__dropdown">
        {options.map(({ label, items }) => {
          return (
            <div className="select__group" key={label}>
              <div className="select__group-label">{label}</div>

              {items.map(({ value, label }) => {
                return (
                  <button
                    key={value}
                    className="select__option"
                    data-value={value}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
