export default function MenuHeader() {
    // 이미지,메뉴명,카테고리,가격
    return (
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
    )
}
