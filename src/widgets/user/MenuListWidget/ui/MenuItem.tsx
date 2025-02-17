import '../style/MenuItem.scss'
import Burger from '../assets/burger.svg'
import Pizza from '../assets/pizza.svg'
import Salad from '../assets/salad.svg'

export default function MenuItem() {
    return (
        <div className='menuitem-wrap flex items-center mb-5'>
            <div className='menu-img flex items-center mr-3'>
                <img src={Burger} alt='' />
            </div>
            <div className='menu-info pt-2 pb-2 flex flex-col justify-between'>
                <h5>Classic Burger</h5>
                <p className='menu-detail'>
                    Juicy beef patty with fresh lettuce, tomatoes, and melted
                    cheese
                </p>
                <p className='menu-price'>$12.99</p>
            </div>
        </div>
    )
}
