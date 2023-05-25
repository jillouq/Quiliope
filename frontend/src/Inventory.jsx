import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

function Inventory() {
    const [data, setData] = useState([])

    useEffect(()=> {
      axios.get('http://localhost:3001/getProduct')
      .then(res => {
        if(res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
    }, [])
    return (
        <div className='px-5 py-3'>
        <div className='d-flex justify-content-center mt-2'>
            <h3> Inventory List</h3>
        </div>
        <Link to='/add' className= 'btn btn-success'>Add Inventory</Link>
        <div className='mt-3'>
    <table className='table'>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((medicinetb, index) => {
          return <tr key={index}>
              <td>{medicinetb.itemname}</td>
              <td>{medicinetb.quantity}</td>
              <td>
                <Link to={`/productEdit/`+medicinetb.id} className='btn btn-primary btn-sm me-2'>Edit</Link>
                <button onClick={e => handleDelete(medicinetb.id)} className='btn btn-sm btn-danger'>Delete</button>
              </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
</div>
    )
}

export default Inventory