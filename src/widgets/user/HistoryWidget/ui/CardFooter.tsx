import '../style/CardFooter.scss'

export default function CardFooter() {
    return (
        <div className='footer-wrap pt-3'>
            <div className='price-section flex justify-between mb-3'>
                <div className='price-txt'>Total Price</div>
                <div className='total-price text-center'>
                    $<span className='price'>25.98</span>
                </div>
            </div>
            {/* HistoryCard에서 Cooking 상태이고, 주문시간이 3분 이내로만 가능 */}
            {/* 아니면 cancel 없어지기 */}
            <div className='cancel-section flex items-center justify-center'>
                <button className='cancel-btn'>Cancel Order</button>
            </div>
        </div>
    )
}
