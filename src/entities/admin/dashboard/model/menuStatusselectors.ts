import {
    Menu,
    MenuCategory,
    MENU_CATEGORY_LABELS,
    MenuListResponse,
} from './types'

/**
 * 메뉴 가용성 상태에 따른 라벨을 반환합니다.
 */
export const getMenuAvailabilityLabel = (isAvailable: boolean): string => {
    return isAvailable ? '판매중' : '품절'
}

/**
 * 메뉴 카테고리 한글 이름을 반환합니다.
 */
export const getMenuCategoryLabel = (category: MenuCategory): string => {
    return MENU_CATEGORY_LABELS[category]
}

/**
 * 판매 가능한 메뉴만 필터링합니다.
 */
export const filterAvailableMenus = (menus: Menu[]): Menu[] => {
    return menus.filter((menu) => menu.isAvailable)
}

/**
 * 품절된 메뉴만 필터링합니다.
 */
export const filterSoldOutMenus = (menus: Menu[]): Menu[] => {
    return menus.filter((menu) => !menu.isAvailable)
}

/**
 * 카테고리별 메뉴를 필터링합니다.
 */
export const filterMenusByCategory = (
    menus: Menu[],
    category: MenuCategory
): Menu[] => {
    return menus.filter((menu) => menu.category === category)
}

/**
 * 검색어에 맞는 메뉴를 필터링합니다.
 */
export const filterMenusBySearchTerm = (
    menus: Menu[],
    searchTerm: string
): Menu[] => {
    if (!searchTerm.trim()) return menus

    const normalizedTerm = searchTerm.toLowerCase().trim()
    return menus.filter((menu) =>
        menu.name.toLowerCase().includes(normalizedTerm)
    )
}

/**
 * API 응답에서 메뉴 목록을 추출합니다.
 */
export const getMenusFromResponse = (
    response: MenuListResponse | undefined
): Menu[] => {
    return response?.menus || []
}

/**
 * API 응답에서 총 페이지 수를 추출합니다.
 */
export const getTotalPagesFromResponse = (
    response: MenuListResponse | undefined,
    defaultValue: number = 1
): number => {
    return response?.meta?.totalPages || defaultValue
}

/**
 * API 응답에서 현재 페이지를 추출합니다.
 */
export const getCurrentPageFromResponse = (
    response: MenuListResponse | undefined,
    defaultValue: number = 1
): number => {
    return response?.meta?.page || defaultValue
}

/**
 * 메뉴 상태 값을 API 파라미터로 변환합니다.
 */
export const getAvailabilityParam = (isAvailable: boolean): string => {
    return isAvailable ? 'available' : 'soldout'
}
