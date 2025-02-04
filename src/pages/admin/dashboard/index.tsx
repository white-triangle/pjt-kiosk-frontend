import OrderStatusWidget from '@/widgets/admin/OrderStatusWidget'
import MenuManagementWidget from '@/widgets/admin/MenuManagementWidget'
import TableStatusWidget from '@/widgets/admin/TableStatusWidget'
import './Dashboard.scss'

export default function AdminDashboard() {
    return (
        <div className='dashboard'>
            <div className='dashboard__flex'>
                <div className='dashboard__item'>
                    <MenuManagementWidget />
                </div>
                <div className='dashboard__item'>
                    <TableStatusWidget />
                </div>
                <div className='dashboard__item'>
                    <OrderStatusWidget />
                </div>
            </div>
        </div>
    )
}
