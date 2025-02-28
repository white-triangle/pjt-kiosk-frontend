import React, { useState } from 'react'
import './OrderWidget.scss'
import '@/shared/admin/styles/Widget.scss'
import './components/styles.scss'
import RealTimeOrders from './components/RealTimeOrders'
import NotificationSettings from './components/NotificationSettings'

const OrderWidget: React.FC = () => {
    // 선택된 탭 상태 관리
    const [activeTab, setActiveTab] = useState<'orders' | 'notifications'>(
        'orders'
    )

    return (
        <div className='order-widget'>
            <div className='order-widget__header'>
                <div className='order-widget__tabs'>
                    <button
                        className={`order-widget__tab ${
                            activeTab === 'orders'
                                ? 'order-widget__tab--active'
                                : ''
                        }`}
                        onClick={() => setActiveTab('orders')}>
                        실시간 주문 현황
                    </button>
                    <button
                        className={`order-widget__tab ${
                            activeTab === 'notifications'
                                ? 'order-widget__tab--active'
                                : ''
                        }`}
                        onClick={() => setActiveTab('notifications')}>
                        알림 설정
                    </button>
                </div>
            </div>

            {/* 선택된 탭에 따라 다른 컴포넌트 렌더링 */}
            {activeTab === 'orders' ? (
                <RealTimeOrders />
            ) : (
                <NotificationSettings />
            )}
        </div>
    )
}

export default OrderWidget
