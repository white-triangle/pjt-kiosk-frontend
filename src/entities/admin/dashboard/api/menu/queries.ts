import { useQuery } from '@tanstack/react-query'
import { fetchMenuList, fetchMenuById } from './menuManagementApi'
import { MenuFilterOptions } from '../../model/types'

// 쿼리 키
export const menuKeys = {
    all: ['menus'] as const,
    lists: () => [...menuKeys.all, 'list'] as const,
    list: (filters: MenuFilterOptions) =>
        [...menuKeys.lists(), filters] as const,
    details: () => [...menuKeys.all, 'detail'] as const,
    detail: (id: number) => [...menuKeys.details(), id] as const,
}

/**
 * 메뉴 목록을 가져오는 쿼리 훅
 */
export const useMenuList = (options: MenuFilterOptions = {}) => {
    return useQuery({
        queryKey: menuKeys.list(options),
        queryFn: () => fetchMenuList(options),
    })
}

/**
 * 메뉴 상세 정보를 가져오는 쿼리 훅
 */
export const useMenuDetail = (id: number) => {
    return useQuery({
        queryKey: menuKeys.detail(id),
        queryFn: () => fetchMenuById(id),
        enabled: !!id,
    })
}
