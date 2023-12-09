import React from 'react'
import SideNavbar from './SideNavbar'
import VideoContainer from './VideoContainer'
import MainContainer from './MainContainer'


const Body = () => {
    return (
        <div className="grid grid-flow-col">
            <SideNavbar />
            <MainContainer />
        </div>
    )
}

export default Body
