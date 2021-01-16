import React from 'react';
import Link from '../../atoms/Link/Link';
import { AppBar, Toolbar, Avatar, Typography, IconButton} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { AccountCircle } from "@material-ui/icons";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import "./AppBar.css";
import Heading from '../../atoms/Heading/Heading';

function Appbar() {
    const {loginWithRedirect, logout, isAuthenticated} = useAuth0();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };
    
    return (
        <AppBar position="fixed"  color='transparent' className="appBar">
            <Toolbar className="top" >
                <Avatar className="avatar" alt="logo" src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/mkpmfymurbklrv3twgxh" />
                <Heading value="Zemoso" />
                <section className= "rightToolbar">
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
                    <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu}
                    color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        open={open}
                    >
                        {isAuthenticated ? (
                            <MenuItem onClick={() => logout()}>LogOut</MenuItem>
                        ) : (
                            <MenuItem onClick={() => loginWithRedirect()}>Login</MenuItem>
                        )}
                    </Menu>
                </section>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;