import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NewsContent from "./NewsContent"
import StoreContext from '../Context/StoreContext.js'

const News = () => {

  const {store}=useContext(StoreContext)

  return (
    <div className='bg-slate-200 rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>News</h2>
        {
        store.userInfo && store.userInfo.role !=="admin" &&
        
          <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600 hover:text-white' to="/dashboard/news/create">Create News</Link>
        
        }
      </div>
      <NewsContent/>

    </div>
  )
}

export default News