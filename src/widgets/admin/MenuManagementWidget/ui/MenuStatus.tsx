import '@/shared/admin/styles/Tab.scss'

export default function MenuStatus() {
    return (
        <div className='flex flex-row-reverse mb-4'>
            <div className='flex flex-col items-center'>
                <div className='tab__item tab__item-inactive mb-1 text-red-400'>
                    품절
                </div>
                <div className='tab__line-red'></div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='tab__item tab__item-active mb-1'>판매중</div>
                <div className='tab__line'></div>
            </div>
        </div>
    )
}
