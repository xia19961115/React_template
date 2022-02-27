import About from "../pages/About"
import Home from "../pages/Home"
import {Navigate} from 'react-router-dom'
const routes = [
    {
        path:'/home',
        element:<Home />
    },
    {
        path:'/about',
        element:<About />
    },
    {
        path:'/',
        element:<Navigate to='/about' />
    }
]
export default routes