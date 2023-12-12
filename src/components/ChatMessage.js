import React from 'react'

const ChatMessage = ({name, text}) => {
    return (
        <div className="flex m-1">
            <img width={ 30 } height={ 30 } alt="avatar" src="./avatar-2.jpeg" />
            <div className="flex ml-1">
            <span className="pr-1"><strong>{name}</strong></span>
            <span className="pl-2">{text}</span>
            </div>

        </div>
    )
}

export default ChatMessage
