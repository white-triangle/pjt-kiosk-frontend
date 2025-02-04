import MenuList from './ui/MenuList'
import MenuStatus from './ui/MenuStatus'

export default function MenuManagementWidget() {
    return (
        <div>
            <div className='widget-header'>메뉴 현황</div>
            <MenuStatus />
            <MenuList />
        </div>
    )
}
