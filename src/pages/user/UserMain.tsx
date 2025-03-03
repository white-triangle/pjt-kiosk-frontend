import NavigationBar from '@/shared/user/ui/NavigationBar'
import './UserMain.scss'
import HeaderNavigationBar from '@/shared/user/ui/HeaderNavigationBar'
import { Outlet, useLocation } from 'react-router-dom'

export default function UserMain() {
    const location = useLocation()
    const isDetailPage = location.pathname.startsWith('/detail/')
    return (
        <div className='user-main'>
            <div className='user-wrap'>
                <HeaderNavigationBar />
                <div className='content-wrapper'>
                    <Outlet />
                </div>
                {/* Detail 페이지에서는 안나오도록 */}
                {!isDetailPage && <NavigationBar />}
            </div>
        </div>
    )
}
