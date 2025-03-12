import React from 'react'
import { useOrderStatistics } from '@/features/admin/dashboard/order'
import './OrderStatusSummary.scss'

export const OrderStatusSummary: React.FC = () => {
    // features 레이어의 hook을 통해 통계 데이터 가져오기
    const { counts, isLoading, isError } = useOrderStatistics()

    // 로딩 중인 경우
    if (isLoading) {
        return (
            <div className='order-status-summary order-status-summary--loading'>
                <div className='order-status-summary__item'>
                    <div className='order-status-summary__label'>처리 중</div>
                    <div className='order-status-summary__count'>--</div>
                </div>
                <div className='order-status-summary__item'>
                    <div className='order-status-summary__label'>완료</div>
                    <div className='order-status-summary__count'>--</div>
                </div>
                <div className='order-status-summary__item'>
                    <div className='order-status-summary__label'>전체</div>
                    <div className='order-status-summary__count'>--</div>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className='order-status-summary order-status-summary--error'>
                <p>데이터를 불러올 수 없습니다.</p>
            </div>
        )
    }

    return (
        <div className='order-status-summary'>
            <div className='order-status-summary__item order-status-summary__item--processing'>
                <div className='order-status-summary__label'>처리 중</div>
                <div className='order-status-summary__count'>
                    {counts.processing}
                </div>
            </div>
            <div className='order-status-summary__item order-status-summary__item--completed'>
                <div className='order-status-summary__label'>완료</div>
                <div className='order-status-summary__count'>
                    {counts.completed}
                </div>
            </div>
            <div className='order-status-summary__item order-status-summary__item--total'>
                <div className='order-status-summary__label'>전체</div>
                <div className='order-status-summary__count'>
                    {counts.total}
                </div>
            </div>
        </div>
    )
}
