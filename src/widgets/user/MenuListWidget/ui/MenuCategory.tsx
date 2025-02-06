import '../style/MenuCategory.scss'

// 캐러셀 필요
export default function MenuCategory() {
    return (
        <div className='category-wrap mb-9'>
            <ul className='category-list flex'>
                <li className='selected'>All</li>
                <li>Burgers</li>
                <li>Pizza</li>
                <li>Salads</li>
                <li>Drinks</li>
                <li>Desserts</li>
            </ul>
        </div>
    )
}
