import { useState, useRef, useEffect, useCallback, memo } from 'react'
import '@/widgets/admin/TableWidget/style/TableWidget.scss'

const categories = [
    'T01',
    'T02',
    'T03',
    'T04',
    'T05',
    'T06',
    'T07',
    'T08',
    'T09',
    'T10',
] as const
type Category = (typeof categories)[number]

interface TableFilterProps {
    onCategoryChange?: (category: Category) => void
}
export default function TableFilter({ onCategoryChange }: TableFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<Category>('T01')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // 드롭다운 토글 핸들러 메모이제이션
    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen((prev) => !prev)
    }, [])

    // 카테고리 선택 핸들러 메모이제이션
    const handleSelectCategory = useCallback(
        (category: Category) => {
            setSelectedCategory(category)
            setIsDropdownOpen(false)
            onCategoryChange?.(category)
        },
        [onCategoryChange]
    )

    // 외부 클릭 핸들러 메모이제이션
    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(e.target as Node)
        ) {
            setIsDropdownOpen(false)
        }
    }, [])

    // 이벤트 리스너 등록 및 제거
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [handleClickOutside])

    return (
        <div className='table-widget__filter' ref={dropdownRef}>
            <button
                className='table-widget__filter__button'
                onClick={toggleDropdown}>
                {selectedCategory}
                <span className='table-widget__filter__arrow'>
                    {isDropdownOpen ? '▲' : '▼'}
                </span>
            </button>
            {isDropdownOpen && (
                <ul className='table-widget__filter__dropdown'>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className='table-widget__filter__option'
                            onClick={() => handleSelectCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
