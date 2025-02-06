import '../style/AdBannerWidget.scss'

interface AdBannerCarouselProps {
    images: string[]
}

export default function AdBannerCarousel() {
    return (
        <div className='ad-banner-carousel'>
            <img
                src='https://cdn.pixabay.com/photo/2025/02/01/06/52/ai-generated-9374277_1280.jpg'
                alt=''
            />
        </div>
    )
}
