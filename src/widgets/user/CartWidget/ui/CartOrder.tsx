import '../style/CartOrder.scss'
export default function CartOrder() {
    return (
        <div className='cart-order-wrap'>
            <div className='mt-3 mb-1 pl-5 pr-5 flex justify-between order-receipt'>
                <span className='order-desc'>Subtotal</span>
                <span className='order-price subtotal-price'>$26.47</span>
            </div>
            <div className='mt-1 mb-1  pl-5 pr-5 flex justify-between order-receipt'>
                <span className='order-desc'>Tax (10%)</span>
                <span className='order-price tax-price'>$2.65</span>
            </div>
            <div className='mt-1 mb-1  pl-5 pr-5 flex justify-between order-receipt total-wrap'>
                <span className='order-desc'>Total</span>
                <span className='order-price total-price'>$29.12</span>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button className='order-btn'>Place Order - $29.12</button>
            </div>
        </div>
    )
}
