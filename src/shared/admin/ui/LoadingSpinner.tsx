import React from 'react'

interface LoadingSpinnerProps {
    size?: string
    color?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = '2rem',
    color = '#4F46E5',
}) => {
    return (
        <div
            className='animate-spin'
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                borderTop: `2px solid ${color}`,
                borderRight: '2px solid transparent',
            }}
            aria-label='로딩 중'
        />
    )
}

export default LoadingSpinner
