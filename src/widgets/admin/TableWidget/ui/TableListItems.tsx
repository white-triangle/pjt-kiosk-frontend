import '@/widgets/admin/TableWidget/style/TableWidget.scss'
import { HiUsers } from 'react-icons/hi2'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'

interface TableItem {
    id: string
    capacity: number
    status: 'available' | 'inUse'
}

interface TableListItemsProps {
    items: TableItem[]
    onEdit: (id: string) => void
    onDelete: (id: string) => void
}

export default function TableListItems({
    items,
    onEdit,
    onDelete,
}: TableListItemsProps) {
    return (
        <div className='table-list-items'>
            {items.map((table) => (
                <div key={table.id} className='table-list-item'>
                    <div className='table-list-cell table-list-cell__id'>
                        {table.id}
                    </div>
                    <div className='table-list-cell table-list-cell__capacity'>
                        <HiUsers className='capacity-icon' />
                        <span>{table.capacity}인</span>
                    </div>
                    <div className='table-list-cell table-list-cell__status'>
                        <span
                            className={`status-badge ${
                                table.status === 'available'
                                    ? 'status-badge--available'
                                    : 'status-badge--in-use'
                            }`}>
                            <div
                                className={`status-dot ${
                                    table.status === 'available'
                                        ? 'status-dot--available'
                                        : 'status-dot--in-use'
                                }`}
                            />
                            {table.status === 'available'
                                ? '사용가능'
                                : '사용 중'}
                        </span>
                    </div>
                    <div className='table-list-cell table-list-cell__actions'>
                        <button
                            onClick={() => onEdit(table.id)}
                            className='action-button action-button--edit'
                            title='수정'>
                            <FiEdit2 />
                        </button>
                        <button
                            onClick={() => onDelete(table.id)}
                            className='action-button action-button--delete'
                            title='삭제'>
                            <RiDeleteBinLine />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
