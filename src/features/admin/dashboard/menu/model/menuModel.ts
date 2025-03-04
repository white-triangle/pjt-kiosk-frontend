import {
    MenuCategory,
    MenuFilterOptions,
    Menu,
} from '@/entities/admin/dashboard/model/types'
import {
    filterAvailableMenus,
    filterSoldOutMenus,
    filterMenusByCategory,
    filterMenusBySearchTerm,
    getMenusFromResponse,
    getTotalPagesFromResponse,
    getCurrentPageFromResponse,
    getMenuAvailabilityLabel,
    getMenuCategoryLabel,
} from '@/entities/admin/dashboard/model/menuStatusselectors'
import { useMemo } from 'react'
import { useMenuList } from '@/entities/admin/dashboard'
import { MenuData } from '../type/menuInterface'

// 메뉴 상태 타입 정의 (availability 파라미터에 맞춰 정의)
export type MenuStatusType = 'available' | 'soldout'

export const createMenuFilterOptions = (
    activeStatus: MenuStatusType | MenuCategory,
    page: number = 1,
    limit: number = 10
): MenuFilterOptions => {
    const options: MenuFilterOptions = {
        page,
        limit,
    }

    if (activeStatus === 'available' || activeStatus === 'soldout') {
        options.availability = activeStatus
    } else {
        options.category = activeStatus
    }

    return options
}

/**
 * 메뉴 데이터를 가져오는 훅 selector 함수 적용로직
 */
export const useMenuData = (
    activeStatus: MenuStatusType | MenuCategory,
    page: number = 1,
    limit: number = 10,
    searchTerm?: string
): MenuData => {
    const queryParams = createMenuFilterOptions(activeStatus, page, limit)

    const { data, isLoading, error } = useMenuList(queryParams)

    const processedData = useMemo(() => {
        // entities 레이어의 selector 함수 사용하여 정재
        const menus = getMenusFromResponse(data)
        const totalPages = getTotalPagesFromResponse(data, 1)
        const currentPage = getCurrentPageFromResponse(data, page)
        //  최종 정재 데이터
        const filteredMenus = menus

        return {
            menus: filteredMenus,
            totalPages,
            currentPage,
        }
    }, [data, searchTerm, page])

    return {
        ...processedData,
        isLoading,
        error,
    }
}

/**
 * 판매 가능 메뉴 훅
 */
export const useAvailableMenuData = (
    page: number = 1,
    limit: number = 10,
    searchTerm?: string
): MenuData => {
    return useMenuData('available', page, limit, searchTerm)
}

/**
 * 불가능 메뉴 훅
 */
export const useSoldOutMenuData = (
    page: number = 1,
    limit: number = 10,
    searchTerm?: string
): MenuData => {
    return useMenuData('soldout', page, limit, searchTerm)
}

/**
 * 카테고리별 메뉴 훅
 */
export const useCategoryMenuData = (
    category: MenuCategory,
    page: number = 1,
    limit: number = 10,
    searchTerm?: string
): MenuData => {
    return useMenuData(category, page, limit, searchTerm)
}

export { type MenuFilterOptions, type MenuCategory }
