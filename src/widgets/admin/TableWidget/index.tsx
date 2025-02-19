import TableFilter from './ui/TableFilter'
import TableHeader from './ui/TableHeader'
import TableSearch from './ui/TableSearch'
import TableStatus from './ui/TableStatus'
import TableImageList from './ui/TableImageList'
import TableList from './ui/TableList'

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
            <TableList />
        </div>
    )
}
