import React from 'react';
import {useParams} from 'react-router-dom';

const withParamsHook = (Component) => {
    return (props) => {
        const param = useParams();

        return <Component params ={param} {...props} />
    }
}

export default withParamsHook;