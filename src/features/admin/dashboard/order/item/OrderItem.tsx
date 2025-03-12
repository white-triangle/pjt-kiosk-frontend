import React from 'react'
import { Order } from '@/entities/admin/dashboard'
import './OrderItem.scss'

/**
 * OrderItem 컴포넌트 Props 인터페이스
 */
interface OrderItemProps {
    order: Order
    onOrderSelect?: (order: Order) => void
}

/**
 * 주문 정보를 표시하는 아이템 컴포넌트
 * 주문 상태에 따라 다른 스타일이 적용됩니다.
 */
export const OrderItem: React.FC<OrderItemProps> = ({
    order,
    onOrderSelect,
}) => {
    // 주문 시간을 읽기 쉬운 형식으로 포맷팅
    const formatDate = (isoString: string): string => {
        const date = new Date(isoString)
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        return `${month}월 ${day}일 ${hours}:${minutes} 주문`
    }

    const formattedDate = formatDate(order.createdAt)

    // 메뉴 항목 HTML 생성 (가로 배치)
    const renderMenuItems = () => {
        if (order.menuItems.length === 0) {
            return <div className='menu-item'>메뉴 없음</div>
        }

        // 최대 표시할 항목 수 (가로 배치는 더 많은 항목 표시 가능)
        const maxItemsToShow = 4
        const displayedItems = order.menuItems.slice(0, maxItemsToShow)

        // 각 메뉴 항목을 JSX로 변환 (가로 배치)
        const menuElements = displayedItems.map((item, index) => (
            <div key={index} className='menu-item'>
                <span className='menu-item__quantity'>{item.quantity}</span>
                <span className='menu-item__name'>{item.menuName}</span>
            </div>
        ))

        // 추가 항목이 있으면 표시
        if (order.menuItems.length > maxItemsToShow) {
            const remaining = order.menuItems.length - maxItemsToShow
            menuElements.push(
                <div key='more' className='more-items'>
                    +{remaining}개
                </div>
            )
        }

        return menuElements
    }

    // 전체 메뉴 항목 텍스트 (툴팁용)
    const fullMenuText = order.menuItems
        .map((item) => `${item.menuName} × ${item.quantity}`)
        .join(', ')

    // 아이템 클래스 생성 (상태에 따라 다른 스타일 적용)
    const itemClassName = `order-item order-item--${order.status}`

    // 상태 클래스 생성
    const statusClassName = `order-item__status--${order.status}`

    // 상태 텍스트 매핑
    const statusText = {
        processing: '처리 중',
        completed: '완료',
    }

    return (
        <div className={itemClassName} onClick={() => onOrderSelect?.(order)}>
            <div className='order-item__header'>
                <div className='order-item__id'>주문 #{order.id.slice(-4)}</div>
                <div className='order-item__table'>
                    테이블 {order.tableNumber}
                </div>
                <div className='order-item__date'>
                    {formatDate(order.createdAt)}
                </div>
            </div>

            <div className='order-item__status'>
                <div className={statusClassName}>
                    {statusText[order.status]}
                </div>
            </div>

            <div className='order-item__menus' title={fullMenuText}>
                {renderMenuItems()}
            </div>
        </div>
    )
}
