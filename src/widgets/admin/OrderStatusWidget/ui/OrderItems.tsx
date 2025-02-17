import { useState, useEffect, useRef, useCallback } from 'react'
import '@/shared/admin/styles/List.scss'
import '@/shared/admin/styles/Colors.scss'
import '../style/OrderItems.scss'

interface OrderItem {
    id: number
    orderNumber: string
    table: string
    menu: string
    status: 'processing' | 'completed'
    time: string
}

export default function OrderItems() {
    const [orders, setOrders] = useState<OrderItem[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const observer = useRef<IntersectionObserver | null>(null)
    const lastOrderElementRef = useRef<HTMLDivElement | null>(null)

    // 임시 데이터 생성 함수 (실제로는 API 호출로 대체 가능)
    const fetchOrders = useCallback(async (pageNumber: number) => {
        setLoading(true)
        try {
            // 각 페이지당 4개 항목을 생성
            const newOrders: OrderItem[] = Array.from(
                { length: 4 },
                (_, i) => ({
                    id: pageNumber * 4 + i,
                    orderNumber: `ORD-${pageNumber * 4 + i}`,
                    table: `Table ${Math.floor(Math.random() * 10) + 1}`,
                    menu: `Menu ${Math.floor(Math.random() * 5) + 1}`,
                    status: (Math.random() > 0.5
                        ? 'processing'
                        : 'completed') as 'processing' | 'completed',
                    time: new Date().toLocaleTimeString(),
                })
            )

            // 예시 조건: 3페이지 이후엔 더 이상 데이터 없음
            // if (pageNumber > 3) {
            //     setHasMore(false)
            //     return
            // }

            setOrders((prev) => [...prev, ...newOrders])
            setPage(pageNumber)
        } catch (error) {
            console.error('Error fetching orders:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    // Intersection Observer로 마지막 주문 요소 감시
    useEffect(() => {
        if (loading || !hasMore) return

        if (observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                fetchOrders(page + 1)
            }
        })

        if (lastOrderElementRef.current) {
            observer.current.observe(lastOrderElementRef.current)
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [loading, hasMore, page, fetchOrders])

    // 초기에 4개의 주문 데이터를 로드
    useEffect(() => {
        fetchOrders(1)
    }, [fetchOrders])

    return (
        <div className='order-list__container'>
            <div className='flex flex-col divide-y divide-gray-200 list__items'>
                {orders.map((order, index) => (
                    <div
                        key={order.id}
                        ref={
                            index === orders.length - 1
                                ? lastOrderElementRef
                                : null
                        }
                        className='flex items-center hover:bg-gray-50'>
                        <div className='flex-1 list__item'>
                            {order.orderNumber}
                        </div>
                        <div className='flex-1 list__item'>{order.table}</div>
                        <div className='flex-1 list__item'>{order.menu}</div>
                        <div className='flex-1 list__item'>
                            <span
                                className={`status-badge ${
                                    order.status === 'processing'
                                        ? 'order-status-card__text-processing'
                                        : 'order-status-card__text-completed'
                                }`}>
                                {order.status === 'processing'
                                    ? '처리중'
                                    : '완료'}
                            </span>
                        </div>
                        <div className='flex flex-1 list__item justify-center text-gray-500'>
                            {order.time}
                        </div>
                    </div>
                ))}
            </div>
            {loading && (
                <div className='flex justify-center py-4'>
                    <div className='loading-spinner'></div>
                </div>
            )}
            {!hasMore && (
                <div className='flex justify-center py-4 text-gray-500'>
                    모든 주문을 불러왔습니다.
                </div>
            )}
        </div>
    )
}
