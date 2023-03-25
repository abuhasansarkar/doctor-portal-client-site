import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../pages/Appointment/Appointment";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SingUp from "../../pages/SingUp/SingUp";

export const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/singup',
                    element: <SingUp></SingUp>
               },
               {
                    path: '/appointment',
                    element: <Appointment></Appointment>
               }

          ]
     }
]);
