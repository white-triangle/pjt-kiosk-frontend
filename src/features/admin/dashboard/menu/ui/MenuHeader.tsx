export default function MenuHeader() {
    return (
        <div className='menu-header'>
            <div className='flex items-center list__header h-10'>
                <div className='flex-1 text-lg font-medium list__font-header'>
                    이미지
                </div>
                <div className='flex-1 text-lg font-medium list__font-header'>
                    메뉴명
                </div>
                <div className='flex-1 text-lg font-medium list__font-header'>
                    카테고리
                </div>
                <div className='flex flex-1 text-lg font-medium list__font-header'>
                    가격
                </div>
                <div className='flex-1 text-lg font-medium list__font-header'>
                    상태
                </div>
            </div>
        </div>
    )
}
