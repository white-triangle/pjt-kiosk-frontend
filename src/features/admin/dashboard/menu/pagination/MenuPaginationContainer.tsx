import { useCallback, useEffect } from 'react'
import { useMenuData } from '../model'
import MenuPagination from './MenuPagination'
import useMenuStore from '@/shared/admin/store/dashboard/menuStore'

export const MenuPaginationContainer = () => {
    // Zustand 스토어에서 상태와 액션을 가져옵니다
    const {
        activeStatus,
        currentPage,
        itemsPerPage,
        setCurrentPage,
        setTotalPages,
    } = useMenuStore()

    // 서버 데이터를 가져옵니다
    const { totalPages } = useMenuData(activeStatus, currentPage, itemsPerPage)

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
        <MenuPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
        />
    )
}
