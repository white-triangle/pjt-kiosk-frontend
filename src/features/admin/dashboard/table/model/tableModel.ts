import { Table } from '@/entities/admin/dashboard/model/types/tableTypes'

export interface TableData {
    tables: Table[]
    allTables?: Table[]
    totalPages: number
    currentPage: number
    totalItems: number
    isLoading: boolean
    error: any
}

export type TableStatus = 'occupied' | 'available' | 'all'
