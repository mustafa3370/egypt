import React from 'react'
import { Outlet } from 'react-router'
import Nav from './../navbar/Navbar';
import Footer from './../Footer/Footer';

function Layout() {
  return <>
    <Nav/>
    <Outlet/>
    <Footer/>
</>
}

export default Layout
