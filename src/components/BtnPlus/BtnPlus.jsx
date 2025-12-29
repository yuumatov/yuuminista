import "./BtnPlus.scss"
import { Icon } from "minista"

export default ({ className, ...props }) => {
  return (
    <div className="btn-plus" {...props}>
      <Icon iconId="plus" />
    </div>
  )
}
