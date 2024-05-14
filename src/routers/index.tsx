import {RouteObject, useRoutes} from 'react-router-dom'
import { AuthLayout } from 'layouts'
import { PATH } from 'constant'
import { Login, Register } from 'pages'

const router: RouteObject[] = [
    {   
        element: <AuthLayout/>,
        children: [
            {
                path: PATH.dangNhap,
                element: <Login/>
            },
            {
                path: PATH.dangKy,
                element: <Register/>
            },
        ]
    }
    
]

export const Router = () => useRoutes(router)
