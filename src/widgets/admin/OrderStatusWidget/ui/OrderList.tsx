import OrderHeader from './OrderHeader'
import OrderItems from './OrderItems'

export default function OrderList() {
    return (
        <div className='flex flex-col gap-4'>
            <OrderHeader />
            <OrderItems />
        </div>
    )
}
