import '../style/MenuDetailOptions.scss'
import React, { useState } from 'react';

const menuItems = [
  { name: "Extra Cheese", price: 1.50 },
  { name: "Bacon", price: 2.00 },
  { name: "Caramelized Onions", price: 1.00 },
  { name: "Caramelized Onions", price: 1.00 },
  { name: "Caramelized Onions", price: 1.00 },
  { name: "Caramelized Onions", price: 1.00 },
  { name: "Caramelized Onions", price: 1.00 },
];


export default function MenuDetailOptions(){

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target;
      if (checked) {
          setSelectedItems([...selectedItems, value]);
      } else {
          setSelectedItems(selectedItems.filter(item => item !== value));
      }
  };

  return(
    <div className='option-wrap'>
      <h5 className='mb-3'>Additional Options</h5>
      {/* 체크 항목은 store로 넘겨서 Add 버튼으로 보내야 할듯 싶은데 */}
      <div className='option-list'>
        {menuItems.map(item => (
          <div key={item.name} className='mb-1'>
              <label>
                  <input
                      type="checkbox"
                      value={item.name}
                      onChange={handleChange}
                  />&nbsp;
                  {item.name} (+${item.price.toFixed(2)})
              </label>
          </div>
        ))}
      </div>
      
      
    </div>
  )
}