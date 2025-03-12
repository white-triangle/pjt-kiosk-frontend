import axios from 'axios'
import {
    Order,
    OrderListResponse,
    OrderStatus,
} from '../../model/types/orderTypes'
/**
 * 주문 목록 조회를 위한 API 요청 함수
 * @param cursor 페이지네이션 커서 (이전 페이지의 마지막 주문 ID)
 * @param limit 페이지당 아이템 수
 * @param status 필터링할 주문 상태
 */
export const fetchOrderList = async ({
    cursor = null,
    limit = 10,
    status = null,
}: {
    cursor?: string | null
    limit?: number
    status?: OrderStatus | null
}): Promise<OrderListResponse> => {
    const params = new URLSearchParams()
    if (cursor) params.append('cursor', cursor)
    if (limit) params.append('limit', limit.toString())
    if (status) params.append('status', status)

    const { data } = await axios.get<OrderListResponse>(
        `/api/orders?${params.toString()}`
    )
    return data
}

export const fetchOrderDetail = async (id: string): Promise<Order> => {
    const { data } = await axios.get<Order>(`/api/orders/${id}`)
    return data
}

/**
 * 주문 상태 변경 API 요청 함수
 * @param id 주문 ID
 * @param status 변경할 상태
 */
export const updateOrderStatus = async ({
    id,
    status,
}: {
    id: string
    status: OrderStatus
}): Promise<Order> => {
    const { data } = await axios.patch<Order>(`/api/orders/${id}/status`, {
        status,
    })
    return data
}
