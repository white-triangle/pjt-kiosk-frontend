import { Outlet } from 'react-router-dom'
import NavigationBar from '@/shared/admin/ui/NavigationBar'
import SideNavigationBar from '@/shared/admin/ui/SideNavigationBar'
import './AdminMain.scss'

export default function AdminMain() {
    return (
        <div className='admin-main'>
            <NavigationBar />
            <SideNavigationBar />
            <div className='content-wrapper'>
                <Outlet />
            </div>
        </div>
    )
}
