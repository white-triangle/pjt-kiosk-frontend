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
    if (totalPages <= 1) {
        return null
    }

    return (
        <div className='carousel-pagination'>
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    className={`carousel-dot ${
                        index + 1 === currentPage ? 'active' : ''
                    }`}
                    onClick={() => onPageChange(index + 1)}
                />
            ))}
        </div>
    )
}
