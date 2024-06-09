import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
   name: "chat",
   initialState: [
   ],
   reducers: {
      addChatItem: (state, action) => {
         if (state.length > 20) {
            state.slice(1, 5);
         }
         state.unshift(action.payload);
      }
   }
});

export default chatSlice.reducer;
export const { addChatItem } = chatSlice.actions;

// Default chat structure
// [
// {
//    name: "",
//    message: ""
// },
// {
//    name: "",
//    message: ""
// }
// ]