import { createBrowserRouter } from "react-router-dom";
import Watch from "./pages/Watch";
import HomeLayout from "./components/HomeLayout";
import Body from "./components/Body";


export let routes = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "watch", element: <Watch /> },
    ],
  },
]);
