import TableStatus from './ui/TableStatus'
import TableList from './ui/TableList'
import '@/shared/admin/styles/Widget.scss'
import './style/TableStatusWidget.scss'

export default function TableStatusWidget() {
    return (
        <div>
            <div className='widget-header'>테이블 현황</div>
            <div className='widget'>
                <div className='widget-content'>
                    <TableStatus />
                    <TableList />
                </div>
            </div>
        </div>
    )
}
