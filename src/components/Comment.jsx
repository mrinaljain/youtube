import React from 'react'

function Comment(props) {
   const { userName, message, userImage } = props.comment;
   return (
      <div className='flex items-center gap-3 my-2 bg-gray-200 rounded-sm px-2'>
         <img
            className="rounded-full"
            src={userImage}
         />
         <div>
            <h3 className='font-bold'>{userName}</h3>
            <p>{message}</p>
         </div>
      </div>
   )
}

export default Comment;