import { create } from 'zustand'
import { OrderStatus, Order } from '@/entities/admin/dashboard'

/**
 * 주문 상태 관리를 위한 스토어 타입 정의
 */
export interface OrderStore {
    // 상태 (state)
    activeStatus: OrderStatus | null // 현재 필터링된 주문 상태
    selectedOrder: Order | null // 현재 선택된 주문

    // 액션 (actions)
    setActiveStatus: (status: OrderStatus | null) => void // 필터 상태 변경
    selectOrder: (order: Order) => void // 주문 선택
    clearSelectedOrder: () => void // 선택된 주문 초기화
}

/**
 * 주문 상태 관리를 위한 Zustand 스토어
 * 필터링 상태 및 선택된 주문을 관리합니다.
 */
export const useOrderStore = create<OrderStore>((set) => ({
    // 초기 상태
    activeStatus: null, // 기본값: 전체 주문 (필터링 없음)
    selectedOrder: null, // 기본값: 선택된 주문 없음

    // 액션 구현
    setActiveStatus: (status) => {
        set((state) => ({
            activeStatus: status,
            // 상태가 변경되면 선택된 주문 초기화
            selectedOrder: null,
        }))
    },

    selectOrder: (order) => {
        set(() => ({ selectedOrder: order }))
    },

    clearSelectedOrder: () => {
        set(() => ({ selectedOrder: null }))
    },
}))
