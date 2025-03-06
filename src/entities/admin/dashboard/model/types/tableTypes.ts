/**
 * 테이블 상태 타입
 */
export type TableStatus = 'available' | 'occupied' | 'all'

/**
 * 테이블 데이터 타입
 */
export interface Table {
    id: number
    tableNumber: number
    capacity: number
    status: Exclude<TableStatus, 'all'>
}

/**
 * 테이블 API 필터 옵션
 */
export interface TableFilterOptions {
    page: number
    limit: number
    status?: Exclude<TableStatus, 'all'>
}

/**
 * 테이블 목록 응답 타입
 */
export interface TableListResponse {
    tables: Table[]
    pagination: {
        currentPage: number
        totalPages: number
        totalItems: number
        itemsPerPage: number
    }
}

/**
 * 테이블 상태 표시 레이블
 */
export const TABLE_STATUS_LABELS: Record<TableStatus, string> = {
    all: '전체',
    available: '사용 가능',
    occupied: '사용 중',
}
