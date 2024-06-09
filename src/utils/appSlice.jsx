import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
   name: "header",
   initialState: {
      sideMenuVisible: true
   },
   reducers: {
      toggleVisibility: (state, action) => {
         state.sideMenuVisible = !state.sideMenuVisible;
      },
      closeSidebar: (state) => {
         state.sideMenuVisible = false;
      }
   }
});
export default appSlice.reducer;
export const { toggleVisibility, closeSidebar } = appSlice.actions;