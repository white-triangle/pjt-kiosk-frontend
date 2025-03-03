import MenuItem from './MenuItem'
import '../style/MenuList.scss'
import Burger from '../assets/burger.svg'
import Pizza from '../assets/pizza.svg'
import Salad from '../assets/salad.svg'

interface MenuItemType {
    id: number
    name: string
    description: string
    price: number
    img: string // 이미지 경로는 string 타입
}

export default function MenuList() {
    const menuItems: MenuItemType[] = [
        {
            id: 1,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 12.99,
            img: Burger, // 이미지 경로
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            description:
                'Classic pizza with fresh tomatoes, mozzarella cheese, and basil',
            price: 10.99,
            img: Pizza,
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description:
                'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 8.99,
            img: Salad,
        },
        {
            id: 4,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 12.99,
            img: Burger,
        },
        {
            id: 5,
            name: 'Caesar Salad',
            description:
                'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 8.99,
            img: Salad,
        },
        {
            id: 6,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 12.99,
            img: Burger,
        },
        {
            id: 7,
            name: 'Caesar Salad',
            description:
                'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan',
            price: 8.99,
            img: Salad,
        },
        {
            id: 8,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 16.992,
            img: Burger,
        },
        {
            id: 9,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 136.992,
            img: Burger,
        },
        {
            id: 10,
            name: 'Classic Burger',
            description:
                'Juicy beef patty with fresh lettuce, tomatoes, and melted cheese',
            price: 161.992,
            img: Burger,
        },
    ]

    return (
        <div className='menulist-wrap'>
            {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    )
}
