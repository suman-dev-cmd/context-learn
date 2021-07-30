import React,{useContext} from 'react'
import {CountContext} from '../../context/CountProvider';
const Count = () => {
    const {count1} = useContext(CountContext);
    
    return (
        <div>
            <h1>count {count1}</h1>
        </div>
    )
}

export default Count
