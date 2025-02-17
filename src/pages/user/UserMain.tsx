import NavigationBar from '@/shared/user/ui/NavigationBar'
import UserItem from './item'
import UserOrder from './order'
import './UserMain.scss'
import HeaderNavigationBar from '@/shared/user/ui/HeaderNavigationBar'

export default function UserMain() {
    return (
        <div className='user-main'>
            <div className='user-wrap'>
                <HeaderNavigationBar />
                <div className='content-wrapper'>
                    {/* <UserOrder /> */}
                    <UserItem />
                </div>
                <NavigationBar/>
            </div>
        </div>
    )
}
