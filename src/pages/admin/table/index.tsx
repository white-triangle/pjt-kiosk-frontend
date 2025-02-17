import './style/Table.scss'
import TableWidget from '@/widgets/admin/TableWidget'
export default function Table() {
    return (
        <div className='table-container'>
            <div className='table-container__item'>
                <TableWidget />
            </div>
        </div>
    )
}
