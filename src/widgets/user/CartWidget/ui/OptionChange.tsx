import '../style/OptionChange.scss'
import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const menuItems = [
    { name: 'Extra Cheese', price: 1.5 },
    { name: 'Bacon', price: 2.0 },
    { name: 'Caramelized Onions', price: 1.0 },
    { name: 'Caramelized Onions2', price: 1.0 },
    { name: 'Caramelized Onions3', price: 1.0 },
    { name: 'Caramelized Onions4', price: 1.0 },
    { name: 'Caramelized Onions5', price: 1.0 },
    { name: 'Caramelized Onions6', price: 1.0 },
    { name: 'Caramelized Onions7', price: 1.0 },
    { name: 'Caramelized Onions8', price: 1.0 },
    { name: 'Caramelized Onions9', price: 1.0 },
    { name: 'Caramelized Onions10', price: 1.0 },
]

interface OptionChangeProps {
    isOpen: boolean
    onClose: () => void
}

function OptionChange({ isOpen, onClose }: OptionChangeProps) {
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [height, setHeight] = useState<number>(250)
    const wrapRef = useRef<HTMLDivElement>(null)
    const startY = useRef<number>(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target
        if (checked) {
            setSelectedItems([...selectedItems, value])
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== value))
        }
    }

    const handleDrag = (event: MouseEvent) => {
        if (wrapRef.current) {
            const newHeight = Math.min(
                Math.max(height - (event.clientY - startY.current), 180),
                700
            )

            const optionList = wrapRef.current.querySelector('.option-list')
            if (optionList) {
                const isOverflowing =
                    optionList.scrollHeight > optionList.clientHeight

                if (!isOverflowing) {
                    setHeight((prevHeight) => Math.min(prevHeight, newHeight))
                } else {
                    setHeight(newHeight)
                }
            }
        }
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        startY.current = e.clientY
        document.addEventListener('mousemove', handleDrag)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleDrag)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleSave = () => {
        console.log('Selected Items:', selectedItems)
        onClose()
    }

    if (!isOpen) return null

    return (
        <div
            className='option-change-wrap'
            ref={wrapRef}
            style={{ height: `${height}px` }}>
            <div
                className='split flex items-center justify-center'
                onMouseDown={handleMouseDown}>
                <span></span>
            </div>
            <FontAwesomeIcon
                className='close-btn'
                icon={faXmark}
                onClick={onClose}
            />
            <div className='option-change-content pl-4'>
                <h6 className='option-title'>
                    <span>Classic Burger</span> Options
                </h6>
                <p className='option-desc mt-3 mb-3'>
                    Customize your burger with these options
                </p>
                <div
                    className='option-list'
                    style={{
                        height: `calc(${height}px - 150px)`,
                        overflowY: 'auto',
                    }}>
                    {menuItems.map((item) => (
                        <div key={item.name} className='mb-1'>
                            <label>
                                <input
                                    type='checkbox'
                                    value={item.name}
                                    onChange={handleChange}
                                />
                                &nbsp;
                                {item.name} (+${item.price.toFixed(2)})
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center mt-2'>
                <button className='save-btn' onClick={handleSave}>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default OptionChange
