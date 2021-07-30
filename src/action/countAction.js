const Increment = 'Increment';
const Decrement = 'Decrement';
const Reset = 'Reset';

export const createActions =dispatch=>({
    Increment:value=>dispatch({type:Increment,payload:value || 1}),
    Decrement:value=>dispatch({type:Decrement,payload:value|| 1}),
    Reset:()=>dispatch({type:Reset})
})
