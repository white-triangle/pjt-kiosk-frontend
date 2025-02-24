import CartItem from './CartItem'
import '../style/CartList.scss'

interface CartListProps {
    onModify: () => void
}

export default function CartList({ onModify }: CartListProps) {
    return (
        <div className='cart-list mt-5'>
            <CartItem onModify={onModify} />
            <CartItem onModify={onModify} />
            <CartItem onModify={onModify} />
        </div>
    )
}
