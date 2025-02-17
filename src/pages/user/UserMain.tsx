import NavigationBar from '@/shared/user/ui/NavigationBar'
import UserOrder from './order'
import './UserMain.scss'
import HeaderNavigationBar from '@/shared/user/ui/HeaderNavigationBar'
import UserDetail from './detail'

export default function UserMain() {
    return (
        <div className='user-main'>
            <div className='user-wrap'>
                <HeaderNavigationBar />
                <div className='content-wrapper'>
                    {/* <UserOrder /> */}
                    <UserDetail/>
                </div>
                <NavigationBar/>
            </div>
        </div>
    )
}
