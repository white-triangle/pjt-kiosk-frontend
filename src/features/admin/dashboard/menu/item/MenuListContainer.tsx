import { MenuCategory, Menu } from '@/entities/admin/dashboard/model/types'
import MenuItemList from './MenuItemList'
import { MenuStatusType, useMenuData } from '../model'

interface MenuListContainerProps {
    activeStatus: MenuStatusType | MenuCategory
    page: number
    limit?: number
    searchTerm?: string
    onMenuSelect?: (menu: Menu) => void
}

export const MenuListContainer = ({
    activeStatus,
    page,
    limit = 10,
    searchTerm,
    onMenuSelect = () => {},
}: MenuListContainerProps) => {
    const { menus, isLoading, error } = useMenuData(
        activeStatus,
        page,
        limit,
        searchTerm
    )

    return (
        <MenuItemList
            menuItems={menus}
            isLoading={isLoading}
            isError={!!error}
            error={error}
            onMenuSelect={onMenuSelect}
            activeStatus={typeof activeStatus === 'string' ? activeStatus : ''}
        />
    )
}
