import { useCallback, useEffect } from 'react'
import { useTableData } from '../model'
import TablePagination from './TablePagination'
import useTableStore from '@/shared/admin/store/dashboard/tableStore'

export const TablePaginationContainer = () => {
    const {
        activeStatus,
        currentPage,
        itemsPerPage,
        setCurrentPage,
        setTotalPages,
    } = useTableStore()

    const { totalPages } = useTableData(activeStatus, currentPage, itemsPerPage)

    useEffect(() => {
        setTotalPages(totalPages)
    }, [totalPages, setTotalPages])

    const handlePageChange = useCallback(
        (page: number) => {
            setCurrentPage(page)
        },
        [setCurrentPage]
    )

    if (totalPages <= 1) {
        return null
    }

    return (
        <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
    )
}
