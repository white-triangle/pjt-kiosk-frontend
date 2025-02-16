import '@/widgets/admin/MenuWidget/style/MenuWidget.scss'
import '@/shared/admin/styles/Colors.scss'

export default function MenuStatus() {
    return (
        <div className='menu-widget__status'>
            <div className='menu-widget__status__items order-status-card__blue-bg'>
                <div className='order-status-card__blue-text font-semibold text-sm'>
                    총 메뉴
                </div>
                <div className='order-status-card__blue-text font-bold text-lg'>
                    34
                </div>
            </div>
            <div className='menu-widget__status__items order-status-card__green-bg'>
                <div className='order-status-card__green-text font-semibold text-sm'>
                    판매 중
                </div>
                <div className='order-status-card__green-text font-bold text-lg'>
                    24
                </div>
            </div>
            <div className='menu-widget__status__items order-status-card__red-bg'>
                <div className='order-status-card__red-text font-semibold text-sm'>
                    품절
                </div>
                <div className='order-status-card__red-text font-bold text-lg'>
                    10
                </div>
            </div>
        </div>
    )
}
