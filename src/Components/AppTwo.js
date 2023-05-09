import React, { Component } from 'react';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemName: '',
      quantity: '',
      errors: {},
      isFormValid: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  handleAddItem = (event) => {
    event.preventDefault();
    const { itemName, quantity } = this.state;
    const newItem = { name: itemName, quantity: parseInt(quantity) };
    this.setState({ items: [...this.state.items, newItem], itemName: '', quantity: '' });
  };

  handleDeleteItem = (index) => {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  };

  validateForm = () => {
    const { itemName, quantity } = this.state;
    const errors = {};
    let isFormValid = true;

    if (!itemName.trim()) {
      errors.itemName = 'Item name is required';
      isFormValid = false;
    }

    if (!quantity.trim()) {
      errors.quantity = 'Quantity is required';
      isFormValid = false;
    } else if (isNaN(parseInt(quantity))) {
      errors.quantity = 'Quantity must be a number';
      isFormValid = false;
    }

    this.setState({ errors, isFormValid });
  };

  render() {
    const { items, itemName, quantity, errors, isFormValid } = this.state;

    return (
      <div>
        <h1>Inventory</h1>

        <form onSubmit={this.handleAddItem}>
          <div>
            <label htmlFor="itemName">Item name:</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={itemName}
              onChange={this.handleInputChange}
            />
            {errors.itemName && <span className="error">{errors.itemName}</span>}
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={this.handleInputChange}
            />
            {errors.quantity && <span className="error">{errors.quantity}</span>}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Add Item
          </button>
        </form>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} ({item.quantity}){' '}
              <button onClick={() => this.handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Inventory;