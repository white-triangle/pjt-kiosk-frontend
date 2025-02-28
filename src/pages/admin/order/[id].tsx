import { useParams } from 'react-router-dom'
import './style/Order.scss'

export default function OrderDetail() {
    const { id } = useParams<{ id: string }>()

    return (
        <div className='order-container'>
            <div className='order-container__item'>
                <h1>주문 상세 정보</h1>
                <p>주문 ID: {id}</p>
                {/* 주문 상세 정보 표시 */}
            </div>
        </div>
    )
}
