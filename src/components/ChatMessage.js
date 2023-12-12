import React from 'react'

const ChatMessage = ({ name, text }) => {
    return (
        <div className="flex ui-sans-serif">
            <div className="w-10 h-10">
                <img  alt="avatar" src="./avatar-2.jpeg" />
            </div>

            <div className="flex p-1">
                <p className="p-1"><strong>{ name }</strong></p>
                <p className="p-1">{ text }</p>
            </div>

        </div>
    )
}

export default ChatMessage
