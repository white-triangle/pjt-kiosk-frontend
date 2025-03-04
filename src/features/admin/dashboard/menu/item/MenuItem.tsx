import { MENU_CATEGORY_LABELS } from '@/entities/admin/dashboard/model/types'
import { Menu } from '@/entities/admin/dashboard/model/types'
import '@/features/admin/dashboard/menu/style/MenuList.scss'

interface MenuItemProps {
    item: Menu
    onSelect: (menu: Menu) => void
}

export default function MenuItem({ item, onSelect }: MenuItemProps) {
    return (
        <div
            className='flex items-center hover:bg-gray-50 transition-colors cursor-pointer'
            onClick={() => onSelect(item)}>
            <div className='flex-1 list__item'>
                {item.imageUrl ? (
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className='w-12 h-12 object-cover rounded'
                    />
                ) : (
                    <div className='w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400'>
                        이미지 없음
                    </div>
                )}
            </div>
            <div className='flex-1 list__item'>
                <span className='text-sm font-semibold'>{item.name}</span>
            </div>
            <div className='flex-1 list__item'>
                <span className='px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800'>
                    {MENU_CATEGORY_LABELS[item.category]}
                </span>
            </div>
            <div className='flex-1 list__item text-sm'>
                {item.price.toLocaleString()}원
            </div>
            <div className='flex-1 list__item'>
                <span
                    className={`px-2 py-1 text-xs rounded-full ${
                        item.isAvailable
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                    }`}>
                    {item.isAvailable ? '판매중' : '품절'}
                </span>
            </div>
        </div>
    )
}
