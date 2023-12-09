import React from 'react'

const Buttons = ({name}) => {
    return (
        <div>
            <button className="bg-slate-200 p-2 m-2 w-15 h-10 rounded-lg">{name}</button>
        </div>
    )
}

export default Buttons
