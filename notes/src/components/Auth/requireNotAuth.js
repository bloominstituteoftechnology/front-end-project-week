import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const keyName = process.env.REACT_APP_TOKEN_ITEM;

export default ComposedComponent => {
    
    function requireAuth(props) {
        const token = localStorage.getItem(keyName);

        if (token && token !== 'undefined') {
            const decoded = jwt.decode(token)

            const currentTime = Date.now() / 1000;

            if(decoded && currentTime > decoded.exp) {
                localStorage.removeItem(keyName);
                return <ComposedComponent {...props}/>;
            }
            
            return <Redirect to={'/app'}/>
        }
        
        return <ComposedComponent {...props}/>;
    }
    return requireAuth;
};
