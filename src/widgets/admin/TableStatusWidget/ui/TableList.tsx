import { useState, useCallback, WheelEvent } from 'react'
import '@/shared/admin/styles/Colors.scss'
import '../style/TableList.scss'

interface Table {
    id: number
    status: 'available' | 'inUse'
}

export default function TableList() {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 4 // 한 페이지당 보여줄 테이블 수 조정 값⭕

    // 임시 테이블 데이터 🚫
    const [tables] = useState<Table[]>([
        { id: 1, status: 'available' },
        { id: 2, status: 'inUse' },
        { id: 3, status: 'available' },
        { id: 4, status: 'inUse' },
        { id: 5, status: 'available' },
        { id: 6, status: 'available' },
        { id: 7, status: 'inUse' },
        { id: 8, status: 'available' },
        { id: 9, status: 'inUse' },
    ])

    const totalPages = Math.ceil(tables.length / itemsPerPage)
    const displayedTables = tables.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    )

    // 페이지 변경 함수
    const changePage = useCallback(
        (newPage: number) => {
            // 페이지 범위를 벗어나지 않도록 제한
            if (newPage >= 0 && newPage < totalPages) {
                setCurrentPage(newPage)
            }
        },
        [totalPages]
    )

    // 휠 이벤트 핸들러
    const handleWheel = useCallback(
        (event: WheelEvent<HTMLDivElement>) => {
            // deltaY가 양수면 아래로 스크롤 (다음 페이지)
            // deltaY가 음수면 위로 스크롤 (이전 페이지)
            const direction = event.deltaY > 0 ? 1 : -1
            changePage(currentPage + direction)
        },
        [currentPage, changePage]
    )

    return (
        <div className='carousel-container' onWheel={handleWheel}>
            <div className='table-grid'>
                {displayedTables.map((table) => (
                    <div
                        key={table.id}
                        className={`table-item ${
                            table.status === 'available'
                                ? 'table-status-card__bg-completed'
                                : 'table-status-card__bg-processing'
                        }`}>
                        <div className='table-item__number'>{table.id}번</div>
                        <div
                            className={`table-item__status ${
                                table.status === 'available'
                                    ? 'table-status-card__text-completed'
                                    : 'table-status-card__text-processing'
                            }`}>
                            {table.status === 'available'
                                ? '사용가능'
                                : '사용중'}
                        </div>
                    </div>
                ))}
            </div>

            <div className='carousel-pagination'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${
                            index === currentPage ? 'active' : ''
                        }`}
                        onClick={() => changePage(index)}
                    />
                ))}
            </div>
        </div>
    )
}
