import { useCallback, useMemo } from 'react'
import '@/widgets/admin/MenuWidget/style/MenuPagination.scss'

interface MenuPaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function MenuPagination({
    currentPage,
    totalPages,
    onPageChange,
}: MenuPaginationProps) {
    // 표시할 페이지 번호 계산 - 메모이제이션
    const pageNumbers = useMemo(() => {
        const numbers: (number | string)[] = []
        const maxVisiblePages = 5 // 한 번에 보여줄 최대 페이지 수
        const halfVisible = Math.floor(maxVisiblePages / 2)

        // 시작 페이지와 끝 페이지 계산
        let startPage = Math.max(currentPage - halfVisible, 1)
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages)

        // startPage 재조정
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(endPage - maxVisiblePages + 1, 1)
        }

        // 첫 페이지 표시
        if (startPage > 1) {
            numbers.push(1)
            if (startPage > 2) numbers.push('...')
        }

        // 중간 페이지들 표시
        for (let i = startPage; i <= endPage; i++) {
            numbers.push(i)
        }

        // 마지막 페이지 표시
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) numbers.push('...')
            numbers.push(totalPages)
        }

        return numbers
    }, [currentPage, totalPages])

    // 이벤트 핸들러 메모이제이션
    const handlePageClick = useCallback(
        (page: number) => {
            if (page !== currentPage) {
                onPageChange(page)
            }
        },
        [currentPage, onPageChange]
    )

    // 이전/다음 페이지 이동
    const handlePrevPage = useCallback(() => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }, [currentPage, onPageChange])

    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }, [currentPage, totalPages, onPageChange])

    return (
        <div className='menu-pagination'>
            <button
                className='pagination-button pagination-button--nav'
                onClick={handlePrevPage}
                disabled={currentPage === 1}>
                이전
            </button>
            <div className='pagination-numbers'>
                {pageNumbers.map((page, index) =>
                    typeof page === 'number' ? (
                        <button
                            key={`page-${page}`}
                            className={`pagination-button ${
                                currentPage === page ? 'active' : ''
                            }`}
                            onClick={() => handlePageClick(page)}>
                            {page}
                        </button>
                    ) : (
                        <span key={`dots-${index}`} className='pagination-dots'>
                            {page}
                        </span>
                    )
                )}
            </div>
            <button
                className='pagination-button pagination-button--nav'
                onClick={handleNextPage}
                disabled={currentPage === totalPages}>
                다음
            </button>
        </div>
    )
}
