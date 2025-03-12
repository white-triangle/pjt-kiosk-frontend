import React, { useMemo } from 'react'
import { OrderStatus } from '@/entities/admin/dashboard'
import { useOrderStore } from '../model'
import { useOrderStatistics } from '../lib/hooks'
import './OrderTab.scss'

const OrderTab: React.FC = () => {
    const { activeStatus, setActiveStatus } = useOrderStore()
    const { counts, isLoading } = useOrderStatistics()

    const tabStatuses: (OrderStatus | null)[] = [
        null,
        'processing',
        'completed',
    ]

    const tabLabels: Record<string, string> = {
        null: '전체',
        processing: '처리 중',
        completed: '완료',
    }

    const tabCounts = useMemo(() => {
        if (isLoading || !counts) {
            return {
                null: '-',
                processing: '-',
                completed: '-',
            }
        }

        return {
            null: counts.total.toString(),
            processing: counts.processing.toString(),
            completed: counts.completed.toString(),
        }
    }, [counts, isLoading])

    const getTabClass = (status: OrderStatus | null): string => {
        let baseClass = 'order-tab__item'
        if (status === activeStatus) {
            baseClass += ' order-tab__item--active'
        }
        return baseClass
    }

    const getCount = (status: OrderStatus | null): string => {
        const key = status === null ? 'null' : status
        return tabCounts[key] || '-'
    }

    return (
        <div className='order-tab'>
            {tabStatuses.map((status) => (
                <button
                    key={String(status)}
                    className={getTabClass(status)}
                    data-status={String(status)}
                    onClick={() => setActiveStatus(status)}
                    aria-pressed={status === activeStatus}>
                    {tabLabels[String(status)]}
                    <span className='count-badge'>{getCount(status)}</span>
                </button>
            ))}
        </div>
    )
}

export default OrderTab
