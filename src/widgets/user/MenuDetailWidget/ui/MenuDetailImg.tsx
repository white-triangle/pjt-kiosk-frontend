import BurgerDetail from '../assets/burger_detail.svg'
import Burger from '../assets/burger.svg'
import '../style/MenuDetailImg.scss'

export default function MenuDetailImg(){
  return(
    <div className='detail_img'>
      <img src={BurgerDetail} alt="" />
      {/* <img src={Burger} alt="" /> */}
    </div>
  )
}