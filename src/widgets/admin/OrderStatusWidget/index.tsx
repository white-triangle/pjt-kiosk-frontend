import OrderList from './ui/OrderList'
import OrderStatusCard from './ui/OrderStatusCard'
import '@/shared/admin/styles/Widget.scss'
export default function OrderStatusWidget() {
    return (
        <div>
            <div className='widget-header'>실시간 주문현황</div>
            {/* 실시간 주문현황 상태 ex> 처리 중 8, 완료 45 */}
            <OrderStatusCard />
            {/* 주문 목록(주문번호, 테이블, 메뉴, 상태, 시간)  */}
            <OrderList />
        </div>
    )
}

export { OrderStatusCard, OrderList }
