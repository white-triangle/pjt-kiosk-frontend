import { api } from '../../../../../shared/admin/api'
import { Menu, MenuListResponse, MenuFilterOptions } from '../../model/types'

/**
 * 메뉴 목록을 가져오는 API 함수
 */
export const fetchMenuList = async (
    options: MenuFilterOptions = {}
): Promise<MenuListResponse> => {
    const { category, availability, page = 1, limit = 10 } = options

    const params: Record<string, string | number> = {
        page,
        limit,
    }

    if (category && category !== 'all') {
        params.category = category
    }

    if (availability && availability !== 'all') {
        params.availability = availability
    }

    return api.get<MenuListResponse>('/menus', { params })
}

/**
 * 메뉴 상세 정보를 가져오는 API 함수
 */
export const fetchMenuById = async (id: number): Promise<Menu> => {
    return api.get<Menu>(`/menus/${id}`)
}
