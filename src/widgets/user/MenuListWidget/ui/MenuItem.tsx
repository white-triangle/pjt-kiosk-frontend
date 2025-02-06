import '../style/MenuItem.scss'
import Burger from '../assets/burger.svg'
import Pizza from '../assets/pizza.svg'
import Salad from '../assets/salad.svg'

export default function MenuItem() {
    return (
        <div className='menuitem-wrap p-2 flex items-center'>
            <div className='menu-img flex items-center mr-3'>
                <img src={Burger} alt='' />
            </div>
            <div className='menu-info pt-2 pb-2'>
                <h5>Classic Burger</h5>
                <p>
                    Juicy beef patty with fresh lettuce, tomatoes, and melted
                    cheese
                </p>
                <p>$12.99</p>
            </div>
        </div>
    )
}
