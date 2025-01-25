const redux = require("redux"); // Imports the Redux library
const createStore = redux.createStore; // Extracts the createStore function from Redux
const bindActionCreators = redux.bindActionCreators; // Extracts the bindActionCreators function from Redux
const combineReducers = redux.combineReducers; // Extracts the combineReducers function from Redux
const produce = require("immer").produce;

console.log("Learning From codevolution"); // Logs the string "Learning From codevolution" to the console

const CAKE_ORDERED = "CAKE_ORDERED"; // Defines a constant variable CAKE_ORDERED with the value "CAKE_ORDERED"
const CAKE_RESTOCKED = "CAKE_RESTOCKED"; // Defines a constant variable CAKE_RESTOCKED with the value "CAKE_RESTOCKED"
const ICECREAM_ORDERED = "ICECREAM_ORDERED"; // Defines a constant variable ICECREAM_ORDERED with the value "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"; // Defines a constant variable ICECREAM_RESTOCKED with the value "ICECREAM_RESTOCKED"

// d. Define an action and action creators
// Action creating function
function orderCake() {
  // Declares a function named orderCake
  return {
    type: CAKE_ORDERED, // The return statement returns an object with a property 'type' set to the value of CAKE_ORDERED
    payload: 1, // The object also includes a property 'payload' set to 1
  };
}

function restockCake(qty) {
  // Declares a function named restockCake that takes qty as an argument
  return {
    type: CAKE_RESTOCKED, // The return statement returns an object with a property 'type' set to the value of CAKE_RESTOCKED
    payload: qty, // The object also includes a property 'payload' set to the value of qty passed as an argument
  };
}

function orderIcecream(qty = 1) {
  // Declares a function named orderIcecream that takes an optional argument qty with a default value of 1
  return {
    type: ICECREAM_ORDERED, // The return statement returns an object with a property 'type' set to the value of ICECREAM_ORDERED
    payload: qty, // The object also includes a property 'payload' set to the value of qty
  };
}

function restockIcecream(qty) {
  // Declares a function named restockIcecream that takes qty as an argument
  return {
    type: ICECREAM_RESTOCKED, // The return statement returns an object with a property 'type' set to the value of ICECREAM_RESTOCKED
    payload: qty, // The object also includes a property 'payload' set to the value of qty passed as an argument
  };
}

// b. Declare initial states
const initialCakeState = {
  noOfCakes: 20, // Initializes the state with 'noOfCakes' property set to 20
};

const initialIcecreamState = {
  noOfIcecreams: 40, // Initializes the state with 'noOfIcecreams' property set to 40
};

// c. Declare reducers
// Reducer---(previousState, action) => returns newState
const cakeReducer = (state = initialCakeState, action) => {
  // Defines a reducer function for cakes that takes 'state' and 'action' as parameters
  switch (action.type) {
    // Switches based on action type
    case CAKE_ORDERED:
      return produce(state, (draft) => {
        draft.noOfCakes -= 1;
      });

    case CAKE_RESTOCKED:
      return produce(state, (draft) => {
        draft.noOfCakes += action.payload;
      });

    default:
      return state; // Returns the existing state unchanged
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  // Defines a reducer function for ice creams that takes 'state' and 'action' as parameters
  switch (action.type) {
    case ICECREAM_ORDERED:
      return produce(state, (draft) => {
        draft.noOfIcecreams -= 1;
      });

    case ICECREAM_RESTOCKED:
      return produce(state, (draft) => {
        draft.noOfIcecreams += action.payload;
      });

    default:
      return state; // Returns the existing state unchanged
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

const rootReducer = combineReducers({
  // Combines the cakeReducer and icecreamReducer into a single rootReducer
  cake: cakeReducer,
  icecream: icecreamReducer,
});

// a. Create the store
const store = createStore(rootReducer); // Creates a Redux store with the rootReducer
console.log("Initial State", store.getState()); // Logs the initial state of the store

// e. Subscribe to the store
const unsubscribe = store.subscribe(
  () => console.log("Updated state =", store.getState()) // Logs the updated state whenever it changes
);

// Binding action creators to the store's dispatch function
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream }, // Binds the action creators to dispatch
  store.dispatch
);

// f. Dispatch actions to update the store
actions.orderCake(); // Dispatches orderCake action
actions.orderCake(); // Dispatches orderCake action
actions.orderCake(); // Dispatches orderCake action
actions.orderCake(); // Dispatches orderCake action
actions.orderCake(); // Dispatches orderCake action
actions.restockCake(5); // Dispatches restockCake action with a quantity of 5

actions.orderIcecream(); // Dispatches orderIcecream action
actions.orderIcecream(); // Dispatches orderIcecream action
actions.orderIcecream(); // Dispatches orderIcecream action
actions.restockIcecream(3); // Dispatches restockIcecream action with a quantity of 3

unsubscribe(); // Unsubscribes the listener
