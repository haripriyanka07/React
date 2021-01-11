import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Btn from './Button/Button';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
            <Btn background="whitesmoke" color="black" type="btn" value="Logout" onClick={() => logout()} />
        )
    )
}

export default LogoutButton