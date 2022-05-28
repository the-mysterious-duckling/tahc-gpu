import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const IndexDash = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Name: {user.displayName}</h1>
            <h1>Email: {user.email}</h1>
        </div>
    );
};

export default IndexDash;