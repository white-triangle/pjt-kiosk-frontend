import '../style/HistoryItem.scss'
import Burger from '../assets/burger.svg'

export default function HistoryItem() {
    return (
        <div className='item-wrap flex items-center mt-4'>
            <img className='item-img mr-2' src={Burger} alt='' />
            <div className='item-info'>
                <h6 className='item-name'>Classic Burger</h6>
                <p className='item-options'>Extra Cheese, Bacon</p>
                <p className='item-quantity'>
                    <span className='quantity'>1</span>ea
                </p>
            </div>
            <div className='item-price text-center'>
                $<span className='price'>12.99</span>
            </div>
        </div>
    )
}
