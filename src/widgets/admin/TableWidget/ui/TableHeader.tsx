import { useState } from 'react'
import { PiPlusBold } from 'react-icons/pi'
import '@/widgets/admin/MenuWidget/style/MenuButton.scss'
import '@/shared/admin/styles/Widget.scss'
import TableModal from './TableModal'

export default function TableHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className='widget-header flex justify-between items-center'>
                <div>테이블 관리</div>
                <div>
                    <button
                        className='menu-button'
                        onClick={() => setIsModalOpen(true)}>
                        <div className='flex items-center gap-2'>
                            <PiPlusBold />새 테이블 추가
                        </div>
                    </button>
                </div>
            </div>
            <TableModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                mode='create'
            />
        </>
    )
}
