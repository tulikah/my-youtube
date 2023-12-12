import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../constants';
import { cacheResult } from './utils/searchSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchCache = useSelector((store) => store.search)
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchText]) {
                setSuggestions(searchCache[searchText])
            } else {
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line 
    }, [searchText])

    const getSearchSuggestions = async () => {
        
        const data = await fetch(YOUTUBE_SEARCH_API + searchText);
        const res = await data.json();
        setSuggestions(res[1]);
        console.log(suggestions);
        dispatch(cacheResult({
            [searchText]: res[1]
        }))
    }

    return (
        <div className="grid grid-flow-col m-2 p-2 shadow-lg">
            <div className="flex col-span-1 m-2">
                <img className="cursor-pointer w-10 h-10 mt-3" alt="menu" src="./menu.jpeg" onClick={ () => toggleMenuHandler() } />
                <img className="w-10 h-10 mt-3" alt="YTLogo" src="./YTlogo.png" />
            </div>
            <div className="col-span-10 mb-5 justify-center">
                <div className="">
                    <input className=" border-solid border-2 rounded-l-full w-96 h-8" type="text"
                        value={ searchText } onChange={ (e) => { setSearchText(e.target.value) } } />
                    <button><img className="mt-5 mx-3" width={ 20 } height={ 20 } alt="search" src="./search.png" /></button>
                </div>
                <div className="fixed bg-white w-96 shadow-lg">
                    <ul>
                        {suggestions.map((item) => 
                            <li key={item}>{item}</li>
                        )}
                    </ul>
                </div> 

            </div>
            <div className="col-span-1 mr-5 mb-3">
                <button className="bg-color-gray"><img width={ 40 } height={ 40 } alt="avatar" src="./avatar.png" /></button>
            </div>
        </div>
    )
}

export default Header
