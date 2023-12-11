import React from 'react'
import ReactDOM from 'react-dom/client'
import { useParams } from 'react-router-dom'
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

const FilteredCardWrapper = () => {
  const { timeFrame } = useParams();

  return <FilteredCard api_name={timeFrame} />;
};

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
        element: <FilteredCardWrapper />
      },
      // {
      //   path: '/discover/this-week',
      //   element: <FilteredCard />
      // },
      // {
      //   path: '/discover/next-week',
      //   element: <FilteredCard />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
