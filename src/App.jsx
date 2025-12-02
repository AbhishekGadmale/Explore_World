import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  Country  from "./pages/Country";
import  Home  from "./pages/Home";
import  Contact  from "./pages/Contact";
import  About  from "./pages/About";
import AppLayout from "./Components/layout/AppLayout";
import { ErrorPage } from "./pages/errorPage";
import "./App.css"
const App = () => {
  
const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[ {
    path: "/",
    element: <Home />,
  },
  {
    path: "country",
    element: <Country />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "about",
    element: <About />,
  },]
  }
  
]);

  return <RouterProvider router={router} />;
};

export default App;
