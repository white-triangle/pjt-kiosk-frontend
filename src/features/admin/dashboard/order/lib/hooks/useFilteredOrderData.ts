import { useMemo } from 'react'
import {
    Order,
    OrderStatus,
    OrderListResponse,
} from '@/entities/admin/dashboard'
import { UseInfiniteQueryResult, InfiniteData } from '@tanstack/react-query'

/**
 * 필터링된 주문 데이터를 위한 상태 인터페이스
 */
interface FilteredOrderDataState {
    orders: Order[] // 필터된 주문 목록
    isLoading: boolean // 로딩 중 여부
    isError: boolean // 에러 발생 여부
    isEmpty: boolean // 결과가 비어있는지 여부
    error: Error | null // 에러 객체
}

/**
 * 주문 데이터 처리 및 필터링을 위한 커스텀 훅
 *
 * 무한 쿼리로 가져온 주문 데이터를 상태에 따라 필터링하고,
 * 로딩/에러/빈 결과 상태를 처리합니다.
 *
 * @param queryResult - useOrderList 등의 무한 쿼리 결과
 * @param status - 필터링할 주문 상태 (null인 경우 모든 주문)
 * @returns 필터링된 주문 데이터와 상태 정보
 *
 * @example
 * ```tsx
 * const query = useOrderList()
 * const { orders, isLoading, isError, isEmpty, error } = useFilteredOrderData(query, activeStatus)
 *
 * if (isLoading) return <Loading />
 * if (isError) return <Error message={error?.message} />
 * if (isEmpty) return <Empty />
 *
 * return <OrderList orders={orders} />
 * ```
 */
export const useFilteredOrderData = (
    queryResult: UseInfiniteQueryResult<InfiniteData<OrderListResponse>, Error>,
    status: OrderStatus | null
): FilteredOrderDataState => {
    const {
        data,
        isLoading: isQueryLoading,
        isFetchingNextPage,
        error,
    } = queryResult

    // 데이터에서 주문 목록 추출
    const allOrders = useMemo(() => {
        if (!data || !data.pages) return []
        return data.pages.flatMap(
            (page: OrderListResponse) => page.orders || []
        )
    }, [data])

    // 선택된 상태에 따라 주문 필터링
    const filteredOrders = useMemo(() => {
        if (status === null) {
            return allOrders
        }
        return allOrders.filter((order: Order) => order.status === status)
    }, [allOrders, status])

    // 로딩 상태 (초기 로딩 중이고, 다음 페이지 로딩 중이 아닐 때)
    const isLoading = isQueryLoading && !isFetchingNextPage

    // 에러 상태
    const isError = error !== null && error !== undefined

    // 결과가 비어있는지 여부
    const isEmpty = !isLoading && !isError && filteredOrders.length === 0

    return {
        orders: filteredOrders,
        isLoading,
        isError,
        isEmpty,
        error: error || null,
    }
}
