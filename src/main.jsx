import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Display from './components/Display'
import FilteredCard from './components/FilteredCard'
import './index.css'
import App from './components/App'
import Cart from './components/Cart'
import Profile from './components/Profile'
import Wishlist from './components/Wishlist'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Display />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/discover/:timeFrame',
        element: <FilteredCard />
      },
      {
        path: '/games/:timeFrame',
        element: <FilteredCard />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/wishlist',
        element: <Wishlist />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
