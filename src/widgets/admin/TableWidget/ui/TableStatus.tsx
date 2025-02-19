import '@/widgets/admin/TableWidget/style/TableWidget.scss'
import '@/shared/admin/styles/Colors.scss'

export default function TableStatus() {
    return (
        <div className='table-widget__status'>
            <div className='table-widget__status__items order-status-card__blue-bg '>
                <div className='order-status-card__blue-text font-semibold text-sm'>
                    총 테이블
                </div>
                <div className='order-status-card__blue-text font-bold text-lg'>
                    34
                </div>
            </div>
            <div className='table-widget__status__items order-status-card__green-bg'>
                <div className='order-status-card__green-text font-semibold text-sm'>
                    사용가능
                </div>
                <div className='order-status-card__green-text font-bold text-lg'>
                    24
                </div>
            </div>
            <div className='table-widget__status__items order-status-card__red-bg'>
                <div className='order-status-card__red-text font-semibold text-sm'>
                    사용 중
                </div>
                <div className='order-status-card__red-text font-bold text-lg'>
                    10
                </div>
            </div>
        </div>
    )
}
