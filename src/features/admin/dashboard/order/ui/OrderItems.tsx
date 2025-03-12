import React, { useEffect } from 'react'
import OrderTab from '../tab/OrderTab'
import { OrderListContainer } from '../item/OrderListContainer'
import { useOrderStore } from '../model'
import { ProgressBar } from './ProgressBar'
import './OrderItems.scss'

export const OrderItems: React.FC = () => {
    const { activeStatus, selectedOrder, selectOrder, clearSelectedOrder } =
        useOrderStore()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedOrder) {
                clearSelectedOrder()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedOrder, clearSelectedOrder])

    return (
        <div className='order-items'>
            <header className='order-items__header'>
                <h2 className='order-items__title'>실시간 주문 현황</h2>
                <div className='order-items__filters'>
                    <OrderTab />
                </div>
            </header>

            {/* 프로그래스 바 컴포넌트 적합성 테스트 필요! */}
            {/* <ProgressBar containerSelector='.order-items__content' /> */}

            <div className='order-items__content'>
                <OrderListContainer
                    status={activeStatus}
                    onOrderSelect={selectOrder}
                />
            </div>

            {/* 선택된 주문이 있을 때 모달 표시 등 추가 UI 로직 모달구현 x인 상황임 */}
            {selectedOrder && (
                <div className='order-detail-modal'>
                    {/* 주문 상세 정보 모달 컴포넌트 구현예정*/}
                </div>
            )}
        </div>
    )
}
