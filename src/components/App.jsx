import '../assets/styles/app.css'
import Header from './Header';
import SideNav from './SideNav';
import Display from './display';

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <SideNav />
                <Display />
            </div>
        </div>
    )
}

export default App;