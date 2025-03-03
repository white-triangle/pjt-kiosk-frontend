// 메뉴 카테고리 타입
export type MenuCategory = 'meal' | 'drink' | 'other'

// 메뉴 카테고리 레이블 맵핑
export const MENU_CATEGORY_LABELS: Record<MenuCategory, string> = {
    meal: '식사',
    drink: '음료',
    other: '기타',
}

// 기본 메뉴 타입
export interface Menu {
    id: number
    name: string
    category: MenuCategory
    price: number
    imageUrl: string
    isAvailable: boolean
    createdAt: string
    updatedAt: string
}

// 메뉴 생성 요청 타입
export type CreateMenuDto = Omit<Menu, 'id' | 'createdAt' | 'updatedAt'>

// 메뉴 수정 요청 타입
export type UpdateMenuDto = Partial<CreateMenuDto>

// 메뉴 상태 변경 요청 타입
export interface UpdateMenuAvailabilityDto {
    isAvailable: boolean
}

// 메뉴 목록 응답 타입
export interface MenuListResponse {
    menus: Menu[]
    meta: {
        total: number
        page: number
        limit: number
        totalPages: number
    }
}

// 메뉴 필터링 옵션 타입
export interface MenuFilterOptions {
    category?: MenuCategory | 'all'
    availability?: 'available' | 'soldout' | 'all'
    page?: number
    limit?: number
}
