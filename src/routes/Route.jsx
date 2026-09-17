import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import VisiMisi from "../pages/VisiMisi"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/visi-misi',
        element: <VisiMisi />,
    },
])

export default router