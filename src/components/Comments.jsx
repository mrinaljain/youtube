import React from 'react'
import Comment from "../components/Comment";
import comments from "../utils/mock_comments";
function Comments() {
   // recursion in react components
   const commentList = (comments) => {
      return comments.map((comment, index) => (
         <div>
            <Comment key={index} comment={comment} />
            <div className=" ml-8 bg-gray-100 rounded-sm px-2 py-1">
               {commentList(comment.replies)}
            </div>
         </div>
      ));
   };
   return (
      <div>
         <h3>773 Comments</h3>
         {commentList(comments)}
      </div>
   )
}

export default Comments