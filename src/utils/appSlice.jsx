import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
   name: "header",
   initialState: {
      sideMenuVisible: true
   },
   reducers: {
      toggleVisibility: (state, action) => {
         console.log("action Started");
         console.log(action.payload);
         state.sideMenuVisible = !state.sideMenuVisible;
      }
   }
});
export default appSlice.reducer;
export const { toggleVisibility } = appSlice.actions;