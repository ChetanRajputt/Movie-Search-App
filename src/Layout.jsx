import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Layout = () => {

  return (
    <div className='w-full pb-16 overflow-hidden'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
