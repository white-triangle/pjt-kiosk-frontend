import { MouseEvent } from 'react'
import {
    Menu,
    MENU_CATEGORY_LABELS,
} from '@/entities/admin/dashboard/model/types'
import '@/features/admin/dashboard/menu/style/MenuModal.scss'

interface MenuDetailModalProps {
    selectedMenu: Menu | null
    onClose: () => void
}

export default function MenuDetailModal({
    selectedMenu,
    onClose,
}: MenuDetailModalProps) {
    if (!selectedMenu) return null

    // 모달 외부 클릭 시 닫기
    const handleModalOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div
            className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 menu-modal__overlay'
            onClick={handleModalOverlayClick}
            role='dialog'
            aria-modal='true'
            aria-labelledby='menu-detail-title'>
            <div className='bg-white rounded-lg p-6 w-11/12 max-w-lg relative shadow-xl menu-modal__content'>
                <button
                    className='absolute top-3 right-3 text-gray-500 hover:text-gray-700 menu-modal__close-btn'
                    onClick={onClose}
                    aria-label='닫기'>
                    &times;
                </button>

                <h2
                    id='menu-detail-title'
                    className='text-xl font-bold mb-4 text-indigo-700 border-b pb-2'>
                    {selectedMenu.name}
                </h2>

                <div className='flex flex-col md:flex-row mb-4 gap-4'>
                    <div className='w-full md:w-2/5'>
                        {selectedMenu.imageUrl ? (
                            <img
                                src={selectedMenu.imageUrl}
                                alt={selectedMenu.name}
                                className='w-full h-40 object-cover rounded menu-modal__image'
                            />
                        ) : (
                            <div className='w-full h-40 bg-gray-200 rounded flex items-center justify-center text-gray-400'>
                                이미지 없음
                            </div>
                        )}
                    </div>

                    <div className='w-full md:w-3/5'>
                        <div className='menu-modal__info-item'>
                            <span className='font-semibold menu-modal__label'>
                                카테고리:
                            </span>
                            <span className='px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 ml-2'>
                                {MENU_CATEGORY_LABELS[selectedMenu.category]}
                            </span>
                        </div>

                        <div className='menu-modal__info-item'>
                            <span className='font-semibold menu-modal__label'>
                                가격:
                            </span>
                            <span className='ml-2 text-indigo-700 font-bold'>
                                {selectedMenu.price.toLocaleString()}원
                            </span>
                        </div>

                        <div className='menu-modal__info-item'>
                            <span className='font-semibold menu-modal__label'>
                                상태:
                            </span>
                            <span
                                className={`px-2 py-1 text-xs rounded-full ml-2 ${
                                    selectedMenu.isAvailable
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                }`}>
                                {selectedMenu.isAvailable ? '판매중' : '품절'}
                            </span>
                        </div>

                        <div className='menu-modal__info-item'>
                            <span className='font-semibold menu-modal__label'>
                                등록일:
                            </span>
                            <span className='ml-2 text-gray-600'>
                                {new Date(
                                    selectedMenu.createdAt
                                ).toLocaleDateString()}
                            </span>
                        </div>

                        <div className='menu-modal__info-item'>
                            <span className='font-semibold menu-modal__label'>
                                수정일:
                            </span>
                            <span className='ml-2 text-gray-600'>
                                {new Date(
                                    selectedMenu.updatedAt
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end gap-2 mt-4 border-t pt-4'>
                    <button
                        className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors'
                        onClick={onClose}>
                        닫기
                    </button>
                    <button
                        className='px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors'
                        onClick={() => {
                            // 상세 페이지 구현 시 활성화
                            alert('상세 페이지 기능은 아직 준비 중입니다.')
                        }}>
                        상세 보기
                    </button>
                </div>
            </div>
        </div>
    )
}
