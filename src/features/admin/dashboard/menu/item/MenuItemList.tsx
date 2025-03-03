import { Menu } from '@/entities/admin/dashboard/model/types'
import { MenuItem } from './index'

const LoadingSpinner = () => (
    <div
        className='animate-spin w-8 h-8 border-2 border-indigo-500 rounded-full'
        style={{ borderTopColor: 'transparent' }}
        aria-label='로딩 중'
    />
)

interface MenuItemListProps {
    menuItems: Menu[]
    isLoading: boolean
    isError: boolean
    error: unknown
    onMenuSelect: (menu: Menu) => void
    activeStatus: string
}

export default function MenuItemList({
    menuItems,
    isLoading,
    isError,
    error,
    onMenuSelect,
    activeStatus,
}: MenuItemListProps) {
    if (isLoading) {
        return (
            <div className='flex justify-center items-center py-8'>
                <LoadingSpinner />
            </div>
        )
    }

    if (isError) {
        return (
            <div className='flex justify-center items-center py-8 text-red-500'>
                <div className='text-center'>
                    <div className='font-bold mb-2'>
                        데이터를 불러오는 중 오류가 발생했습니다
                    </div>
                    <div>
                        {error instanceof Error
                            ? error.message
                            : '알 수 없는 오류'}
                    </div>
                    <button
                        className='mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
                        onClick={() => window.location.reload()}>
                        새로고침
                    </button>
                </div>
            </div>
        )
    }

    if (menuItems.length === 0) {
        return (
            <div className='flex justify-center items-center py-8 text-gray-500'>
                {activeStatus === 'available'
                    ? '판매중인 메뉴가 없습니다.'
                    : '품절된 메뉴가 없습니다.'}
            </div>
        )
    }

    return (
        <>
            {menuItems.map((item: Menu) => (
                <MenuItem key={item.id} item={item} onSelect={onMenuSelect} />
            ))}
        </>
    )
}
