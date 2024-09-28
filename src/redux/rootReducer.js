// // rootReducer.js
// import { combineReducers } from 'redux';
// import cartReducer from './Reducers/reducer';
// import favoritesReducer from './Reducers/favoritesReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer, // Rename this to match the state slice if needed
//   favorites: favoritesReducer,
// });

// export default rootReducer;


import { combineReducers } from 'redux';
import cartReducer from './Reducers/reducer'; // Ensure path is correct
import favoriteReducer from './Reducers/favoritesReducer';
 // Ensure path is correct

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
