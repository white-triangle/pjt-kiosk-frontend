import React from 'react'

// 아이콘 색상 타입 정의
type IconColorType =
    | 'blue'
    | 'red'
    | 'yellow'
    | 'green'
    | 'purple'
    | 'dark'
    | undefined

// SettingItem 컴포넌트 정의
interface SettingItemProps {
    name: string
    description: string
    isChecked: boolean
    onChange: () => void
    isDisabled?: boolean // 옵션으로 비활성화 상태 추가
    icon?: React.ReactNode // 아이콘 추가 (옵션)
    iconColor?: IconColorType // 아이콘 색상 추가 (옵션)
}

const SettingItem: React.FC<SettingItemProps> = ({
    name,
    description,
    isChecked,
    onChange,
    isDisabled = false,
    icon,
    iconColor,
}) => {
    // 아이콘 색상 클래스 생성
    const iconColorClass = iconColor ? `setting-icon--${iconColor}` : ''

    return (
        <div className={`setting-item ${isDisabled ? 'opacity-50' : ''}`}>
            <div className='setting-info'>
                <div className='setting-name-wrapper'>
                    {icon && (
                        <span className={`setting-icon ${iconColorClass}`}>
                            {icon}
                        </span>
                    )}
                    <h4 className='setting-name'>
                        {name}
                        {isDisabled ? '(개발중)' : ''}
                    </h4>
                </div>
                <p className='setting-desc'>{description}</p>
            </div>
            <div className='setting-control'>
                <label className='toggle'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={onChange}
                        disabled={isDisabled}
                    />
                    <span className='toggle-slider'></span>
                </label>
            </div>
        </div>
    )
}

export default SettingItem
