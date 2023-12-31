import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/navSlice'
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const closeMenubar = useDispatch();

    useEffect(() => {
        closeMenubar(closeMenu());
    })
    return (
        <div>
            <div className="flex">
                <div className="ml-10">
                    <iframe width="1000" height="500" src="https://www.youtube.com/embed/vFxQyZX84Ro?si=Nn2LPTFrruw-dKWL"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
                <div>
                    <LiveChat />
                </div>
            </div>

            <div>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage
