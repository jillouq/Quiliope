import React, { useState } from 'react';
import "./styles.css";

function Inventory() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { name: name, quantity: parseInt(quantity) };
    if (editingIndex !== null) {
      // If we are editing an existing item, replace the item in the array
      const newItems = [...items];
      newItems[editingIndex] = newItem;
      setItems(newItems);
      setEditingIndex(null);
    } else {
      // Otherwise, add the new item to the end of the array
      setItems([...items, newItem]);
    }
    setName('');
    setQuantity('');
  };

  const handleEdit = (index) => {
    // When the user clicks the Edit button, set the editingIndex state variable to the index of the item
    const item = items[index];
    setName(item.name);
    setQuantity(item.quantity);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // When the user clicks the Delete button, remove the item from the array
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <center>
      <div>
      <h1 style={{backgroundColor: '#000080', color: 'white'}}>Medicine Inventory</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label><br/>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label><br/>
        <button type='submit'>{editingIndex !== null ? 'Save' : 'Add Item'}</button>
      </form>
    </div>
    <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
    
  );
}

export default Inventory;