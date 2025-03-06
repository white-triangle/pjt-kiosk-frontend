import { Table, TableListResponse, TableStatus } from './types/tableTypes'

/**
 * 테이블 목록 응답에서 테이블 데이터 추출
 */
export const getTablesFromResponse = (
    response: TableListResponse | undefined
): Table[] => {
    return response?.tables || []
}

/**
 * 테이블 목록 응답에서 현재 페이지 추출
 */
export const getCurrentPageFromResponse = (
    response: TableListResponse | undefined,
    defaultPage: number
): number => {
    return response?.pagination.currentPage || defaultPage
}

/**
 * 테이블 목록 응답에서 전체 페이지 수 추출
 */
export const getTotalPagesFromResponse = (
    response: TableListResponse | undefined,
    defaultTotal: number
): number => {
    return response?.pagination.totalPages || defaultTotal
}

/**
 * 테이블 목록 응답에서 전체 아이템 수 추출
 */
export const getTotalItemsFromResponse = (
    response: TableListResponse | undefined,
    defaultTotal: number
): number => {
    return response?.pagination.totalItems || defaultTotal
}

/**
 * 클라이언트 측 페이지네이션 - 전체 페이지 수 계산
 */
export const calculateTotalPages = (
    totalItems: number,
    itemsPerPage: number
): number => {
    return Math.ceil(totalItems / itemsPerPage)
}

/**
 * 클라이언트 측 페이지네이션 - 현재 페이지 데이터 추출
 */
export const paginateData = <T>(
    items: T[],
    currentPage: number,
    itemsPerPage: number
): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, items.length)
    return items.slice(startIndex, endIndex)
}

/**
 * 테이블 상태에 따라 테이블 필터링
 */
export const filterTablesByStatus = (
    tables: TableListResponse | undefined,
    status: TableStatus
): Table[] => {
    if (status === 'all') {
        return tables?.tables || []
    }
    return tables?.tables.filter((table) => table.status === status) || []
}

/**
 * 테이블 검색어에 따라 테이블 필터링
 */
export const filterTablesBySearchTerm = (
    tables: Table[],
    searchTerm?: string
): Table[] => {
    if (!searchTerm || searchTerm.trim() === '') {
        return tables
    }

    const term = searchTerm.toLowerCase().trim()
    return tables.filter((table) => {
        return (
            table.tableNumber.toString().includes(term) ||
            table.capacity.toString().includes(term)
        )
    })
}

/**
 * 테이블 상태 레이블 가져오기
 */
export const getTableStatusLabel = (status: TableStatus): string => {
    switch (status) {
        case 'available':
            return '사용 가능'
        case 'occupied':
            return '사용 중'
        case 'all':
            return '전체'
        default:
            return '알 수 없음'
    }
}

/**
 * 테이블 상태에 따른 클래스 이름 가져오기
 */
export const getTableStatusClassName = (status: TableStatus): string => {
    switch (status) {
        case 'available':
            return 'status-available'
        case 'occupied':
            return 'status-occupied'
        default:
            return ''
    }
}
