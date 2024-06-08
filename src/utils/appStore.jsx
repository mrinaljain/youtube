import { configureStore } from "@reduxjs/toolkit"
import headerReducer from "./appSlice"
const appStore = configureStore(
   {
      reducer: {
         header: headerReducer,
      }
   }
);

export default appStore;