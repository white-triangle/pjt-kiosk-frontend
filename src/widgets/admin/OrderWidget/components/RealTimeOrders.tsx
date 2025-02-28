import React, { useState } from 'react'
import FilterGroup from './FilterGroup'
import OrderItem from './OrderItem'

const RealTimeOrders: React.FC = () => {
    const [periodFilter, setPeriodFilter] = useState('today')
    const [statusFilter, setStatusFilter] = useState('all')

    // 실제 구현에서는 필터 값에 따라 주문 목록을 필터링하는 로직이 필요합니다
    // 여기서는 예시를 위해 하드코딩된 데이터를 사용합니다

    const handlePeriodChange = (value: string) => {
        setPeriodFilter(value)
        // API 호출 또는 데이터 필터링 로직
    }

    const handleStatusChange = (value: string) => {
        setStatusFilter(value)
        // API 호출 또는 데이터 필터링 로직
    }

    // 주문 액션 핸들러 (예시)
    const handleOrderAccept = (orderId: string) => {
        console.log(`주문 접수: ${orderId}`)
        // API 호출
    }

    const handleOrderComplete = (orderId: string) => {
        console.log(`주문 완료: ${orderId}`)
        // API 호출
    }

    const handleViewDetails = (orderId: string) => {
        console.log(`주문 상세보기: ${orderId}`)
        // 상세보기 페이지로 이동 또는 모달 표시
    }

    return (
        <div className='real-time-orders'>
            <FilterGroup
                periodValue={periodFilter}
                statusValue={statusFilter}
                onPeriodChange={handlePeriodChange}
                onStatusChange={handleStatusChange}
            />

            <div className='order-list'>
                <OrderItem
                    orderNumber='주문 #12345'
                    status='pending'
                    statusText='신규주문'
                    orderTime='2023-02-27 14:30:45'
                    customerInfo='테이블 8번'
                    items='아메리카노 x 2, 카페라떼 x 1'
                    total='15,000원'
                    primaryAction={{
                        text: '접수',
                        onClick: () => handleOrderAccept('12345'),
                    }}
                    onViewDetails={() => handleViewDetails('12345')}
                />

                <OrderItem
                    orderNumber='주문 #12344'
                    status='processing'
                    statusText='처리중'
                    orderTime='2023-02-27 14:25:30'
                    customerInfo='테이블 5번'
                    items='카푸치노 x 1, 바닐라라떼 x 1, 초코케이크 x 1'
                    total='22,500원'
                    primaryAction={{
                        text: '완료',
                        onClick: () => handleOrderComplete('12344'),
                    }}
                    onViewDetails={() => handleViewDetails('12344')}
                />
            </div>
        </div>
    )
}

export default RealTimeOrders
