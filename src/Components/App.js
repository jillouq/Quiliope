import React, { useState } from 'react';

function Inventory() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() === '') return;

    const newItem = { name: itemName };
    setItems([...items, newItem]);
    setItemName('');
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Inventory</h1>

      <div>
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}{' '}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
