import '@/shared/admin/styles/Tab.scss'
import { TableStatus } from '../model/'
/**
 * 테이블 탭 컴포넌트 Props
 */
interface TableTabProps {
    activeStatus: TableStatus
    onStatusChange: (status: TableStatus) => void
}

/**
 * 테이블 상태 필터링 탭 컴포넌트
 */
export default function TableTab({
    activeStatus,
    onStatusChange,
}: TableTabProps) {
    // 사용 가능한 탭 상태들 (순서 변경: 사용중, 사용가능, 전체)
    const tabStatuses: TableStatus[] = ['occupied', 'available', 'all']

    // 탭 레이블 매핑
    const tabLabels: Record<TableStatus, string> = {
        occupied: '사용중',
        available: '사용가능',
        all: '전체',
    }

    // 탭 클래스 매핑
    const getTabClass = (status: TableStatus): string => {
        let baseClass = 'tab__item '

        // 활성화 상태에 따른 클래스
        baseClass +=
            activeStatus === status ? 'tab__item-active' : 'tab__item-inactive'

        // 상태에 따른 추가 클래스
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
