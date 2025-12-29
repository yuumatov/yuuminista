import "./Toggle.scss"
import clsx from "clsx"

export default ({ links, className, ...props }) => {
  return (
    <div className={clsx("toggle", className)} {...props}>
      {links.map(({ link, text, isActive }) => {
        return (
          <a
            key={link}
            href={link}
            className={clsx("toggle__link", isActive && "is-active")}
          >
            {text}
          </a>
        )
      })}
    </div>
  )
}
