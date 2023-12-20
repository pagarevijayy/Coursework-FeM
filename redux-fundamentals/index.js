import { createStore, compose, applyMiddleware, bindActionCreators, combineReducers} from 'redux'

// -------- COMPOSE ---------

// const makeLouder = string => string.toUpperCase();
// const repeatThreeTimes = string => string.repeat(3);
// const embolden = string => string.bold();

// // const yell = string => embolden(repeatThreeTimes(makeLouder(string)));
// const yell = compose(embolden, repeatThreeTimes, makeLouder);

// console.log(yell('hello'))


// ---------- redux store ------------

// a. state
const initialState = { value: 0 };

// b.1 action/types
const INCREMENT = 'counter/increment'
const ADD = 'counter/add'

// b.2 action creators
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount }); 

// c. reducer
const reducer = (state = initialState, action) => {

    if(action.type === INCREMENT) {
        return { value: state.value + 1 }
    }

    if(action.type === ADD) {
        return { value: state.value + action.payload }
    }

    return state
}

// d. store
const store = createStore(reducer);

// console.log(store)

// e. using the store

// const subscriber = () => { console.log('SUBSCRIBER', store.getState())}
// store.subscribe(subscriber);
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(add(100));
// console.log(store.getState());

// ------ bindActionCreators -------

const actions = bindActionCreators({increment, add}, store.dispatch);

actions.add(1000); // no need to use store.dispatch() again and again.
actions.increment();

console.log(store.getState());
