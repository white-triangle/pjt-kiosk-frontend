import { useState } from 'react'
import '@/shared/admin/styles/Widget.scss'
import { PiPlusBold } from 'react-icons/pi'
import '@/widgets/admin/MenuWidget/style/MenuButton.scss'
import MenuModal from './MenuModal'

export default function MenuHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className='widget-header flex justify-between items-center'>
                <div>메뉴 관리</div>
                <div>
                    <button
                        className='menu-button'
                        onClick={() => setIsModalOpen(true)}>
                        <div className='flex items-center gap-2'>
                            <PiPlusBold />새 메뉴 추가
                        </div>
                    </button>
                </div>
            </div>
            <MenuModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}
