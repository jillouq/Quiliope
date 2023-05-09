import React, { useState } from 'react';

function Inventory() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name: name, quantity: parseInt(quantity) };
    setItems([...items, newItem]);
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <h1>Inventory</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label><br/>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label><br/>
        <button type="submit">Add Item</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;