import '@/shared/admin/styles/Tab.scss'
import { MenuStatusType } from '../model'

interface MenuTabProps {
    activeStatus: MenuStatusType
    onStatusChange: (status: MenuStatusType) => void
}

export default function MenuTab({
    activeStatus,
    onStatusChange,
}: MenuTabProps) {
    return (
        <div className='flex flex-row-reverse mb-2'>
            <div className='flex flex-col items-center'>
                <div
                    className={`tab__item ${
                        activeStatus === 'soldout'
                            ? 'tab__item-active text-red-500'
                            : 'tab__item-inactive text-red-400'
                    } mb-1 cursor-pointer`}
                    onClick={() => onStatusChange('soldout')}
                    role='tab'
                    aria-selected={activeStatus === 'soldout'}
                    tabIndex={0}>
                    품절
                </div>
                <div
                    className={`${
                        activeStatus === 'soldout' ? 'tab__line-red' : ''
                    }`}></div>
            </div>
            <div className='flex flex-col items-center'>
                <div
                    className={`tab__item ${
                        activeStatus === 'available'
                            ? 'tab__item-active'
                            : 'tab__item-inactive'
                    } mb-1 cursor-pointer`}
                    onClick={() => onStatusChange('available')}
                    role='tab'
                    aria-selected={activeStatus === 'available'}
                    tabIndex={0}>
                    판매중
                </div>
                <div
                    className={`${
                        activeStatus === 'available' ? 'tab__line' : ''
                    }`}></div>
            </div>
        </div>
    )
}
