import './style/AdBannerWidget.scss'
import AdBannerCarousel from './ui/AdBannerCarousel'

// 캐러셀 필요
export default function AdBannerWidget() {
    return (
        <div className='ad-wrap flex items-center mt-3 mb-6'>
            <AdBannerCarousel />
        </div>
    )
}
