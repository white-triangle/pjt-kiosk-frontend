import { useCallback } from 'react'
import { MenuCategory } from '@/entities/admin/dashboard/model/types'
import { MenuStatusType, useMenuData } from '../model'
import MenuPagination from './MenuPagination'

interface MenuPaginationContainerProps {
    activeStatus: MenuStatusType | MenuCategory
    currentPage: number
    onPageChange: (page: number) => void
    limit?: number
    searchTerm?: string
}

export const MenuPaginationContainer = ({
    activeStatus,
    currentPage,
    onPageChange,
    limit = 10,
    searchTerm,
}: MenuPaginationContainerProps) => {
    const { totalPages } = useMenuData(
        activeStatus,
        currentPage,
        limit,
        searchTerm
    )

    const handlePageChange = useCallback(
        (page: number) => {
            onPageChange(page)
        },
        [onPageChange]
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
