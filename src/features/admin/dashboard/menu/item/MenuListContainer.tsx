import MenuItemList from './MenuItemList'
import { useMenuData } from '../model'
import useMenuStore from '@/shared/admin/store/dashboard/menuStore'

export const MenuListContainer = () => {
    // Zustand 스토어에서 상태와 액션을 가져옵니다
    const { activeStatus, currentPage, itemsPerPage, handleMenuSelect } =
        useMenuStore()

    // 서버 데이터를 가져옵니다
    const { menus, isLoading, error } = useMenuData(
        activeStatus,
        currentPage,
        itemsPerPage
    )

    return (
        <MenuItemList
            menuItems={menus}
            isLoading={isLoading}
            isError={!!error}
            error={error}
            onMenuSelect={handleMenuSelect}
            activeStatus={typeof activeStatus === 'string' ? activeStatus : ''}
        />
    )
}
