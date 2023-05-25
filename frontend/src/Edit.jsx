import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [data, setData] = useState({
		itemname: '',
        quantity: ''
		
	})
	const navigate = useNavigate()
	
	const {id} = useParams();

	useEffect(()=> {
		axios.get('http://localhost:3001/get/'+id)
		.then(res => {
			setData({...data, itemname: res.data.Result[0].itemname,
				quantity: res.data.Result[0].quantity
			})
		})
		.catch(err =>console.log(err));
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put('http://localhost:3001/update/'+id, data)
		.then(res => {
			if(res.data.Status === "Success") {
				navigate('/product')
			}
		})
		.catch(err => console.log(err));
	}
    return (
        <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Update Product</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
			<div class="col-12">
				<label for="inputitemname" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="inputitemname" placeholder='Enter ItemName' autoComplete='off'
                onChange={e => setData({...data, itemname: e.target.value})} value={data.itemname}/>
			</div>
			<div class="col-12">
				<label for="inputquantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="inputquantity" placeholder='Enter Quantity'
                 onChange={e => setData({...data, quantity: e.target.value})} value={data.quantity} />
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-primary">Update Product</button>
			</div>
        </form>
    </div>
    )
}

export default Edit