import { createStore } from 'redux';


//ACTION GENERATORS
const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


//REDUCER
//1.REDUCERS ARE PURE FUNCTIONS -> the output of the function depends JUST on the input paramaters of the function.
// const a = 10; const add = (b) => {return a + b}; -> not a pure function. The input paramater B is modified inside the function
//const add = (a, b) => {return a + b}; -> this is a pure function, the output, return value of the function is dependent ONLY
//on the input parameters of the function.
//SO for a function to be a pure function we do not want for that function to be interacting with things outside of its scope. We don't want 
// to change variables outside of it s scope and we don't want to rely on values from variables outside of the functions scope. 
//2. NEVER CHANGE STATE OR ACTION, just read the values. We don't want to reasign a value to state or action. We are just reading the values
//from action and state and we return a NEW OBJECT representing the new state.

const countReducer = (state = { count: 0 }, action) => {

    switch(action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count: state.count - action.decrementBy
            };

        case 'SET' :
            return {
                count: action.count
            };

        case 'RESET' :
            return {
                count : 0
            };

        default:
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {  
    console.log(store.getState());  
});
  //assignin the return value of .subscribe to a variable. We can use the return value of.subscribe to unsubscrive

store.dispatch(incrementCount({ incrementBy:5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy:7 }));

store.dispatch(decrementCount());

store.dispatch(setCount({count:50}));

unsubscribe(); // we have unsubscibed so we won't see the reset value in the log

store.dispatch(resetCount());


//we use dispatch.count inside of the function . compared to the conditional logic for decrement and increment where we're checking 
//if the value exists, we will force the user using the SET action object to provide the value for COUNT 

