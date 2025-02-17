import { useState, useRef, useEffect, useCallback, memo } from 'react'
import '@/widgets/admin/MenuWidget/style/MenuFilter.scss'

const categories = ['전체', '메인', '사이드', '음료', '기타'] as const
type Category = (typeof categories)[number]

interface MenuFilterProps {
    onCategoryChange?: (category: Category) => void
}

function MenuFilter({ onCategoryChange }: MenuFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<Category>('전체')
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
        <div className='menu-filter' ref={dropdownRef}>
            <button className='menu-filter__button' onClick={toggleDropdown}>
                {selectedCategory}
                <span className='menu-filter__arrow'>
                    {isDropdownOpen ? '▲' : '▼'}
                </span>
            </button>
            {isDropdownOpen && (
                <ul className='menu-filter__dropdown'>
                    {categories.map((category) => (
                        <li
                            key={category}
                            className='menu-filter__option'
                            onClick={() => handleSelectCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

// 컴포넌트 자체를 메모이제이션
export default memo(MenuFilter)
