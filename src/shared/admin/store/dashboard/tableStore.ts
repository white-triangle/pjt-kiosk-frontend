import { create } from 'zustand'
import {
    Table,
    TableStatus,
} from '@/entities/admin/dashboard/model/types/tableTypes'

interface TableState {
    currentPage: number
    // 현재 필터링된 상태 (all, available, occupied)
    activeStatus: TableStatus
    selectedTable: Table | null
    itemsPerPage: number
    totalPages: number

    // 기본 액션
    setCurrentPage: (page: number) => void
    setActiveStatus: (status: TableStatus) => void
    setSelectedTable: (table: Table | null) => void
    setTotalPages: (total: number) => void

    // 복합 액션
    handleStatusChange: (status: TableStatus) => void
    handleTableSelect: (table: Table) => void
    closeTableDetail: () => void
    resetPagination: () => void
    goToNextPage: () => void
    goToPrevPage: () => void
    goToFirstPage: () => void
    goToLastPage: () => void
}

const useTableStore = create<TableState>((set, get) => ({
    currentPage: 1,
    activeStatus: 'all',
    selectedTable: null,
    // 페이지당 아이템 수
    itemsPerPage: 4,
    totalPages: 1,

    // 기본 액션
    setCurrentPage: (page) => set({ currentPage: page }),
    setActiveStatus: (status) => set({ activeStatus: status }),
    setSelectedTable: (table) => set({ selectedTable: table }),
    setTotalPages: (total) => set({ totalPages: total }),

    // 복합 액션
    handleStatusChange: (status) =>
        set({
            activeStatus: status,
            currentPage: 1, // 상태가 변경되면 페이지를 1로 리셋
        }),

    handleTableSelect: (table) => set({ selectedTable: table }),

    closeTableDetail: () => set({ selectedTable: null }),

    resetPagination: () => set({ currentPage: 1 }),

    // 페이지네이션 관련 유틸리티 함수
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

    //여기까지 페이지네이션 유틸
}))

export default useTableStore
