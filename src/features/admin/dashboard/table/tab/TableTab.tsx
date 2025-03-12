import '@/shared/admin/styles/Tab.scss'
import { TableStatus } from '../model/'

interface TableTabProps {
    activeStatus: TableStatus
    onStatusChange: (status: TableStatus) => void
}

export default function TableTab({
    activeStatus,
    onStatusChange,
}: TableTabProps) {
    const tabStatuses: TableStatus[] = ['occupied', 'available', 'all']

    const tabLabels: Record<TableStatus, string> = {
        occupied: '사용중',
        available: '사용가능',
        all: '전체',
    }

    const getTabClass = (status: TableStatus): string => {
        let baseClass = 'tab__item '

        baseClass +=
            activeStatus === status ? 'tab__item-active' : 'tab__item-inactive'

        if (status === 'occupied') {
            baseClass += ' table-status-card__text-processing'
        } else if (status === 'available') {
            baseClass += ' table-status-card__text-completed'
        }

        return baseClass
    }

    return (
        <div className='tab__container'>
            {tabStatuses.map((status) => (
                <div
                    key={status}
                    className={getTabClass(status)}
                    onClick={() => onStatusChange(status)}>
                    {tabLabels[status]}
                </div>
            ))}
        </div>
    )
}
