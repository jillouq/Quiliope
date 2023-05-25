import React, { useEffect } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css'

function Dashboard()  {
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:3001/dashboard')
        .then(res => {
            res.data.Status === "Success"
        })
    }, [])

    return (
        <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span class="fs-5 d-none d-sm-inline align-items-center justify-content-center">
                            <p><b>MENU</b></p>
                        </span>
                    </a>
                    <ul className="menu">
                        <li>
                            <Link to="/inventory" class="nav-link px-0 align-middle">
                            <span class="ms-1 d-none d-sm-inline">INVENTORY</span> </Link>
                        </li>
                        <li>
                            <Link to="/product"class="nav-link px-0 align-middle">
                            <span class="ms-1 d-none d-sm-inline">MEDICINE LIST</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col p-2 m-2">
                <div className='Dashboard'>
                    <h4 style={{fontWeight: "bolder"}}> Medicine Inventory Management System</h4>
                </div>
                <Outlet />
            </div>
        </div>
    </div>
    )
}

export default Dashboard;