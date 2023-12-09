import React from 'react'
import { useSelector } from 'react-redux'

const SideNavbar = () => {
const isMenuOpen = useSelector((store) => store.nav.isMenuOpen);

if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg col-span-1">
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
            </ul>
            <hr />
            <ul>
                <h1><strong>Subscription</strong></h1>
                <li>Music</li>
                <li>Art</li>
                <li>Sports</li>
            </ul>
            <hr />
            <ul>
                <h1><strong>You</strong></h1>
                <li>Music</li>
                <li>Art</li>
                <li>Sports</li>
            </ul>
            <hr />
            <ul>
                <h1><strong>Explore More</strong></h1>
                <li>Music</li>
                <li>Art</li>
                <li>Sports</li>
            </ul>
        </div>
    )
}

export default SideNavbar
