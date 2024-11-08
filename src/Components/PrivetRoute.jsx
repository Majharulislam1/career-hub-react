import React, {  useContext } from 'react';
import { LoadContext } from './Root';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(LoadContext);
        
    if(loading) return <span>-----</span>
    if(user) return children;
    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;