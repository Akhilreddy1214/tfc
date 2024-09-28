

// import { ADD_TO_CART, ADD_TO_FAVOURITES, REMOVE_FROM_CART, REMOVE_FROM_FAVOURITES, UPDATE_QUANTITY } from '../Actiontypes/actionTypes';

// export const addToCart = (item) => ({
//   type: ADD_TO_CART,
//   payload: item,
// });

// export const addToFavourites = (item) => ({
//   type: ADD_TO_FAVOURITES,
//   payload: item,
// });

// export const removeFromCart = (index) => ({
//   type: REMOVE_FROM_CART,
//   payload: index,
// });

// export const updateQuantity = (index, quantity) => ({
//   type: UPDATE_QUANTITY,
//   payload: { index, quantity },
// });

// export const removeFromFavourites = (itemId) => ({
//   type: REMOVE_FROM_FAVOURITES,
//   payload: { id: itemId },
// });

import { ADD_TO_CART, ADD_TO_FAVORITES,  REMOVE_FROM_CART, REMOVE_FROM_FAVORITES,  UPDATE_QUANTITY } from '../Actiontypes/actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

// export const addToFavourites = (item) => ({
//   type: ADD_TO_FAVOURITES,
//   payload: item,
// });

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const updateQuantity = (index, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { index, quantity },
});

// export const removeFromFavourites = (itemId) => ({
//   type: REMOVE_FROM_FAVOURITES,
//   payload: { id: itemId },
// });


export const addToFavorites = (product) => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

export const removeFromFavorites = (productId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});