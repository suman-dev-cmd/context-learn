import React,{useContext} from 'react'
import {CountContext} from '../../context/CountProvider';

const Controller = () => {
    const {Increment,Decrement,Reset} =useContext(CountContext)
    return (
        <div>
            <button onClick={()=>Increment()}>Increment</button>
            <button onClick={()=>Decrement()}>Decrement</button>
            <button onClick={()=>Reset()}>Reset</button>
        </div>
    )
}

export default Controller
