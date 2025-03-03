import '@/shared/admin/styles/Tab.scss'

export type MenuStatusType = 'available' | 'soldOut'

interface MenuStatusProps {
    activeStatus: MenuStatusType
    onStatusChange: (status: MenuStatusType) => void
}

export default function MenuStatus({
    activeStatus,
    onStatusChange,
}: MenuStatusProps) {
    return (
        <div className='flex flex-row-reverse mb-4'>
            <div className='flex flex-col items-center'>
                <div
                    className={`tab__item ${
                        activeStatus === 'soldOut'
                            ? 'tab__item-active text-red-500'
                            : 'tab__item-inactive text-red-400'
                    } mb-1 cursor-pointer`}
                    onClick={() => onStatusChange('soldOut')}>
                    품절
                </div>
                <div
                    className={`${
                        activeStatus === 'soldOut' ? 'tab__line-red' : ''
                    }`}></div>
            </div>
            <div className='flex flex-col items-center'>
                <div
                    className={`tab__item ${
                        activeStatus === 'available'
                            ? 'tab__item-active'
                            : 'tab__item-inactive'
                    } mb-1 cursor-pointer`}
                    onClick={() => onStatusChange('available')}>
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
