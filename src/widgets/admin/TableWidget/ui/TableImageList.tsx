import { useState } from 'react'
import '@/widgets/admin/TableWidget/style/TableWidget.scss'
import { BsTable } from 'react-icons/bs'

interface TableItem {
    id: string
    capacity: number
    status: 'available' | 'inUse'
}

export default function TableImageList() {
    // 테스트용 데이터
    const [tables] = useState<TableItem[]>([
        { id: 'T01', capacity: 4, status: 'available' },
        { id: 'T02', capacity: 2, status: 'inUse' },
        { id: 'T03', capacity: 6, status: 'available' },
        { id: 'T04', capacity: 4, status: 'inUse' },
        { id: 'T05', capacity: 8, status: 'available' },
        { id: 'T06', capacity: 2, status: 'inUse' },
        { id: 'T07', capacity: 4, status: 'available' },
        { id: 'T08', capacity: 6, status: 'inUse' },
    ])

    return (
        <div className='table-widget__image-section'>
            <div className='table-widget__image-list-container'>
                <div className='table-widget__image-list'>
                    {tables.map((table) => (
                        <div
                            key={table.id}
                            className={`table-widget__image-item ${
                                table.status === 'available'
                                    ? 'table-widget__image-item--available'
                                    : 'table-widget__image-item--in-use'
                            }`}>
                            <div className='table-widget__image-item__id'>
                                {table.id}
                            </div>
                            <div className='table-widget__image-item__status-indicator' />
                            <div className='table-widget__image-item__image'>
                                <BsTable />
                            </div>
                            <div className='table-widget__image-item__capacity'>
                                {table.capacity}인
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='table-widget__add-button'>
                <div className='table-widget__add-button__icon'>+</div>
                <div className='table-widget__add-button__text'>
                    새 테이블 추가
                </div>
            </div>
        </div>
    )
}
