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
                {/* Detail 페이지에서는 안나오도록 */}
                {/* <NavigationBar/> */}
            </div>
        </div>
    )
}
