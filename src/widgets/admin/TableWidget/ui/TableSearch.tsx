import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import '@/widgets/admin/TableWidget/style/TableWidget.scss'

export default function TableSearch() {
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
        <div className='table-widget__search'>
            <div className='table-widget__search__container'>
                <IoSearchOutline className='table-widget__search__icon' />
                <input
                    type='text'
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder='테이블 검색'
                    className='table-widget__search__input'
                />
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        className='table-widget__search__clear-button'>
                        <IoMdClose className='table-widget__search__clear-icon' />
                    </button>
                )}
            </div>
        </div>
    )
}
