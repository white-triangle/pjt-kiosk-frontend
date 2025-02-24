import CartList from './ui/CartList'
import CartOrder from './ui/CartOrder'
import './style/CartWidget.scss'

export default function CartWidget() {
    return (
        <div className='cart-wrap'>
            <h5 className='cart-title text-center pb-7'>Cart</h5>
            <CartList />
            <CartOrder />
        </div>
    )
}
