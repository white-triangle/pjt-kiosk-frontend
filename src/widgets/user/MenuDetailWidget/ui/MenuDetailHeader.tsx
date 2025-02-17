import '../style/MenuDetailHeader.scss'
import Arrow from '../assets/arrow.svg'

export default function MenuDetailHeader(){
  return(
    <div className='detail-header-wrap pt-2 mb-5 text-center'>
      <div className='flex prev-btn items-center'>
        <img src={Arrow} alt="" />&nbsp;
        <span className='prev-txt'>Back</span>
      </div>
      Menu Detail
    </div>
  )
}