import React,{createContext,useReducer} from 'react';
import {createActions} from '../action/countAction';
import  reducer from '../reducer/countReducer';
const CountContext = createContext();
const CountProvider = (props)=>{
    const[count1,dispatch] = useReducer(reducer,0);
    const actions = createActions(dispatch)
    return(
        <CountContext.Provider value={{count1,...actions}}>
            {props.children}
        </CountContext.Provider>
    )
}

export {CountContext,CountProvider}