import React from 'react'
import SideNavbar from './SideNavbar'
import { Outlet } from 'react-router-dom'


const Body = () => {
    return (
        <div className="grid grid-flow-col">
            <SideNavbar />
            <Outlet />
        </div>
    )
}

export default Body
