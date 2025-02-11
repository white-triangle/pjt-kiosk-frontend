import { useState, useCallback, WheelEvent } from 'react'
import '../style/MenuList.scss'

interface MenuItem {
    id: number
    image: string
    name: string
    category: string
    price: number
}

export default function MenuItems() {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 2 // 한 페이지당 보여줄 아이템 수

    // 임시 메뉴 데이터
    const [menuItems] = useState<MenuItem[]>([
        {
            id: 1,
            image: 'img1',
            name: '아메리카노',
            category: '음료',
            price: 4500,
        },
        {
            id: 2,
            image: 'img2',
            name: '카페라떼',
            category: '음료',
            price: 5000,
        },
        {
            id: 3,
            image: 'img3',
            name: '카푸치노',
            category: '음료',
            price: 5000,
        },
        {
            id: 4,
            image: 'img4',
            name: '에스프레소',
            category: '음료',
            price: 4000,
        },
        {
            id: 5,
            image: 'img5',
            name: '바닐라라떼',
            category: '음료',
            price: 5500,
        },
        {
            id: 6,
            image: 'img6',
            name: '카라멜마끼아또',
            category: '음료',
            price: 5500,
        },
    ])

    const totalPages = Math.ceil(menuItems.length / itemsPerPage)
    const displayedItems = menuItems.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    )

    // 페이지 변경 함수
    const changePage = useCallback(
        (newPage: number) => {
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
        <>
            <div className='list__items' onWheel={handleWheel}>
                {displayedItems.map((item) => (
                    <div key={item.id} className='flex items-center'>
                        <div className='flex-1 list__item'>{item.image}</div>
                        <div className='flex-1 list__item'>{item.name}</div>
                        <div className='flex-1 list__item'>{item.category}</div>
                        <div className='flex-1 list__item'>
                            {item.price.toLocaleString()}원
                        </div>
                    </div>
                ))}
            </div>

            <div className='menu-pagination'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${
                            index === currentPage ? 'active' : ''
                        }`}
                        onClick={() => changePage(index)}
                    />
                ))}
            </div>
        </>
    )
}