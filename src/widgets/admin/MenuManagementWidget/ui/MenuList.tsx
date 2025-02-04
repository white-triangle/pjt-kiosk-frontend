import MenuHeader from './MenuHeader'
import MenuItems from './MenuItems'

export default function MenuList() {
    // 이미지,메뉴명,카테고리,가격
    return (
        <div className='flex flex-col gap-4'>
            <MenuHeader />
            <MenuItems />
        </div>
    )
}
