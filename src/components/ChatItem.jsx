import React from 'react'

function ChatItem(props) {
   const { name, message } = props.data;
   return (
      <div className='flex gap-4 my-4 items-center bg-green-200 rounded-sm px-1 py-1'>
         <img
            className='rounded-full h-8 w-8 '
            src='https://yt3.ggpht.com/hLk6XiFWfPdqlR6EDhNYmAuEjZ1YX2W7lMiGpg_WOxLNzS7_s6yypAp41BcGFk49VMS_-CeBi5o=s48-c-k-c0x00ffffff-no-rj' />
         <div>
            <h3>{name}</h3>
            <h4>{message}</h4>
         </div>


      </div>
   )
}

export default ChatItem;