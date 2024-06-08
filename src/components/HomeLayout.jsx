import React from 'react'
import Header from "./Header"
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
   return (
      <>
         <Header />
         <div className='flex'>
            <SideBar />
            <Outlet />
         </div >
      </>
   )
}

export default HomeLayout