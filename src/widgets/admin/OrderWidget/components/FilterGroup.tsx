import React, { useState, useRef, useEffect } from 'react'
import {
    FaCalendarDay,
    FaCalendarAlt,
    FaChartBar,
    FaChartLine,
} from 'react-icons/fa'
import { FaRotateLeft } from 'react-icons/fa6'
import { BiSearchAlt } from 'react-icons/bi'
import { MdPendingActions, MdOutlineSettings } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

interface FilterGroupProps {
    periodValue: string
    statusValue: string
    onPeriodChange: (value: string) => void
    onStatusChange: (value: string) => void
}

// 기간 옵션 정의
const periodOptions = [
    { value: 'today', label: '오늘', icon: <FaCalendarDay size={16} /> },
    { value: 'yesterday', label: '어제', icon: <FaCalendarAlt size={16} /> },
    { value: 'week', label: '최근 7일', icon: <FaChartBar size={16} /> },
    { value: 'month', label: '최근 30일', icon: <FaChartLine size={16} /> },
]

// 상태 옵션 정의
const statusOptions = [
    {
        value: 'all',
        label: '전체',
        color: '#6B7280',
        icon: <BiSearchAlt size={16} />,
    },
    {
        value: 'pending',
        label: '대기중',
        color: '#2563EB',
        icon: <MdPendingActions size={16} />,
    },
    {
        value: 'processing',
        label: '처리중',
        color: '#CA8A04',
        icon: <MdOutlineSettings size={16} />,
    },
    {
        value: 'completed',
        label: '완료',
        color: '#16A34A',
        icon: <AiOutlineCheckCircle size={16} />,
    },
    {
        value: 'cancelled',
        label: '취소',
        color: '#DC2626',
        icon: <IoMdClose size={16} />,
    },
]

// 상태 배지 컴포넌트
const StatusBadge: React.FC<{
    status: string
    label: string
    icon: React.ReactNode
}> = ({ status, label, icon }) => {
    return (
        <div className={`status-badge status-badge--${status}`}>
            <span className='status-badge-icon'>{icon}</span>
            <span className='status-badge-label'>{label}</span>
        </div>
    )
}

const FilterGroup: React.FC<FilterGroupProps> = ({
    periodValue,
    statusValue,
    onPeriodChange,
    onStatusChange,
}) => {
    // 드롭다운 열기/닫기 상태
    const [isPeriodOpen, setIsPeriodOpen] = useState(false)
    const [isStatusOpen, setIsStatusOpen] = useState(false)

    // 드롭다운 요소 참조
    const periodDropdownRef = useRef<HTMLDivElement>(null)
    const statusDropdownRef = useRef<HTMLDivElement>(null)

    // 현재 선택된 기간 및 상태 옵션 가져오기
    const selectedPeriod =
        periodOptions.find((option) => option.value === periodValue) ||
        periodOptions[0]
    const selectedStatus =
        statusOptions.find((option) => option.value === statusValue) ||
        statusOptions[0]

    // 필터 초기화 핸들러
    const handleResetFilters = () => {
        onPeriodChange('today')
        onStatusChange('all')
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                periodDropdownRef.current &&
                !periodDropdownRef.current.contains(event.target as Node)
            ) {
                setIsPeriodOpen(false)
            }
            if (
                statusDropdownRef.current &&
                !statusDropdownRef.current.contains(event.target as Node)
            ) {
                setIsStatusOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // 필터가 기본값과 다른지 확인
    const isFilterChanged = periodValue !== 'today' || statusValue !== 'all'

    return (
        <div className='order-filter'>
            <div className='filter-group'>
                <label className='filter-label'>기간 선택</label>
                <div className='custom-dropdown' ref={periodDropdownRef}>
                    <button
                        className={`dropdown-trigger ${
                            isPeriodOpen ? 'active' : ''
                        }`}
                        onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                        type='button'>
                        <span className='dropdown-icon'>
                            {selectedPeriod.icon}
                        </span>
                        <span className='dropdown-label'>
                            {selectedPeriod.label}
                        </span>
                        <span className='dropdown-arrow'>
                            <svg
                                width='12'
                                height='6'
                                viewBox='0 0 12 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M1 1L6 5L11 1'
                                    stroke='#333'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </span>
                    </button>

                    {isPeriodOpen && (
                        <div className='dropdown-menu'>
                            {periodOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`dropdown-item ${
                                        option.value === periodValue
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        onPeriodChange(option.value)
                                        setIsPeriodOpen(false)
                                    }}>
                                    <span className='dropdown-icon'>
                                        {option.icon}
                                    </span>
                                    <span className='dropdown-label'>
                                        {option.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className='filter-group'>
                <label className='filter-label'>주문 상태</label>
                <div className='custom-dropdown' ref={statusDropdownRef}>
                    <button
                        className={`dropdown-trigger ${
                            isStatusOpen ? 'active' : ''
                        }`}
                        onClick={() => setIsStatusOpen(!isStatusOpen)}
                        type='button'>
                        <StatusBadge
                            status={selectedStatus.value}
                            label={selectedStatus.label}
                            icon={selectedStatus.icon}
                        />
                        <span className='dropdown-arrow'>
                            <svg
                                width='12'
                                height='6'
                                viewBox='0 0 12 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M1 1L6 5L11 1'
                                    stroke='#333'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </span>
                    </button>

                    {isStatusOpen && (
                        <div className='dropdown-menu status-dropdown-menu'>
                            {statusOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`dropdown-item ${
                                        option.value === statusValue
                                            ? 'active'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        onStatusChange(option.value)
                                        setIsStatusOpen(false)
                                    }}>
                                    <StatusBadge
                                        status={option.value}
                                        label={option.label}
                                        icon={option.icon}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {isFilterChanged && (
                <div className='filter-actions'>
                    <button
                        className='reset-button'
                        onClick={handleResetFilters}
                        type='button'>
                        <FaRotateLeft size={16} />
                        초기화
                    </button>
                </div>
            )}
        </div>
    )
}

export default FilterGroup
