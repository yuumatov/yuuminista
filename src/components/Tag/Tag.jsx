import "./Tag.scss"
import clsx from "clsx"

export default ({ children, className, ...props }) => {
  return (
    <button type="button" className={clsx("tag", className)} {...props}>
      {children}
    </button>
  )
}
