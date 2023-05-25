import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./Dashboard"
import Items from "./Items"
import Inventory from "./Inventory"
import AddItem from "./AddItem"
import Edit from "./Edit"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='/product' element={<Items />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/add' element={<AddItem />}></Route>
        <Route path='/productEdit/:id' element={<Edit />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
