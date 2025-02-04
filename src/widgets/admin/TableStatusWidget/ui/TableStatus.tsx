import '@/shared/admin/styles/Colors.scss'
import '@/shared/admin/styles/Tab.scss'
import { useState } from 'react'

export default function TableStatus() {
    // available: 사용가능, inUse: 사용중, all: 전체
    // 기본값은 전체
    const [activeTab, setActiveTab] = useState<'available' | 'inUse' | 'all'>(
        'all'
    )

    return (
        <div className='tab__container'>
            <div
                className={`tab__item ${
                    activeTab === 'inUse'
                        ? 'tab__item-active'
                        : 'tab__item-inactive'
                } table-status-card__text-processing`}
                onClick={() => setActiveTab('inUse')}>
                사용중
            </div>
            <div
                className={`tab__item ${
                    activeTab === 'available'
                        ? 'tab__item-active'
                        : 'tab__item-inactive'
                } d table-status-card__text-completed`}
                onClick={() => setActiveTab('available')}>
                사용가능
            </div>
            <div
                className={`tab__item ${
                    activeTab === 'all'
                        ? 'tab__item-active'
                        : 'tab__item-inactive'
                } `}
                onClick={() => setActiveTab('all')}>
                전체
            </div>
        </div>
    )
}
