import React from 'react'
import Comment from './Comment';

const commentsData = [
    {
        id: 1,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: []
    },
    {
        id: 2,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: [
            {
                id: 3,
                name: 'Tulika',
                text: 'some comments are commented in this commented box',
                replies: [
                    {
                        id: 4,
                        name: 'Tulika',
                        text: 'some comments are commented in this commented box',
                        replies: [
                            {
                                id: 5,
                                name: 'Tulika',
                                text: 'some comments are commented in this commented box',
                                replies: [
                                    {
                                        id: 6,
                                        name: 'Tulika',
                                        text: 'some comments are commented in this commented box',
                                        replies: []
                                    },
                                    {
                                        id: 7,
                                        name: 'Tulika',
                                        text: 'some comments are commented in this commented box',
                                        replies: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: 8,
                name: 'Tulika',
                text: 'some comments are commented in this commented box',
                replies: []
            }
        ]
    },
    {
        id: 9,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: []
    },
    {
        id: 10,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: []
    },
    {
        id: 11,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: []
    },
    {
        id: 12,
        name: 'Tulika',
        text: 'some comments are commented in this commented box',
        replies: []
    }

]

const CommentList = ({ comments }) => {
    return comments.map((comment) =>
        <div>
            <Comment key={ comment.id } data={ comment } />
            <div className="pl-5 border border-l-black m-l-5">
                <CommentList key={ comment.id } comments={ comment.replies } />
            </div>
        </div>
    )
}


const CommentsContainer = () => {
    return (
        <div className="mx-10 p-10">
            <h1 className="text-2xl font-bold">Comments</h1>
            <CommentList comments={ commentsData } />
        </div>
    )
}

export default CommentsContainer;
