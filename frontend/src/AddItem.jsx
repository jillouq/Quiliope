import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem() {
    const [data, setData] = useState({
		itemname: '',
		quantity: ''
	});
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		const formdata = new FormData();
		formdata.append("itemname", data.itemname);
		formdata.append("quantity", data.quantity);
        axios.post('http://localhost:3001/add/', formdata)
		.then(res => {
			alert('success')
			navigate('/product');
		})
		.catch(err => console.log(err));
	}
    return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Product</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>
				<div className="col-12">
					<label htmlFor="inputproductname" className="form-label">Item Name</label>
					<input type="text" className="form-control" id="inputproductname" placeholder='Enter Item Name' autoComplete='off'
						onChange={e => setData({...data, itemname: e.target.value})} value={data.itemname}/>
				</div>
				<div className="col-12">
					<label htmlFor="inputquantity" className="form-label">Quantity</label>
					<input type="number" className="form-control" id="inputquantity" placeholder='Enter Quantity'
						onChange={e => setData({...data, quantity: e.target.value})} value={data.quantity}/>
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Create</button>
				</div>
			</form>
		</div>
    );
}

export default AddItem;