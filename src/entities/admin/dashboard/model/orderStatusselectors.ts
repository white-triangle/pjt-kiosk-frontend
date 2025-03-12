import { InfiniteData } from '@tanstack/react-query'
import {
    Order,
    OrderListResponse,
    OrderStatus,
} from '../model/types/orderTypes'

/**
 * 무한 쿼리 응답으로부터 모든 주문 항목을 추출하는 셀렉터
 * @param data 무한 쿼리 응답 데이터
 * @returns 모든 주문 항목 배열
 */
export const getAllOrdersFromResponse = (
    data: InfiniteData<OrderListResponse> | undefined
): Order[] => {
    if (!data || !data.pages || data.pages.length === 0) {
        return []
    }

    // 모든 페이지의 주문 항목을 하나의 배열로 병합
    return data.pages.flatMap((page) => page.orders)
}

/**
 * 상태별 주문 항목을 필터링하는 셀렉터
 * @param orders 주문 항목 배열
 * @param status 필터링할 상태
 * @returns 필터링된 주문 항목 배열
 */
export const filterOrdersByStatus = (
    orders: Order[],
    status: OrderStatus | null
): Order[] => {
    if (!status) {
        return orders
    }

    return orders.filter((order) => order.status === status)
}

/**
 * 시간순으로 주문 항목을 정렬하는 셀렉터
 * @param orders 주문 항목 배열
 * @param order 정렬 순서 ('asc' | 'desc')
 * @returns 정렬된 주문 항목 배열
 */
export const sortOrdersByTime = (
    orders: Order[],
    order: 'asc' | 'desc' = 'desc'
): Order[] => {
    return [...orders].sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime()
        const dateB = new Date(b.createdAt).getTime()
        return order === 'desc' ? dateB - dateA : dateA - dateB
    })
}

/**
 * 주문의 총 건수를 계산하는 셀렉터
 * @param data 무한 쿼리 응답 데이터
 * @returns 총 주문 건수
 */
export const getTotalOrdersCount = (
    data: InfiniteData<OrderListResponse> | undefined
): number => {
    if (!data || !data.pages || data.pages.length === 0) {
        return 0
    }

    return data.pages[0].total
}

/**
 * 다음 페이지 존재 여부를 확인하는 셀렉터
 * @param data 무한 쿼리 응답 데이터
 * @returns 다음 페이지 존재 여부
 */
export const hasNextPage = (
    data: InfiniteData<OrderListResponse> | undefined
): boolean => {
    if (!data || !data.pages || data.pages.length === 0) {
        return false
    }

    return data.pages[data.pages.length - 1].hasMore
}

/**
 * 주문 상태별 건수를 계산하는 셀렉터
 * @param orders 주문 항목 배열
 * @returns 상태별 주문 건수 객체
 */
export const getOrderCountByStatus = (
    orders: Order[]
): { processing: number; completed: number; total: number } => {
    return {
        processing: orders.filter((order) => order.status === 'processing')
            .length,
        completed: orders.filter((order) => order.status === 'completed')
            .length,
        total: orders.length,
    }
}

/**
 * 특정 테이블의 주문 목록을 추출하는 셀렉터
 * @param orders 주문 항목 배열
 * @param tableId 테이블 ID
 * @returns 해당 테이블의 주문 항목 배열
 */
export const getOrdersByTableId = (
    orders: Order[],
    tableId: string
): Order[] => {
    return orders.filter((order) => order.tableId === tableId)
}

/**
 * 오늘 들어온 주문 목록만 필터링하는 셀렉터
 * @param orders 주문 항목 배열
 * @returns 오늘 날짜의 주문 항목 배열
 */
export const getTodayOrders = (orders: Order[]): Order[] => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return orders.filter((order) => {
        const orderDate = new Date(order.createdAt)
        return orderDate >= today
    })
}
