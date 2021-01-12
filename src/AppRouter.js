import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginButton from './Components/atoms/LoginButton';
import LogoutButton from './Components/atoms/LogoutButton';
import './index.css';
import "./css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/rootReducer';
import Routes from "./Routes/routes";

function AppRouter() {
    
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
                                
                            </div>
                        </div>
                        <LoginButton />
                        <LogoutButton />
                    </nav>
                    <Routes />
                    <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            </Router>
        </Provider>
    );
}

export default AppRouter;