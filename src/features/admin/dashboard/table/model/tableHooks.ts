import { useMemo } from 'react'
import { useTableList } from '@/entities/admin/dashboard/api/table'
import { TableSelectors } from '@/entities/admin/dashboard'
import { TableStatus } from '@/entities/admin/dashboard/model/types/tableTypes'
import { TableData } from './tableModel'

export const useTableData = (
    status: TableStatus = 'all',
    page: number = 1,
    limit: number = 5
): TableData => {
    const { data, isLoading, error } = useTableList()

    const processedData = useMemo(() => {
        if (!data) {
            return {
                tables: [],
                allTables: [],
                totalPages: 0,
                currentPage: page,
                totalItems: 0,
                isLoading,
                error,
            }
        }

        const filteredTables = TableSelectors.filterTablesByStatus(data, status)
        const totalItems = filteredTables.length

        const totalPages = TableSelectors.calculateTotalPages(totalItems, limit)
        const paginatedTables = TableSelectors.paginateData(
            filteredTables,
            page,
            limit
        )

        return {
            tables: paginatedTables,
            allTables: filteredTables,
            totalPages,
            currentPage: page,
            totalItems,
            isLoading,
            error,
        }
    }, [data, status, page, limit, isLoading, error])

    return processedData
}

export const useAvailableTableData = (
    page: number = 1,
    limit: number = 4
): TableData => {
    return useTableData('available', page, limit)
}

export const useOccupiedTableData = (
    page: number = 1,
    limit: number = 4
): TableData => {
    return useTableData('occupied', page, limit)
}
