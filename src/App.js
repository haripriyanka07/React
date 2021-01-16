import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/rootReducer';
import Routes from "./Routes/routes";
import Appbar from "./Components/Organism/AppBar/AppBar";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
    return (
        <Provider store={store}>
            <StylesProvider injectFirst>
            <Router>    
                <Appbar />
                <Routes />
                <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </Router>
            </StylesProvider>
        </Provider>
    );
}

export default App;