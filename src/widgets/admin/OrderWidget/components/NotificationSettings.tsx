import React, { useState } from 'react'
import SettingItem from './SettingItem'
// React Icons 임포트
import { MdNotifications, MdEmail, MdVolumeUp } from 'react-icons/md'
import { FaBell, FaRegCalendarCheck, FaBoxOpen } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { AiOutlineInfoCircle, AiOutlineDesktop } from 'react-icons/ai'

const NotificationSettings: React.FC = () => {
    const [settings, setSettings] = useState({
        newOrderAlert: true,
        orderStatusChangeAlert: true,
        lowStockAlert: false,
        dailySummaryAlert: true,
        desktopNotifications: true,
        emailNotifications: false,
        soundNotifications: true,
        orderCancelAlert: true,
        orderDelayAlert: true,
    })

    const handleToggle = (key: keyof typeof settings) => {
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    return (
        <div className='notification-settings'>
            <h2 className='settings-title'>알림 설정</h2>
            <p className='settings-description'>
                주문 및 재고 관련 알림을 설정하여 효율적으로 매장을 관리하세요.
            </p>

            <div className='settings-section'>
                <h3 className='section-title'>알림 유형</h3>

                <SettingItem
                    name='새 주문 알림'
                    description='새로운 주문이 들어오면 알림을 받습니다.'
                    isChecked={settings.newOrderAlert}
                    onChange={() => handleToggle('newOrderAlert')}
                    icon={<MdNotifications />}
                    iconColor='blue'
                />

                <SettingItem
                    name='주문 취소 알림'
                    description='주문이 취소되면 알림을 받습니다.'
                    isChecked={settings.orderCancelAlert}
                    onChange={() => handleToggle('orderCancelAlert')}
                    icon={<IoMdClose />}
                    iconColor='red'
                />

                <SettingItem
                    name='주문 지연 알림'
                    description='주문이 지연되면 알림을 받습니다.'
                    isChecked={settings.orderDelayAlert}
                    onChange={() => handleToggle('orderDelayAlert')}
                    icon={<BsClockHistory />}
                    iconColor='yellow'
                />

                <SettingItem
                    name='주문 상태 변경 알림'
                    description='주문 상태가 변경되면 알림을 받습니다.'
                    isChecked={settings.orderStatusChangeAlert}
                    onChange={() => handleToggle('orderStatusChangeAlert')}
                    icon={<AiOutlineInfoCircle />}
                    iconColor='purple'
                />

                <SettingItem
                    name='재고 부족 알림'
                    description='상품 재고가 부족할 때 알림을 받습니다.'
                    isChecked={settings.lowStockAlert}
                    onChange={() => handleToggle('lowStockAlert')}
                    isDisabled={true}
                    icon={<FaBoxOpen />}
                    iconColor='green'
                />

                <SettingItem
                    name='일일 요약 알림'
                    description='매일 영업 마감 후 주문 요약 정보를 받습니다.'
                    isChecked={settings.dailySummaryAlert}
                    onChange={() => handleToggle('dailySummaryAlert')}
                    isDisabled={true}
                    icon={<FaRegCalendarCheck />}
                    iconColor='blue'
                />
            </div>

            <div className='settings-section'>
                <h3 className='section-title'>알림 방법</h3>

                <SettingItem
                    name='데스크톱 알림'
                    description='브라우저에서 데스크톱 알림을 표시합니다.'
                    isChecked={settings.desktopNotifications}
                    onChange={() => handleToggle('desktopNotifications')}
                    icon={<AiOutlineDesktop />}
                    iconColor='dark'
                />

                <SettingItem
                    name='이메일 알림'
                    description='중요 알림을 이메일로 받습니다.'
                    isChecked={settings.emailNotifications}
                    onChange={() => handleToggle('emailNotifications')}
                    isDisabled={true}
                    icon={<MdEmail />}
                    iconColor='blue'
                />

                <SettingItem
                    name='소리 알림'
                    description='새 주문이나 중요 알림이 있을 때 소리로 알려줍니다.'
                    isChecked={settings.soundNotifications}
                    onChange={() => handleToggle('soundNotifications')}
                    icon={<MdVolumeUp />}
                    iconColor='dark'
                />
            </div>

            <div className='settings-actions'>
                <button className='save-button'>설정 저장</button>
            </div>
        </div>
    )
}

export default NotificationSettings
