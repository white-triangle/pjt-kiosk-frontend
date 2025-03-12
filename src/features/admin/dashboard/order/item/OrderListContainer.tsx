import React, { useCallback } from 'react'
import { useOrderList, Order, OrderStatus } from '@/entities/admin/dashboard'
import { OrderItem } from './OrderItem'
import { useOrderStore } from '../model'
import { useInfiniteScroll, useFilteredOrderData } from '../lib/hooks'
import './OrderListContainer.scss'

interface OrderListContainerProps {
    status: OrderStatus | null
    onOrderSelect?: (order: Order) => void
}

export const OrderListContainer: React.FC<OrderListContainerProps> = ({
    status,
    onOrderSelect,
}) => {
    const { selectOrder: storeSelectOrder } = useOrderStore()

    const queryResult = useOrderList()
    const { fetchNextPage, hasNextPage, isFetchingNextPage } = queryResult

    const {
        orders: filteredOrders,
        isLoading,
        isError,
        isEmpty,
        error,
    } = useFilteredOrderData(queryResult, status)

    const { containerRef, targetRef, isLoadingMore } = useInfiniteScroll({
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        options: {
            threshold: 200,
            scrollContainerSelector: '.order-items__content',
        },
    })

    const handleOrderSelect = useCallback(
        (order: Order) => {
            if (onOrderSelect) {
                onOrderSelect(order)
            }
            storeSelectOrder(order)
        },
        [storeSelectOrder, onOrderSelect]
    )

    if (isLoading) {
        return <div className='order-list__loading'>로딩 중...</div>
    }

    if (isError) {
        return (
            <div className='order-list__error'>
                데이터를 불러오는 데 문제가 발생했습니다.
                {error && (
                    <p className='order-list__error-message'>{error.message}</p>
                )}
            </div>
        )
    }

    if (isEmpty) {
        return <div className='order-list__empty'>주문 내역이 없습니다.</div>
    }

    return (
        <div ref={containerRef} className='order-list'>
            {filteredOrders.map((order) => (
                <OrderItem
                    key={order.id}
                    order={order}
                    onOrderSelect={handleOrderSelect}
                />
            ))}

            <div ref={targetRef} className='order-list__loader'>
                {isLoadingMore ? (
                    <div className='order-list__loading-more'>
                        <div className='loading-spinner-small'></div>
                        다음 페이지 로딩 중...
                    </div>
                ) : hasNextPage ? (
                    <div className='order-list__scroll-info'>
                        더 많은 주문을 불러오려면 스크롤하세요 (
                        {filteredOrders.length}개 로드됨)
                    </div>
                ) : (
                    <div className='order-list__end-message'>
                        모든 주문을 불러왔습니다 (총 {filteredOrders.length}개)
                    </div>
                )}
            </div>
        </div>
    )
}
