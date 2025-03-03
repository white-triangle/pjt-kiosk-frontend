import { useState, useCallback, useEffect } from 'react'
import '@/features/admin/dashboard/menu/style/MenuList.scss'
import { Menu } from '@/entities/admin/dashboard/model/types'
import { MenuTab } from '../tab'
import MenuHeader from './MenuHeader'
import { MenuListContainer } from '../item'
import { MenuPaginationContainer } from '../pagination'
import MenuDetailModal from '../modal/MenuDetailModal'
import { MenuStatusType } from '../model'

export default function MenuItems() {
    // UI 상태 관리 (추후 zustand store로 이전)
    const [currentPage, setCurrentPage] = useState(1) // API는 1부터 시작
    const [activeStatus, setActiveStatus] =
        useState<MenuStatusType>('available')
    const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null) // 선택된 메뉴 상태
    const itemsPerPage = 2 // 한 페이지당 보여줄 아이템 수

    // 상태가 변경될 때 페이지를 처음으로 리셋
    const handleStatusChange = useCallback((status: MenuStatusType) => {
        setActiveStatus(status)
        setCurrentPage(1) // 페이지를 1로 리셋
    }, [])

    // 메뉴 선택 핸들러
    const handleMenuSelect = useCallback((menu: Menu) => {
        setSelectedMenu(menu)
    }, [])

    // 메뉴 상세 모달 닫기
    const closeMenuDetail = useCallback(() => {
        setSelectedMenu(null)
    }, [])

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

            <MenuListContainer
                activeStatus={activeStatus}
                page={currentPage}
                limit={itemsPerPage}
                onMenuSelect={handleMenuSelect}
            />

            <div className='pagination-wrapper '>
                <MenuPaginationContainer
                    activeStatus={activeStatus}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    limit={itemsPerPage}
                />
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
