import React from 'react'
import ButtonListContainer from './ButtonListContainer'
import VideoCard from './VideoCard'
import VideoContainer from './VideoContainer'


const MainContainer = () => {
    return (
        <div className="grid-cols-11 col-span-11">
            <ButtonListContainer />
            <VideoContainer />
        </div>
    )
}

export default MainContainer
