import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Btn from './Button/Button';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
            <Btn background="#ef5343" color="white" type="btn" value="Logout" onClick={() => logout()} />
        )
    )
}

export default LogoutButton