import { createStore, compose, applyMiddleware, bindActionCreators} from 'redux'

compose();

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

// const yell = string => embolden(repeatThreeTimes(makeLouder(string)));
const yell = compose(embolden, repeatThreeTimes, makeLouder);

console.log(yell('hello'))