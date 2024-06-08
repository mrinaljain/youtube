import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "search",
   initialState: {
   },
   reducers: {
      updateCache: (state, action) => {
         console.log("payload", action.payload);
         // state = { ...state, ...action.payload }
         state = Object.assign(state, action.payload);
      }
   }
});

export default searchSlice.reducer;
export const { updateCache } = searchSlice.actions; 