import React, { useState } from 'react'
import '../style/CartItem.scss'
import Burger from '../assets/burger.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash,
    faPenToSquare,
    faPlus,
    faMinus,
} from '@fortawesome/free-solid-svg-icons'

interface CartItemProps {
    onModify: () => void
}

export default function CartItem({ onModify }: CartItemProps) {
    const [quantity, setQuantity] = useState<number>(1)

    const handleIncrease = (): void => {
        setQuantity((prevQuantity) => prevQuantity + 1)
    }

    const handleDecrease = (): void => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }

    return (
        <div className='cart-item-card mb-3'>
            <FontAwesomeIcon className='delete-btn' icon={faTrash} />
            <div className='cart-item-content flex items-center p-2'>
                <img className='item-img mr-2' src={Burger} alt='' />
                <div className='item-info'>
                    <h6 className='item-name'>Classic Burger</h6>
                    <p className='item-options'>Extra Cheese, Bacon</p>
                    <p className='item-modify-btn' onClick={onModify}>
                        <FontAwesomeIcon
                            className='mr-1'
                            icon={faPenToSquare}
                        />
                        Modify options
                    </p>
                    <p className='item-price'>$16.49</p>
                </div>
                <div className='item-quantity flex items-center'>
                    <button
                        className='quantity-btn flex items-center justify-center'
                        onClick={handleDecrease}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className='ml-4 mr-4'>{quantity}</span>
                    <button
                        className='quantity-btn flex items-center justify-center'
                        onClick={handleIncrease}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}
