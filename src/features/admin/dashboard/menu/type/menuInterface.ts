import { Menu } from '@/entities/admin/dashboard/model/types'

export interface MenuData {
    menus: Menu[]
    totalPages: number
    currentPage: number
    isLoading: boolean
    error: any
}
