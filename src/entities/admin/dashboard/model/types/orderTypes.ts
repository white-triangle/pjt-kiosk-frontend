/**
 * 주문 상태 타입
 */
export type OrderStatus = 'processing' | 'completed'

/**
 * 메뉴 아이템 타입
 */
export interface MenuItem {
    menuId: string
    menuName: string
    quantity: number
}

/**
 * 주문 정보 타입
 */
export interface Order {
    id: string // 주문번호
    tableId: string // 테이블 ID
    tableNumber: number // 테이블 번호
    menuItems: MenuItem[] // 메뉴 아이템 목록
    status: OrderStatus // 주문 상태 (처리 중, 완료)
    createdAt: string // 주문 시간 (ISO 문자열)
}

/**
 * 주문 목록 응답 타입
 */
export interface OrderListResponse {
    orders: Order[] // 주문 목록
    nextCursor: string | null // 다음 페이지 커서
    hasMore: boolean // 더 많은 데이터 존재 여부
    total: number // 전체 주문 수
}

/**
 * 주문 상태별 카운트 타입
 */
export interface OrderStatusCount {
    processing: number
    completed: number
    total: number
}
