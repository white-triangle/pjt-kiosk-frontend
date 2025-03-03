import '../style/MenuDetailHeader.scss'
import Arrow from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'

export default function MenuDetailHeader() {
    const navigate = useNavigate()
    const route = () => {
        navigate('/order')
    }
    return (
        <div className='detail-header-wrap pt-2 mb-5 text-center'>
            <div onClick={route} className='flex prev-btn items-center'>
                <img src={Arrow} alt='' />
                &nbsp;
                <span className='prev-txt'>Back</span>
            </div>
            Menu Detail
        </div>
    )
}
