const redux = require("redux"); // Imports the Redux library
const createStore = redux.createStore; // Extracts the createStore function from Redux

console.log("Learning From codevolution"); // Logs the string "Learning From codevolution" to the console

const CAKE_ORDERED = "CAKE_ORDERED"; // Defines a constant variable CAKE_ORDERED with the value "CAKE_ORDERED"

const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//d.define an action and action creaters
// Action creating function
function orderCake() {
  // Declares a function named orderCake
  return {
    type: CAKE_ORDERED, // The return statement returns an object with a property 'type' set to the value of CAKE_ORDERED
    payload: 1, // The object also includes a property 'quantity' set to 1
  };
}

function restockCake(qty) {
  // Declares a function named restockCake that takes qty as an argument
  return {
    type: CAKE_RESTOCKED, // The return statement returns an object with a property 'type' set to the value CAKE_RESTOCKED
    payload: qty, // The object also includes a property 'payload' set to the value of qty passed as an argument
  };
}

//b.declare a initial state

const initialState = {
  noOfCakes: 10, // Initializes the state with 'noOfCakes' property set to 10
};

//c. declare a reducer
// Reducer---(previousState, action) => returns newState
const reducer = (state = initialState, action) => {
  // Defines a reducer function that takes 'state' and 'action' as parameters
  switch (action.type) {
    // Switches based on action type
    case CAKE_ORDERED:
      // If action type is CAKE_ORDERED, return a new state object
      return {
        ...state, // Spread operator to copy existing state properties
        noOfCakes: state.noOfCakes - 1, // Decrement 'noOfCakes' by 1
      };
      break; // Break statement (optional as 'return' exits the function)

    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };

    default:
      // Default case if action type doesn't match
      return state; // Returns the existing state unchanged
      break; // Break statement (optional as 'return' exits the function)
  }
};

// REDUX STORE
// ONE STORE FOR THE ENTIRE APPLICATION
// RESPONSIBILITIES
// 1. Responsible for holding application state
// 2. Allows access to state via getState()
// 3. Allows state to be updated via dispatch(action)
// 4. Registers listeners via subscribe(listener)
/*  What is a listener in redux store?
In Redux, a listener is a function that gets called whenever the state of 
the Redux store changes. Listeners are a key part of the Redux architecture 
because they help to trigger re-renders or perform other side effects in response 
to state changes. Here’s how they typically work: */

// 5. Handles unregistering of listeners via the function returned by subscribe(listener)

// a. create the store
const store = createStore(reducer); // Creates a Redux store with the reducer
console.log("Initial State", store.getState()); // Logs the initial state of the store

//e. Subscribe to the store
const unsubscribe = store.subscribe(
  () => console.log("Updated state =", store.getState()) // Logs the updated state whenever it changes
);

// f.dispatch actions to update the store
store.dispatch(orderCake()); // Dispatches an action to order a cake
store.dispatch(orderCake()); // Dispatches another action to order a cake
store.dispatch(orderCake()); // Dispatches yet another action to order a cake
store.dispatch(restockCake(3));
unsubscribe(); // Unsubscribes the listener //g.unsubscribe the changes

//steps to follow in redux
// a. create the store
//b.declare a initial state
//c. declare a reducer
//d.define an action and action creaters
//e. Subscribe to the store
// f.dispatch actions to update the store
//g.unsubscribe the changes
