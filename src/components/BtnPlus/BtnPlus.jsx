import "./BtnPlus.scss"
import { Icon } from "minista"

export default ({ className, ...props }) => {
  return (
    <a href="ads-add" className="btn-plus" {...props}>
      <Icon iconId="plus" />
    </a>
  )
}
