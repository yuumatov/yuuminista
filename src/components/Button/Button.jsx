import "./Button.scss"
import clsx from "clsx"

export default ({
  children,
  type = "button",
  variant,
  className,
  ...props
}) => {
  const isSecondary = variant === "secondary"

  return (
    <button
      type={type}
      className={clsx("button", isSecondary && "button--secondary", className)}
      {...props}
    >
      {children}
    </button>
  )
}
