import { Table } from '@/entities/admin/dashboard/model/types/tableTypes'
import { TableStatus } from '../model'

interface TableItemListProps {
    tableItems: Table[]
    isLoading: boolean
    isError: boolean
    error: any
    onTableSelect?: (table: Table) => void
    activeStatus: TableStatus | string
}

export default function TableItemList({
    tableItems,
    isLoading,
    isError,
    error,
    onTableSelect = () => {},
    activeStatus,
}: TableItemListProps) {
    if (isLoading) {
        return (
            <div className='loading-state py-8 text-center'>
                <p>테이블 정보를 불러오는 중...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className='error-state py-8 text-center text-red-500'>
                <p>오류가 발생했습니다. 다시 시도해주세요.</p>
                <p className='text-sm'>{error?.message}</p>
            </div>
        )
    }

    if (tableItems.length === 0) {
        return (
            <div className='empty-state py-8 text-center'>
                <p>표시할 테이블이 없습니다.</p>
            </div>
        )
    }

    return (
        <div className='table-item-list'>
            <div className='grid'>
                {tableItems.map((table) => (
                    <div
                        key={table.id}
                        className={`table-item ${
                            table.status === 'available'
                                ? 'status-available'
                                : 'status-occupied'
                        }`}
                        onClick={() => onTableSelect(table)}>
                        <div className='table-number font-bold text-lg mb-2'>
                            테이블 {table.tableNumber}
                        </div>
                        <div className='table-capacity text-sm mb-2'>
                            수용 인원: {table.capacity}명
                        </div>
                        <div className='table-status text-sm font-medium'>
                            {table.status === 'available'
                                ? '사용 가능'
                                : '사용 중'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
