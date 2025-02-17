import TableFilter from './ui/TableFilter'
import TableHeader from './ui/TableHeader'
import TableSearch from './ui/TableSearch'
import TableStatus from './ui/TableStatus'
import TableImageList from './ui/TableImageList'

export default function TableWidget() {
    return (
        <div>
            <TableHeader />
            <TableStatus />
            <div className='flex gap-4'>
                <TableFilter />
                <TableSearch />
            </div>
            <TableImageList />
        </div>
    )
}
