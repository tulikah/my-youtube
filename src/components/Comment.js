import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className="flex w-3/5">
            <img className="w-20 h-20" alt="img" src="./comment-avatar.jpeg" />
            <div className="grid">
                <p className="m-2">@{ name }</p>
                <p className="m-2">{ text }</p>
            </div>
        </div>
    )
}

export default Comment
