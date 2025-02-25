import './style/HistoryWidget.scss'
import HistoryList from './ui/HistoryList'

export default function HistoryWidget() {
    return (
        <div className='history-wrap'>
            <h5 className='history-title text-center pb-7'>History</h5>
            <HistoryList />
            <div className='history-price mt-2 flex justify-between items-center pl-5 pr-5'>
                <div className='history-price-txt'>Total</div>
                <div className='history-total-price'>
                    $<span>25.98</span>
                </div>
            </div>
        </div>
    )
}
