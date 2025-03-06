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

    // 서버 데이터를 가져옵니다
    const { totalPages } = useTableData(activeStatus, currentPage, itemsPerPage)

    // 서버에서 받은 totalPages를 스토어에 동기화합니다
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
