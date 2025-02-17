import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import '@/widgets/admin/MenuWidget/style/MenuSearch.scss'

export default function MenuSearch() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        // 여기에 검색 로직 추가 예정
    }

    const clearSearch = () => {
        setSearchTerm('')
        // 검색어 초기화 시 필요한 로직 추가 예정
    }

    return (
        <div className='menu-search'>
            <div className='menu-search__container'>
                <IoSearchOutline className='menu-search__icon' />
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='메뉴 검색'
                    className='menu-search__input'
                />
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        className='menu-search__clear-button'>
                        <IoMdClose className='menu-search__clear-icon' />
                    </button>
                )}
            </div>
        </div>
    )
}
