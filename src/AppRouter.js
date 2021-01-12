import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Gallery from "./Components/Pages/Gallery";
// import * as Reducer from './Components/atoms/reducer';
import LoginButton from './Components/atoms/LoginButton';
import LogoutButton from './Components/atoms/LogoutButton';
import Add from "./Components/Pages/Add";
import Remove from "./Components/Pages/Remove";
import './index.css';
import "./css/style.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/rootReducer';
// import { addAction, removeAction } from "./Redux/Image/imageActions";

// export const imageContext = React.createContext()

function AppRouter() {

    // const [image, setImage] = useReducer(Reducer.reducer, Reducer.initialState)
    
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <div className="header">
                        <h1 className="title">WELCOME!</h1>
                    </div>
                    <nav className="topnav">
                        <Link to="/">Home</Link>
                        <Link to="/about/">About</Link>
                        <Link to="/contact/">Contact</Link>
                        <Link to="/gallery/">Gallery</Link>
                        
                        <div className="dropdown">
                            <button className="dropbtn">
                                Gallery Admin
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <li>
                                    <Link to="/add/">Add Image</Link>
                                </li>
                                <li>
                                    <Link to="/remove/">Remove Image</Link>
                                </li>
                                {/* <li>
                                    <Link to="/add/">Update Image</Link>
                                </li> */}
                            </div>
                        </div>
                        <LoginButton />
                        <LogoutButton />
                    </nav>
                    {/* <imageContext.Provider value={{image, setImage}}> */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about/"  component={About} />
                    <Route path="/contact/"  component={Contact} />
                    <Route path="/gallery/"  component={Gallery} />
                    <Route path="/add/" component={Add} />
                    <Route path="/remove/" component={Remove} />
                    {/* </imageContext.Provider> */}
                    <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            </Router>
        </Provider>
    );
}

export default AppRouter;