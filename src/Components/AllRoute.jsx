import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ChartsMaps from './ChartsMaps'
import ContactPage from './ContactPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/charts&maps" element={<ChartsMaps/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes