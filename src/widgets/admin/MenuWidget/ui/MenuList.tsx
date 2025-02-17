import { useState, useCallback, memo } from 'react'
import MenuListHeader from './MenuListHeader'
import MenuItems from './MenuItems'
import MenuPagination from './MenuPagination'
import '@/widgets/admin/MenuWidget/style/MenuList.scss'

interface MenuItem {
    id: number
    image: string
    name: string
    category: string
    price: number
    description: string
    status: 'available' | 'soldout'
}

// 서버 응답 데이터 타입 정의
interface MenuListResponse {
    items: MenuItem[]
    totalItems: number
    totalPages: number
}

// 메모이제이션된 하위 컴포넌트들
const MemoizedMenuListHeader = memo(MenuListHeader)
const MemoizedMenuItems = memo(MenuItems)
const MemoizedMenuPagination = memo(MenuPagination)

// 테스트용 서버 응답 데이터
const TEST_RESPONSE: MenuListResponse = {
    items: [
        {
            id: 1,
            image: '/menu-images/americano.jpg',
            name: '아메리카노',
            category: '음료',
            price: 4500,
            description: '',
            status: 'available',
        },
        {
            id: 2,
            image: '/menu-images/latte.jpg',
            name: '카페라떼',
            category: '음료',
            price: 5000,
            description: '',
            status: 'available',
        },
        {
            id: 3,
            image: '/menu-images/sandwich.jpg',
            name: '에그 샌드위치',
            category: '메인',
            price: 6500,
            description: '',
            status: 'soldout',
        },
        {
            id: 4,
            image: '/menu-images/cake.jpg',
            name: '당근 케이크',
            category: '디저트',
            price: 5500,
            description: '',
            status: 'available',
        },
        {
            id: 5,
            image: '/menu-images/tea.jpg',
            name: '얼그레이 티',
            category: '음료',
            price: 4000,
            description: '',
            status: 'available',
        },
    ],
    totalItems: 50, // 전체 아이템 수
    totalPages: 10, // 전체 페이지 수
}

export default function MenuList() {
    const [currentPage, setCurrentPage] = useState(1)
    const [menuData, setMenuData] = useState<MenuListResponse>(TEST_RESPONSE)

    // 페이지 변경 핸들러 메모이제이션
    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page)
        // 실제 API 구현 시 여기서 데이터를 가져오는 함수 호출
    }, [])

    return (
        <div className='menu-list'>
            <MemoizedMenuListHeader />
            <MemoizedMenuItems items={menuData.items} />
            <MemoizedMenuPagination
                currentPage={currentPage}
                totalPages={menuData.totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )
}
