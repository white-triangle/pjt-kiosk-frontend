import React from 'react'
// react-icons 임포트
import { MdPendingActions, MdOutlineSettings } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

interface OrderItemProps {
    orderNumber: string
    status: 'pending' | 'processing' | 'completed' | 'cancelled'
    statusText: string
    orderTime: string
    customerInfo: string
    items: string
    total: string
    primaryAction: {
        text: string
        onClick: () => void
    }
    onViewDetails: () => void
}

// 상태별 아이콘 정의 - React.ReactNode 타입 사용
const statusIcons: Record<string, React.ReactNode> = {
    pending: <MdPendingActions size={16} />,
    processing: <MdOutlineSettings size={16} />,
    completed: <AiOutlineCheckCircle size={16} />,
    cancelled: <IoMdClose size={16} />,
}

const OrderItem: React.FC<OrderItemProps> = ({
    orderNumber,
    status,
    statusText,
    orderTime,
    customerInfo,
    items,
    total,
    primaryAction,
    onViewDetails,
}) => {
    return (
        <div className='order-card'>
            <div className='order-header'>
                <span className='order-number'>{orderNumber}</span>
                <div className={`status-badge status-badge--${status}`}>
                    <span className='status-badge-icon'>
                        {statusIcons[status]}
                    </span>
                    <span className='status-badge-label'>{statusText}</span>
                </div>
            </div>
            <div className='order-time'>{orderTime}</div>
            <div className='order-customer'>{customerInfo}</div>
            <div className='order-items'>
                <p>{items}</p>
            </div>
            <div className='order-total'>{total}</div>
            <div className='order-actions'>
                <button
                    className='action-button action-button--primary'
                    onClick={primaryAction.onClick}>
                    {primaryAction.text}
                </button>
                <button
                    className='action-button action-button--secondary'
                    onClick={onViewDetails}>
                    상세보기
                </button>
            </div>
        </div>
    )
}

export default OrderItem
