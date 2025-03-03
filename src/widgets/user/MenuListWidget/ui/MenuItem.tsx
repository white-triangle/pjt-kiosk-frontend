import { useNavigate } from 'react-router-dom'
import '../style/MenuItem.scss'

interface MenuItemProps {
    item: {
        id: number
        name: string
        description: string
        price: number
        img: string
    }
}

export default function MenuItem({ item }: MenuItemProps) {
    const navigate = useNavigate()
    const route = (id: number) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div
            onClick={() => route(item.id)}
            className='menuitem-wrap flex items-center mt-5'>
            <div className='menu-img flex items-center mr-3'>
                <img src={item.img} alt={item.name} />
            </div>
            <div className='menu-info pt-2 pb-2 flex flex-col justify-between'>
                <h5>{item.name}</h5>
                <p className='menu-detail'>{item.description}</p>
                <p className='menu-price'>${item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
