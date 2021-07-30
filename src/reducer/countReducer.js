const intitialState = 0
const Increment = 'Increment';
const Decrement = 'Decrement';
const Reset = 'Reset';
const reducer = (state = intitialState,action)=>{
    switch(action.type){
        case Increment:{
            return state + action.payload;
        }
        case Decrement:{
            return state - action.payload;
        }
        case Reset:{
            return 0
        }
        default:
            return state
    }
}

export default reducer;