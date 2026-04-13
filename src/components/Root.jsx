import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Root = () => {
  return (
    <main>
        <NavBar />
        <Outlet />
        {/* <Footer /> */}
    </main>
  )
}

export default Root