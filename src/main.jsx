import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Crime from './utils/components/Crime.jsx'
import Sports from './utils/components/Sports.jsx'
import Celebrity from './utils/components/Celebrity.jsx'
import Trending from './utils/components/Trending.jsx'
import Politics from './utils/components/Politics.jsx'
import Latest from './utils/components/Latest.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'/Crime',
      element:<Crime/>
    },{
      path:'/Sports',
      element:<Sports/>
    },{
      path:'/celebrity',
      element:<Celebrity/>
    },{
      path:'/trending',
      element:<Trending/>
    },{
      path:'/politics',
      element:<Politics/>
    },{
      path:'/latest',
      element:<Latest/>
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
