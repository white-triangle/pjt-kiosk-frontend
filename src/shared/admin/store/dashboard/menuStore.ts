import { create } from 'zustand'
import { Menu } from '@/entities/admin/dashboard/model/types'
import { MenuStatusType } from '@/features/admin/dashboard/menu/model'

// 향후 타입 관련하여 논의 필요 (어떻게 관리할건지)
interface MenuState {
    currentPage: number
    // available, soldout
    activeStatus: MenuStatusType
    selectedMenu: Menu | null
    itemsPerPage: number
    totalPages: number

    //액션
    setCurrentPage: (page: number) => void
    setActiveStatus: (status: MenuStatusType) => void
    setSelectedMenu: (menu: Menu | null) => void
    setTotalPages: (total: number) => void

    //액션
    handleStatusChange: (status: MenuStatusType) => void
    handleMenuSelect: (menu: Menu) => void
    closeMenuDetail: () => void
    resetPagination: () => void
    goToNextPage: () => void
    goToPrevPage: () => void
    goToFirstPage: () => void
    goToLastPage: () => void
}

const useMenuStore = create<MenuState>((set, get) => ({
    // 초기 상태
    currentPage: 1,
    activeStatus: 'available',
    selectedMenu: null,
    // 페이지네이션 dot에 영향(수정 시 매우주의, 현재 2개로 설정)
    itemsPerPage: 2,
    totalPages: 1,

    // 상태 변경 액션
    setCurrentPage: (page) => set({ currentPage: page }),
    setActiveStatus: (status) => set({ activeStatus: status }),
    setSelectedMenu: (menu) => set({ selectedMenu: menu }),
    setTotalPages: (total) => set({ totalPages: total }),

    // 랜더링 조건 액션
    handleStatusChange: (status) =>
        set({
            activeStatus: status,
            currentPage: 1, // 상태가 변경되면 페이지를 1로 리셋
        }),

    handleMenuSelect: (menu) => set({ selectedMenu: menu }),

    closeMenuDetail: () => set({ selectedMenu: null }),

    resetPagination: () => set({ currentPage: 1 }),

    // 페이지네이션 관련 액션
    goToNextPage: () => {
        const { currentPage, totalPages } = get()
        if (currentPage < totalPages) {
            set({ currentPage: currentPage + 1 })
        }
    },

    goToPrevPage: () => {
        const { currentPage } = get()
        if (currentPage > 1) {
            set({ currentPage: currentPage - 1 })
        }
    },

    goToFirstPage: () => set({ currentPage: 1 }),

    goToLastPage: () => {
        const { totalPages } = get()
        set({ currentPage: totalPages })
    },
}))

export default useMenuStore
