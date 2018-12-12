import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const keyName = process.env.REACT_APP_TOKEN_ITEM;

export default ComposedComponent => {
    
    function requireAuth(props) {
        const token = localStorage.getItem(keyName);

        if (token) {
            const decoded = jwt.decode(token)

            const currentTime = Date.now() / 1000;

            if(decoded.exp && currentTime > decoded.exp) {
                localStorage.removeItem(keyName);
                return <Redirect to={'/login'}/>
            }

            return <ComposedComponent {...props}/>;
        }
        
        return <Redirect to={'/login'}/>
    }
    return requireAuth;
};
