import MenuWidget from '@/widgets/admin/MenuWidget'
import './style/Menu.scss'

export default function Menu() {
    return (
        <div className='menu-container'>
            <div className='menu-container__item'>
                <MenuWidget />
            </div>
        </div>
    )
}
