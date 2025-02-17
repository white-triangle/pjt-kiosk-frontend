import MenuDetailWidget from '@/widgets/user/MenuDetailWidget'
import './detail.scss'

export default function UserDetail() {
    return (
        <>
            <MenuDetailWidget/>
            {/* store에서 체크된 값을 받아서 금액 변경해야 할듯? */}
            <div className='add-btn flex items-center justify-center'>
                Add to Cart - $12.99
            </div>
        </>
    )
}
