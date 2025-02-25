import HistoryCard from './HistoryCard'
import '../style/HistoryList.scss'
export default function HistoryList() {
    return (
        <div className='list-wrap mt-4'>
            <HistoryCard />
            <HistoryCard />
        </div>
    )
}
