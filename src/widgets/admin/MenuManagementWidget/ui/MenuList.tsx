import MenuContainer from '@/features/admin/dashboard/menu/ui'
import '../style/MenuList.scss'

export default function MenuList() {
    // 이미지,메뉴명,카테고리,가격
    return (
        <div className='menu-list__container'>
            {/* <MenuHeader /> */}
            {/* <MenuItems /> */}
            <MenuContainer />
        </div>
    )
}
