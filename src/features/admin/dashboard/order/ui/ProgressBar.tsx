import React from 'react'
import { useScrollProgress } from '../lib/hooks/useScrollProgress'
import './ProgressBar.scss'

interface ProgressBarProps {
    containerSelector: string
    height?: number
    className?: string
    debug?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    containerSelector,
    height = 3,
    className = '',
    debug = false,
}) => {
    const { scrollPercentage } = useScrollProgress({
        containerSelector,
        debug,
    })

    return (
        <div
            className={`progress-bar-container ${className}`}
            style={{ height: `${height}px` }}>
            <div
                className='progress-bar'
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    )
}
