import { useState } from 'react'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import '@/widgets/admin/MenuWidget/style/MenuItems.scss'
import MenuModal from './MenuModal'

interface MenuItem {
    id: number
    image: string
    name: string
    category: string
    price: number
    description: string
    status: 'available' | 'soldout'
}

interface MenuItemsProps {
    items: MenuItem[]
}

export default function MenuItems({ items }: MenuItemsProps) {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = (item: MenuItem) => {
        setSelectedItem(item)
        setIsModalOpen(true)
    }

    const handleDelete = (id: number) => {
        console.log('Delete menu item:', id)
        // 삭제 로직 구현 예정
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedItem(null)
    }

    return (
        <>
            <div className='menu-items'>
                {items.map((item) => (
                    <div key={item.id} className='menu-item'>
                        <div className='menu-item__image'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='menu-item__image-content'
                            />
                        </div>
                        <div className='menu-item__name'>{item.name}</div>
                        <div className='menu-item__category'>
                            {item.category}
                        </div>
                        <div className='menu-item__price'>
                            {item.price.toLocaleString()}원
                        </div>
                        <div className='menu-item__status'>
                            <span
                                className={`status-badge ${
                                    item.status === 'available'
                                        ? 'status-badge--available'
                                        : 'status-badge--soldout'
                                }`}>
                                {item.status === 'available'
                                    ? '판매중'
                                    : '품절'}
                            </span>
                        </div>
                        <div className='menu-item__actions'>
                            <button
                                onClick={() => handleEdit(item)}
                                className='action-button action-button--edit'
                                title='수정'>
                                <FiEdit2 />
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className='action-button action-button--delete'
                                title='삭제'>
                                <RiDeleteBinLine />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <MenuModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                initialData={selectedItem || undefined}
                mode='edit'
            />
        </>
    )
}
