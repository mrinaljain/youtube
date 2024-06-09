import React, { useEffect } from 'react'
import ChatItem from './ChatItem';
import { useSelector, useDispatch } from 'react-redux';
import { addChatItem } from '../utils/chatSlice';
import generateMessage from '../utils/generateMessage';
function LiveChat() {
   const chatItems = useSelector((state) => state.chat);
   const dispatch = useDispatch();
   useEffect(() => {
      //   API polling
      setInterval(() => {
         // dispatch action to add new chat reciver from API
         let action = generateMessage();
         dispatch(addChatItem(action));
      }, 5000);
      return () => {
         //  second
      }
   }, [])

   return (
      <div className="border border-gray-400 h-[75vh] rounded-md p-3 overflow-y-scroll">
         <h3>Top Chat</h3>
         <hr />
         <div className='flex flex-col-reverse'>
            {chatItems.map((item, index) => <ChatItem key={index} data={item} />)}
         </div>

      </div>
   )
}

export default LiveChat;

// Live chat planning
// use redux store to save chat and load via use selector
// we will use API polling to get chats every 2 seconds
// setup dummy API polling to add data to store