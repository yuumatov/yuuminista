import "./Button.scss"
import clsx from "clsx"

export default ({ children, variant, className, ...props }) => {
  const isSecondary = variant === "secondary"

  return (
    <button
      className={clsx("button", isSecondary && "button--secondary", className)}
      {...props}
    >
      {children}
    </button>
  )
}
