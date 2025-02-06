import UserOrder from './order'
import './UserMain.scss'
import HeaderNavigationBar from '@/shared/user/ui/HeaderNavigationBar'

export default function UserMain() {
    return (
        <div className='user-main'>
            <div className='user-wrap'>
                <HeaderNavigationBar />
                <div className='content-wrapper'>
                    <UserOrder />
                </div>
            </div>
        </div>
    )
}
