import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { updateChat } from './utils/chatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.liveChat);
    console.log('Chat messages:', messages);
    useEffect(() => {
        setInterval(() => {
            // getMessages()
            console.log("API Polling");
            dispatch(updateChat({
                'name': 'Jyoti',
                'text': 'This is API Polling!'
            }));
        }, 2000);
        return clearInterval()
    }, [])

    // const getMessages = () => {

    // }

    return (
        <div className="border border-black border-2 ml-2  h-[600px] w-[500px] overflow-y-scroll flex-col-reverse">
            { messages.map((chat) => <ChatMessage name={ chat.name } text={ chat.text } />
            ) }
        </div>
    )
}

export default LiveChat
