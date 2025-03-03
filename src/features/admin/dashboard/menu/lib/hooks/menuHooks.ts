import { Menu, MenuCategory } from '@/entities/admin/dashboard/model/types'
import { useMenuData } from '../../model/menuModel'
import { MenuData } from '../../type/menuInterface'

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
 * 카테고리별 메뉴  훅
 */
export const useCategoryMenuData = (
    category: MenuCategory,
    page: number = 1,
    limit: number = 10,
    searchTerm?: string
): MenuData => {
    return useMenuData(category, page, limit, searchTerm)
}
