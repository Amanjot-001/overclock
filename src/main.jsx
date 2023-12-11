import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Display from './components/display'
import FilteredCard from './components/FilteredCard'
import './index.css'

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
        path: '/discover/:timeFrame',
        element: <FilteredCard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
