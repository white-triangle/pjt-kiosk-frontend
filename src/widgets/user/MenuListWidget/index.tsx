import './style/MenuListWidget.scss'
import MenuCategory from './ui/MenuCategory'
import MenuList from './ui/MenuList'

export default function MenuListWidget() {
    return (
        <div className='menu-list-widget'>
            <MenuCategory />
            <MenuList />
        </div>
    )
}
