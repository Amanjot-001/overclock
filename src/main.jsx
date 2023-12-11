import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// import App from './components/App'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Display from './components/display'
import Last30Days from './components/Last30Days'
import './index.css'
import '../src/assets/styles/app.css'

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
        path: '/discover/last-30-days',
        element: <Last30Days />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
