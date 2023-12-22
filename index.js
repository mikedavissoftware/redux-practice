const redux = require('redux') // import redux library - would be 'import' in react
const createStore = redux.createStore // assign createStore action (default in redux) to variable, for creating store later

const BUY_CAKE = "BUY_CAKE" // This avoids spelling mistakes, so it is good practice

function buyCake() {
  return { // begin action object
    type: BUY_CAKE, // type property is required in every action object
    info: "first redux action" // Just demonstrates that we can provide more than just a type property
  } // end action object
}

// REDUCER: (previousState, action) => newState

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state, // create a copy of the state object with spread operator - do not change original copy of state object
      numOfCakes: state.numOfCakes - 1
    }

    default: return state // covers any unaccounted-for actions
  }
}

const store = createStore(reducer) // create the redux store, passing the reducer function as a parameter
console.log("Initial state", store.getState()) // prove access to state (using getState) by logging initial state before actions have been committed
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState())) // register listener with callback action, as well as assigning that to variable to be called at the end, to terminate subscription listeners
store.dispatch(buyCake()) // dispatch buyCake action 3x
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe() // terminate subscription listeners