import '@/shared/admin/styles/List.scss'

export default function OrderHeader() {
    return (
        <div className='flex items-center list__header h-10'>
            <div className='flex-1 text-lg font-medium list__font-header'>
                주문번호
            </div>
            <div className='flex-1 text-lg font-medium list__font-header'>
                테이블
            </div>
            <div className='flex-1 text-lg font-medium list__font-header'>
                메뉴
            </div>
            <div className='flex-1 text-lg font-medium list__font-header'>
                상태
            </div>
            <div className='flex justify-center flex-1 text-lg font-medium list__font-header'>
                시간
            </div>
        </div>
    )
}
