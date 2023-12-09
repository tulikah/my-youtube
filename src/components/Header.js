import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './utils/navSlice';

const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col m-2 p-2 shadow-lg">
           <div className="flex flex-row space-between m-2">
               <img className="cursor-pointer" width={50} height={50} alt="menu" src="./menu.jpeg" onClick={() => toggleMenuHandler()}/>
               <img width={50} height={50} alt="YTLogo" src="./YTlogo.png" />
           </div>
           <div className="flex-row-reverse mb-5">
               <input className="border-solid border-2 rounded-l-full w-1/2 h-8" type="text" />
               <button><img className="mt-5 mx-3" width={20} height={20} alt="search" src="./search.png" /></button>
           </div>
           <div className="flex flex-row-reverse mr-5 mb-3">
           <button className="bg-color-gray"><img width={40} height={40} alt="avatar" src="./avatar.png"/></button>
           </div>
        </div>
    )
}

export default Header
