import OrderWidget from '@/widgets/admin/OrderWidget'
import './style/Order.scss'

export default function Order() {
    return (
        <div className='order-container'>
            <div className='order-container__item'>
                <OrderWidget />
            </div>
        </div>
    )
}
