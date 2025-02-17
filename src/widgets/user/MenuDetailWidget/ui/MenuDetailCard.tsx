import MenuDetailInfo from "./MenuDetailInfo";
import MenuDetailOptions from "./MenuDetailOptions";
import '../style/MenuDetailCard.scss'

export default function MenuDetailCard(){
  return(
    <div className="detail-card p-4">
      <MenuDetailInfo/>
      <MenuDetailOptions/>
    </div>
  )
}