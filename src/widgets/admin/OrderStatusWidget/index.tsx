import React from 'react'
import { OrderItems } from '@/features/admin/dashboard/order'
import { OrderStatusSummary } from './ui/OrderStatusSummary'
import './OrderStatusWidget.scss'

const OrderStatusWidget: React.FC = () => {
    return (
        <div className='order-status-widget'>
            <OrderStatusSummary />
            <OrderItems />
        </div>
    )
}

export default OrderStatusWidget
