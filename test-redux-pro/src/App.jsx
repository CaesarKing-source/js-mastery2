import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router';
import { navigation } from './constant/navigation';

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white p-4'>
      <h2 className='text-3xl text-amber-200 mb-2'>React Redux Toolkit 2025</h2>
      { 
        navigation.map((nav) => (
          <NavLink className={({ isActive}) => `${isActive ? 'text-amber-200 font-medium border-b-[1px] border-b-amber-200 mr-2': 'text-amber-100 mr-2'}`} 
          key={nav.id} to={`${nav.path}`}>{nav.title}</NavLink>
        ))
      }
      <Outlet />
    </div>
  )
}

export default App
