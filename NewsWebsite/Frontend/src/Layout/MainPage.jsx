import React from 'react'
import Sidebar from "../Layout/Sidebar"
import { Outlet } from 'react-router-dom'
import Header from './Header'

const MainPage = () => {
  return (
    <>
     <div className='min-w-screen min-h-screen '>
        <Sidebar />
        <div className='ml-[250px] w-[calc(100vw-268px)] min-h-[vh]'>
          <Header />
          <div className='p-4'>
            <div className='pt-[85px]'>
              <Outlet />

            </div>

          </div>
        </div>
        
       

     </div>
    </>
  )
}

export default MainPage