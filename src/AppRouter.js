import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import LoginButton from './Components/atoms/LoginButton';
import LogoutButton from './Components/atoms/LogoutButton';
import './index.css';
import "./css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './Redux/rootReducer';
import Routes from "./Routes/routes";
import { AppBar, Toolbar, Avatar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from './Components/atoms/Link/Link';
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles({
    // This group of buttons will be aligned to the right
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -12
    },
    avatar: {
      padding: 20
    },
    title: {
        fontWeight: "fontWeightBold",
        fontSize: '2rem'
    }
  })

function AppRouter() {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <AppBar color='white' style={{height:"10%"}}>
                        <Toolbar style={{marginLeft:"20%", marginRight:"20%", height:"100%"}}>
                            <Avatar className={classes.avatar} alt="logo" src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/mkpmfymurbklrv3twgxh" />
                            <Typography color="default" className={classes.title}>
                            Zemoso
                            </Typography>
                        
                            <section className= {classes.rightToolbar}>
                            
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact</Link>
                            <Link to='/gallery'>Gallery</Link>
                            {isAuthenticated && (
                            <>
                                <Link to="/add/">Add Image</Link>
                                <Link to="/remove/">Remove Image</Link>
                            </>
                            )}
                            
                            <LoginButton />
                            <LogoutButton />
                            </section>
                        </Toolbar>
                    </AppBar>
                    <Routes />
                    <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>
            </Router>
        </Provider>
    );
}

export default AppRouter;