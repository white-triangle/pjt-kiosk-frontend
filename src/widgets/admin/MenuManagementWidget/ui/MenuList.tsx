// import MenuHeader from './MenuHeader'
// import MenuItems from './MenuItems'

import '../style/MenuList.scss'
import { MenuItems } from '@/features/admin/dashboard/menu'

export default function MenuList() {
    // 이미지,메뉴명,카테고리,가격
    return (
        <div className='menu-list__container'>
            {/* <MenuHeader /> */}
            {/* <MenuItems /> */}
            <MenuItems />
        </div>
    )
}
