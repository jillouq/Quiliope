import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

function Items() {
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

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }
    return (
        <div className='px-5 py-3'>
            <div className='d-flex justify-content-center mt-2'>
                <h3>Medicine List</h3>
            </div>
            {/*<Link to='/createproduct' className= 'btn btn-success'>Add Motorparts</Link>*/}
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
                    <Link to={`/productEdit/`+ medicinetb.id} className='btn btn-primary btn-sm me-2'>Edit</Link>
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

export default Items