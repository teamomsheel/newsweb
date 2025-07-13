import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

import { useContext } from 'react'
import StoreContext from '../../Context/StoreContext.js'
const Rolebase = ({role}) => {

  const {store}=useContext(StoreContext)

  //  const userData={
  //   name:"Major Sunil Shetty",
  //   role:"writer"
  // }

  if(store.userInfo?.role === role){
    return <Outlet />

  }else{
    return <Navigate to="/dashboard/unable-access" />
  }
}

export default Rolebase