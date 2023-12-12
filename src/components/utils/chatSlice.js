import { createSlice } from '@reduxjs/toolkit'; 

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        liveChat: []
    },
    reducers: {
        updateChat: (state, action) => {
            state.liveChat.splice(10, 1)
            state.liveChat.push(action.payload);
        }

    }
})
export const { updateChat } = chatSlice.actions;
export default chatSlice.reducer
