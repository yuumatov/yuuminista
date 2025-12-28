import "./Field.scss"
import { Icon } from "minista"
import clsx from "clsx"

export default ({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  beforeIcon,
  button,
  error,
  disabled,
  className,
}) => {
  return (
    <div className={clsx("field", className)}>
      {label && (
        <label htmlFor={id} className="field__label">
          {label}
        </label>
      )}

      <div className={`field__wrapper`}>
        {beforeIcon && (
          <div className="field__before">
            <Icon iconId={beforeIcon} className="field__before-icon" />
          </div>
        )}

        <input
          id={id}
          name={name}
          type={type}
          className="field__input"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
        />

        {button && (
          <button type="button" className="field__button">
            <Icon iconId="eye" />
            <Icon iconId="eye-off" />
          </button>
        )}
      </div>

      {error && <div className="field__error">{error}</div>}
    </div>
  )
}
