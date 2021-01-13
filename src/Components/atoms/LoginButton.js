import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from '@material-ui/core';
import Btn from "./Button/Button";

const LoginButton = () => {
    const { loginWithRedirect , isAuthenticated} = useAuth0();

    return(
        !isAuthenticated && (
        <Btn background="#ef5343" color="white" type="btn" value="Login" onClick={() => loginWithRedirect()} />
        )
    )
}

export default LoginButton