

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';


import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import UserButton from './components/UserButton';

import {UserContextProv} from "./context/UserContextProv"
import UserFavs from "./pages/UserFavs";
import RequireAuth from "./context/RequireAuth";

import AuthenticationProv from "./context/AuthenticationProv";
import Loader from './components/Loader';
import { useLoader } from './context/LoadContext'

function App() {
  //Loader
  const { loading } = useLoader();


  
  return (
    <AuthenticationProv>
      <UserContextProv >
        { loading ? ( <Loader />
        ) : (
        <div className="app">
          <Router>
            <div className="nav-bar">
              <span className="login-logout-button" >
                <UserButton />
              </span>
              <ul>
                <li> <NavLink to="/">Home </NavLink> </li>
                <li> 
                  <NavLink to="/users">
                    <i className="fa-solid fa-star"></i>My WatchList
                  </NavLink>
                </li>
              </ul>
            </div>
            <main>
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/users" element={ <RequireAuth> <UserFavs /> </RequireAuth> } />
                <Route path="*" element={<NotFound />} />
                <Route path="/loader" element={<Loader />} />
              </Routes>
            </main> 
          </Router>
          <Footer text={'© Viviana Yanez 2022 | Made with ♥︎ '}/>
        </div>
        )}
      </UserContextProv>
    </AuthenticationProv>
  );
}

export default App;
