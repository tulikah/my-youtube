import React from 'react'
import Buttons from './Buttons'

const ButtonListContainer = () => {
    const buttonList = ['All', 'Live', 'Music', 'Gaming', 'Yoga', 'Tennis', 'Cooking', 'Country', 'Travel', 'Blogs'];
    return (
        <div className="flex">
            { buttonList.map((button) => <Buttons name={button} key={button}/>) }
        </div>
    )
}

export default ButtonListContainer
