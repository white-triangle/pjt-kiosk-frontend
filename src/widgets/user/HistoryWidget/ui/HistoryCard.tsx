import '../style/HistoryCard.scss'
import CardFooter from './CardFooter'
import HistoryItem from './HistoryItem'

export default function HistoryCard() {
    return (
        <div className='card-wrap p-4 mb-4'>
            <div className='card-header flex justify-between items-center'>
                <div className='card-header-left'>
                    <span className='time'>5 minutes ago</span>
                    <p className='order-info'>
                        {/* order-number는 데이터마다 다름 */}
                        Order#<span className='order-number'>12345</span>
                    </p>
                </div>
                <div className='card-header-right'>
                    {/* cooking / canceled / completed 에 따라서 텍스트/색상 변경*/}
                    <div className='flex items-center justify-center status cooking'>
                        Cooking
                    </div>
                </div>
            </div>
            <div className='card-content pb-4'>
                <HistoryItem />
                <HistoryItem />
            </div>
            <div className='card-footer'>
                <CardFooter />
            </div>
        </div>
    )
}
