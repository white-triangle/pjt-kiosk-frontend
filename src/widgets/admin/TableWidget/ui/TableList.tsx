import { useState } from 'react'
import TableListHeader from './TableListHeader'
import TableListItems from './TableListItems'
import TablePagination from './TablePagination'

interface TableItem {
    id: string
    capacity: number
    status: 'available' | 'inUse'
}

export default function TableList() {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4 // 페이지당 보여줄 아이템 수

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

    // 현재 페이지에 표시할 아이템 계산
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = tables.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(tables.length / itemsPerPage)

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // 테이블 수정/삭제 핸들러
    const handleEdit = (id: string) => {
        console.log('Edit table:', id)
    }

    const handleDelete = (id: string) => {
        console.log('Delete table:', id)
    }

    return (
        <div>
            <TableListHeader />
            <TableListItems
                items={currentItems}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
