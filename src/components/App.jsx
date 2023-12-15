import Header from './Header'
import SideNav from './SideNav'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <div className="container">
                    <SideNav />
                    <Outlet />
                </div>
            </div>
        </Provider>
    )
}

export default App;