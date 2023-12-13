import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Display from './components/Display'
import FilteredCard from './components/FilteredCard'
import './index.css'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <SideNav />
        <Outlet />
      </div>
    </div>
  )
}

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
