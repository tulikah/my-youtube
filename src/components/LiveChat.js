import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { updateChat } from './utils/chatSlice';
import generateRandomText from './helpers/randomSentences';
import generateRandomNames from './helpers/randomNames';

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState();
    const messages = useSelector((store) => store.chat.liveChat);

    useEffect(() => {
        setInterval(() => {
            dispatch(updateChat({
                'name': 'Jyoti',
                'text': 'This is API Polling!'
            }));
        }, 4000);
        return clearInterval()
    }, [])

    // const getMessages = () => {

    // }
    const updateLiveMessage =() => {
        dispatch(updateChat({'name':"Don", 'text':liveMessage}))
    }
    return (
        <>
            <div className="border border-black border-2 ml-2  h-[500px] w-[500px] overflow-y-scroll flex-col-reverse">
                { messages.map((chat) => <ChatMessage name={ generateRandomNames() } text={ generateRandomText(1,1) } />
                ) }
            </div>
            <form className="border border-black-2 ml-2" 
              onSubmit={(e) => { 
                e.preventDefault();
                  updateLiveMessage();
                  setLiveMessage('');
              }
              }>
                <input className="border border-black-2 pl-2 w-[450px]" type="text" value={liveMessage} 
                onChange={(e) => setLiveMessage(e.target.value)}/>
                <button className="border border-black-2 bg-slate-100 w-[50px] h-7 ">Send</button>
            </form>
        </>
    )
}

export default LiveChat
