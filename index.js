const redux = require('redux') // would be 'import' in react
const createStore = redux.createStore

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

const store = createStore(reducer)