import '@/shared/admin/styles/Colors.scss'

export default function OrderStatusCard() {
    return (
        <div className='flex w-full gap-6 mb-4'>
            <div className='flex flex-1 justify-between h-16 p-4 items-center rounded order-status-card__bg-processing'>
                <div className='font-medium text-lg order-status-card__text-processing'>
                    처리 중
                </div>
                <div className='font-bold order-status-card__text-processing text-lg'>
                    10
                </div>
            </div>
            <div className='flex flex-1 justify-between h-16 p-4 items-center rounded order-status-card__bg-completed'>
                <div className='font-medium text-lg order-status-card__text-completed'>
                    완료
                </div>
                <div className='font-bold order-status-card__text-completed text-lg'>
                    10
                </div>
            </div>
        </div>
    )
}
