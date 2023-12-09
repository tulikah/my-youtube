import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { videoList } from '../constants'


const VideoContainer = () => {

    useEffect(() => {
        getVideoList();
    }, [])

    const getVideoList = async() => {
        const list = await fetch(videoList);
        const json = await list.json();
        console.log(json);
        return json;
    } 

    return (
        <div>
            <VideoCard />
        </div>
    )
}

export default VideoContainer
