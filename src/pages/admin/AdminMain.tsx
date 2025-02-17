import NavigationBar from '@/shared/admin/ui/NavigationBar'
import SideNavigationBar from '@/shared/admin/ui/SideNavigationBar'
import AdminDashboard from './dashboard'
import Menu from './menu'
import './AdminMain.scss'
import Table from './table'
export default function AdminMain() {
    return (
        <div className='admin-main'>
            <NavigationBar />
            <SideNavigationBar />
            <div className='content-wrapper'>
                {/* <AdminDashboard /> */}
                {/* <Menu /> */}
                <Table />
            </div>
        </div>
    )
}
