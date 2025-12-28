import "./Textarea.scss"
import clsx from "clsx"

export default ({ id, name, value = "123", placeholder, error, className }) => {
  return (
    <div className={clsx("textarea", className)}>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className="textarea__input"
      ></textarea>

      {error && <div className="field__error">{error}</div>}
    </div>
  )
}
