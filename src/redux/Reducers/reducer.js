
// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../Actiontypes/actionTypes';

// const initialState = [];

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];
//     case REMOVE_FROM_CART:
//       return state.filter((_, index) => index !== action.payload);
//     case UPDATE_QUANTITY:
//       return state.map((item, index) =>
//         index === action.payload.index
//           ? { ...item, quantity: action.payload.quantity, totalPrice: item.price * action.payload.quantity }
//           : item
//       );
//     default:
//       return state;
//   }
// };

// export default cartReducer;



import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../Actiontypes/actionTypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_QUANTITY:
      return state.map((item, index) =>
        index === action.payload.index
          ? { ...item, quantity: action.payload.quantity, totalPrice: item.price * action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export default cartReducer;


