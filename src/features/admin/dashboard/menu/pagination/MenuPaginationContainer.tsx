import { useCallback, useEffect } from 'react'
import { useMenuData } from '../model'
import MenuPagination from './MenuPagination'
import useMenuStore from '@/shared/admin/store/dashboard/menuStore'

export const MenuPaginationContainer = () => {
    const {
        activeStatus,
        currentPage,
        itemsPerPage,
        setCurrentPage,
        setTotalPages,
    } = useMenuStore()

    const { totalPages } = useMenuData(activeStatus, currentPage, itemsPerPage)

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
        <MenuPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
    )
}
