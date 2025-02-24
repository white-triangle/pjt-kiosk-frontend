import React, { useState } from 'react'
import CartList from './ui/CartList'
import CartOrder from './ui/CartOrder'
import './style/CartWidget.scss'
import OptionChange from './ui/OptionChange'

export default function CartWidget() {
    const [isOptionChangeOpen, setIsOptionChangeOpen] = useState(false)
    const [isCartOrderOpen, setIsCartOrderOpen] = useState(true)

    const toggleOptionChange = () => {
        setIsOptionChangeOpen((prev) => !prev)
        setIsCartOrderOpen((prev) => !prev)
    }

    const handleCloseOptionChange = () => {
        setIsOptionChangeOpen(false)
        setIsCartOrderOpen(true)
    }

    return (
        <div className='cart-wrap'>
            <h5 className='cart-title text-center pb-7'>Cart</h5>
            <CartList onModify={toggleOptionChange} />
            {isCartOrderOpen && <CartOrder />}
            <OptionChange
                isOpen={isOptionChangeOpen}
                onClose={handleCloseOptionChange}
            />
        </div>
    )
}
