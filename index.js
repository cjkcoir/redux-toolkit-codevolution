console.log("Learning From codevolution"); // Logs the string "Learning From codevolution" to the console

const CAKE_ORDERED = "CAKE_ORDERED"; // Defines a constant variable CAKE_ORDERED with the value "CAKE_ORDERED"

// Action creating function
function orderCake() {
  // Declares a function named orderCake
  return {
    type: CAKE_ORDERED, // The return statement returns an object with a property 'type' set to the value of CAKE_ORDERED
    quantity: 1, // The object also includes a property 'quantity' set to 1
  };
}

const initialState = {
  noOfCakes: 10, // Initializes the state with 'noOfCakes' property set to 10
};

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

    default:
      // Default case if action type doesn't match
      return state; // Returns the existing state unchanged
      break; // Break statement (optional as 'return' exits the function)
  }
};
