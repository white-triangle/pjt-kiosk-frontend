import { Table } from '@/entities/admin/dashboard/model/types/tableTypes'

export interface TableData {
    tables: Table[] // 현재 페이지의 테이블 데이터
    allTables?: Table[] // 모든 테이블 데이터 (클라이언트 측 페이지네이션용)
    totalPages: number
    currentPage: number
    totalItems: number
    isLoading: boolean
    error: any
}

export type TableStatus = 'occupied' | 'available' | 'all'
