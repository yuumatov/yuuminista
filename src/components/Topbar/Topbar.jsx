import "./Topbar.scss"
import { Icon } from "minista"
import clsx from "clsx"

export default ({ link, text, className, ...props }) => {
  return (
    <div className={clsx("topbar", className)} {...props}>
      <a href={link} className="topbar__link-prev">
        <Icon iconId="arrow-left" />
      </a>

      <div className="topbar__title">{text}</div>
    </div>
  )
}
