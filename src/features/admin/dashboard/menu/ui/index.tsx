import { useEffect } from 'react'
import '@/features/admin/dashboard/menu/style/MenuList.scss'
import { MenuTab } from '../tab'
import MenuHeader from './MenuHeader'
import { MenuListContainer } from '../item'
import { MenuPaginationContainer } from '../pagination'
import MenuDetailModal from '../modal/MenuDetailModal'
import useMenuStore from '@/shared/admin/store/dashboard/menuStore'

export default function MenuContainer() {
    // Zustand 스토어에서 상태와 액션을 가져옵니다
    const {
        currentPage,
        activeStatus,
        selectedMenu,
        itemsPerPage,
        handleStatusChange,
        handleMenuSelect,
        closeMenuDetail,
        setCurrentPage,
    } = useMenuStore()

    // ESC 키로 모달 닫기
    useEffect(() => {
        const handleKeyDown = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMenuDetail()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [closeMenuDetail])

    return (
        <div className='menu-container mb-10'>
            <MenuTab
                activeStatus={activeStatus}
                onStatusChange={handleStatusChange}
            />
            <MenuHeader />

            <MenuListContainer />

            <div className='pagination-wrapper '>
                <MenuPaginationContainer />
            </div>

            {selectedMenu && (
                <MenuDetailModal
                    selectedMenu={selectedMenu}
                    onClose={closeMenuDetail}
                />
            )}
        </div>
    )
}
