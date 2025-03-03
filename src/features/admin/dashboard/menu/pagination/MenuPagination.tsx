import { useCallback } from 'react'
import '@/features/admin/dashboard/menu/style/MenuList.scss'

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
    // 페이지 변경 함수
    const changePage = useCallback(
        (newPage: number) => {
            if (newPage >= 1 && newPage <= totalPages) {
                onPageChange(newPage)
            }
        },
        [totalPages, onPageChange]
    )

    // 페이지가 1개 이하면 페이지네이션을 표시하지 않음
    if (totalPages <= 1) return null

    // 페이지 수가 많을 경우 처리
    const MAX_VISIBLE_DOTS = 5 // 한 번에 표시할 최대 점 수

    let visibleDots = []

    if (totalPages <= MAX_VISIBLE_DOTS) {
        // 전체 페이지가 MAX_VISIBLE_DOTS 이하면 모든 페이지를 표시
        visibleDots = Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
        // 현재 페이지 주변의 페이지를 표시
        const leftSiblingCount = Math.floor((MAX_VISIBLE_DOTS - 1) / 2)

        // 시작 페이지와 끝 페이지 계산
        let startPage = Math.max(1, currentPage - leftSiblingCount)
        let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_DOTS - 1)

        // 오른쪽 끝에 위치할 때 왼쪽에 더 많은 페이지 표시
        if (endPage === totalPages) {
            startPage = Math.max(1, endPage - MAX_VISIBLE_DOTS + 1)
        }

        visibleDots = Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
        )
    }

    return (
        <div className='menu-pagination-container'>
            <div className='menu-pagination'>
                {visibleDots.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`pagination-dot ${
                            pageNumber === currentPage ? 'active' : ''
                        }`}
                        onClick={() => changePage(pageNumber)}
                        aria-label={`${pageNumber} 페이지로 이동`}
                        aria-current={
                            pageNumber === currentPage ? 'page' : undefined
                        }>
                        <span className='sr-only'>{pageNumber}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
