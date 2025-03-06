import { useMemo } from 'react'
import { useTableList } from '@/entities/admin/dashboard/api/table'
import {
    calculateTotalPages,
    paginateData,
    filterTablesByStatus,
} from '@/entities/admin/dashboard/model/tableSelectors'
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

        // 텝 컴포넌트에 사용하기위한 data 필터링(관심사 분리)
        const filteredTables = filterTablesByStatus(data, status)
        const totalItems = filteredTables.length

        const totalPages = calculateTotalPages(totalItems, limit)
        const paginatedTables = paginateData(filteredTables, page, limit)

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
