import CartItem from './CartItem'
import '../style/CartList.scss'

export default function CartList() {
    return (
        <div className='cart-list mt-5'>
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}
