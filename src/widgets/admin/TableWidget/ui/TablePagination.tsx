import { useCallback, useMemo } from 'react'
import '@/widgets/admin/TableWidget/style/TableWidget.scss'

interface TablePaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function TablePagination({
    currentPage,
    totalPages,
    onPageChange,
}: TablePaginationProps) {
    // 페이지 번호 계산 로직
    const visiblePages = useMemo(() => {
        const pages = []
        const maxVisiblePages = 5
        let startPage = Math.max(1, currentPage - 2)
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        return pages
    }, [currentPage, totalPages])

    // 이전 페이지 핸들러
    const handlePrevPage = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }, [currentPage, onPageChange])

    // 다음 페이지 핸들러
    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }, [currentPage, totalPages, onPageChange])

    // 페이지 클릭 핸들러
    const handlePageClick = useCallback(
        (page: number) => {
            onPageChange(page)
        },
        [onPageChange]
    )

    return (
        <div className='table-pagination'>
            <button
                className='table-pagination__button'
                onClick={handlePrevPage}
                disabled={currentPage === 1}>
                이전
            </button>
            {visiblePages.map((page) => (
                <button
                    key={page}
                    className={`table-pagination__number ${
                        currentPage === page
                            ? 'table-pagination__number--active'
                            : ''
                    }`}
                    onClick={() => handlePageClick(page)}>
                    {page}
                </button>
            ))}
            <button
                className='table-pagination__button'
                onClick={handleNextPage}
                disabled={currentPage === totalPages}>
                다음
            </button>
        </div>
    )
}
