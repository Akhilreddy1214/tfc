// import { legacy_createStore } from "redux";
// import Reducer from "./Reducers/reducer";

// const store = legacy_createStore(Reducer);

// export default store;
// rootReducer.js
// store.js






// import { ADD_TO_CART, ADD_TO_FAVOURITES, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../Actiontypes/actionTypes";

// const initialState = {
//   cart: [],
//   favourites: [],
//   remove: [],
// };

// const Reducer = (state = initialState, action) => {
//   let { type, payload } = action;
//   switch (type) {
//     case ADD_TO_CART:
//       console.log(payload, "payload");
//       return { ...state, cart: [...state.cart, payload] };
      
//     case ADD_TO_FAVOURITES:
//       return { ...state, favourites: [...state.favourites, payload] };

//     case REMOVE_FROM_CART:
//       return { ...state, cart: state.cart.filter((_, index) => index !== payload) };
      
//     case UPDATE_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map((item, index) =>
//           index === payload.index
//             ? { ...item, quantity: payload.quantity, totalPrice: item.price * payload.quantity }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export default Reducer;

// cartReducer.js



// favoritesReducer.js
import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../Actiontypes/actionTypes';

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      // Add item to favorites if it doesn't already exist
      return state.some(item => item.id === action.payload.id)
        ? state
        : [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      // Remove item from favorites
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default favoritesReducer;



import { ADD_TO_CART, ADD_TO_FAVOURITES, REMOVE_FROM_CART, REMOVE_FROM_FAVOURITES, UPDATE_QUANTITY } from '../Actiontypes/actionTypes';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const addToFavourites = (item) => ({
  type: ADD_TO_FAVOURITES,
  payload: item,
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const updateQuantity = (index, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { index, quantity },
});

export const removeFromFavourites = (itemId) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: { id: itemId },
});






export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'; // Add this line





import React, { useEffect, useState } from "react";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { Heart, HeartFill } from "react-bootstrap-icons";
// import HomeSliderImg from "../../assets/nonveg bowl 1-01.jpg";
// import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
// import "./NonvegPickles.css";
// import prawnpickle from '../../assets/Section 1.svg'
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../../redux/Actions/actions";

// const NonVegPickles = () => {
//   const [isFavorite, setIsFavorite] = useState(Array(16).fill(false));
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [selectedMaterial, setSelectedMaterial] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [quantities, setQuantities] = useState({});
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [price, setPrice] = useState(0);

//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);

//   const addCart = () => {
//     if (selectedProduct && selectedWeight) {
//       const newItem = {
//         name: selectedProduct.name,
//         price: price,
//         quantity: quantity,
//         size: selectedWeight,
//         totalPrice: quantity * price,
//       };
//       dispatch(addToCart(newItem));
//       setQuantity(1);
//       setSelectedProduct(null);
//       setSelectedWeight(null);
//       setSelectedMaterial(null);
//     }
//     setShowModal(false);
//   };

//   // const addItem = (selectedPickle) => {
//   //   console.log(selectedPickle, "selectedPickle");
//   //   dispatch(addToCart(selectedPickle));
//   // };

//   const addItem = (pickle) => {
//     const quantity = quantities[pickle.id] || 1;
//     const selectedSize = selectedSizes[pickle.id] || pickle.sizes[0];
//     const pricePerUnit = getPrice(pickle.name, selectedSize);

//     const newItem = {
//       id: pickle.id,
//       name: pickle.name,
//       image: pickle.image,
//       ingredients: pickle.ingredients,
//       description: pickle.description,
//       shelfLife: pickle.shelfLife,
//       size: selectedSize,
//       price: pricePerUnit,
//       quantity: quantity,
//       totalPrice: pricePerUnit * quantity,
//     };

//     dispatch(addToCart(newItem));
//   };
//   useEffect(() => {
//     if (selectedProduct && selectedWeight) {
//       setPrice(getPrice(selectedProduct.name, selectedWeight));
//     }
//   }, [selectedWeight, selectedProduct]);

//   const getPrice = (productName, selectedWeight) => {
//     const product = nonNonVegPicklesData.find(
//       (pickle) => pickle.name === productName
//     );
//     if (product) {
//       const weightPrices = {
//         "250 grams": product.price[0],
//         "500 grams": product.price[1],
//         "1 kg": product.price[2],
//         "2 kg": product.price[3],
//         "5 kg": product.price[4],
//         "10 kg": product.price[5],
//       };
//       return weightPrices[selectedWeight];
//     }
//   };

//   useEffect(() => {
//     if (selectedProduct) {
//       const initialSize = selectedProduct.sizes[0];
//       setSelectedWeight(initialSize);
//       setPrice(getPrice(selectedProduct.name, initialSize));
//     }
//   }, [selectedProduct]);

//   const incrementQuantity = (pickleId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [pickleId]: (prevQuantities[pickleId] || 1) + 1,
//     }));
//   };

//   const decrementQuantity = (pickleId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [pickleId]: Math.max((prevQuantities[pickleId] || 1) - 1, 1),
//     }));
//   };

//   const calculateTotalPrice = (pickleId, pickle) => {
//     const selectedSize = selectedSizes[pickleId] || pickle.sizes[0];
//     const quantity = quantities[pickleId] || 1;
//     const pricePerUnit = getPrice(pickle.name, selectedSize);
//     return pricePerUnit * quantity;
//   };

//   const handleSizeSelection = (pickleId, size) => {
//     setSelectedSizes((prevSizes) => ({
//       ...prevSizes,
//       [pickleId]: size,
//     }));
//   };

//   const buyNow = () => {
//     console.log("Buy now:", quantity);
//   };

 

//   const handleWeightSelection = (size) => {
//     setSelectedWeight(size);
//   };

//   const handleMaterialSelection = (material) => {
//     setSelectedMaterial(material);
//   };
//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setQuantity(1);
//   };

//   const nonNonVegPicklesData = [
//     {
//       id: 1,
//       name: "BONELESS CHICKEN PICKLE",
//       price: [300, 580, 1100, 2200, 5225],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 300 - 5225",

//       image: HomeSliderImg,
//       ingredients:
//         "Chicken , Ground nut oil, Chilli powder, Salt, Turmeric powder, Masala mixed powder, Fenugreek seeds ,Clove,Cardamom, Cinnamon, Chekra phool, Pippali, Elachi, Jaayphal, Jaavitree",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 2,
//       name: "CHICKEN PICKLE",
//       price: [250, 480, 900, 1800, 4275],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 250 - 4275",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 3,
//       name: "PANDEM KODI PICKLE",
//       price: [750, 1500, 3000, 6000, 14250],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 750 - 14250 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 4,
//       name: "NATU KODI PICKLE",
//       price: [350, 680, 1300, 2600, 6175],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6175",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 5,
//       name: "BONELESS MUTTON PICKLE",
//       price: [500, 950, 1800, 3600, 8550],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 500 - 8550",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 6,
//       name: "MUTTON PICKLE",
//       price: [400, 800, 1600, 3200, 7600],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 400 - 7600",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 7,
//       name: "FISH PICKLE( KORAMEENU)",
//       price: [300, 580, 1100, 2200, 5225],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 300 - 5225 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 8,
//       name: "NETHALU PICKLE",
//       price: [250, 480, 900, 1800, 4275],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 250 - 4275",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 9,
//       name: "FISH PICKLE( APOLLO FISH)",
//       price: [350, 680, 1300, 2600, 6175],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6175 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 10,
//       name: "TIGER PRAWNS PICKLE ",
//       price: [350, 680, 1350, 2700, 6412.5],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6412.5",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 11,
//       name: "SMALL PRAWNS PICKLE",
//       price: [350, 700, 1400, 2800, 6650],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs  350 - 6650",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 12,
//       name: "CRAB PICKLE",
//       price: [400, 800, 1600, 3200, 7600],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 400 - 7600 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//   ];
//   return (
//     <div className="container">
//       <div className="py-3">
//         <div className="row g-2">
//           {nonNonVegPicklesData.map((pickle, idx) => (
//             <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
//               {/* <div className="card m-2" style={{ borderRadius: "15px" }}>
//                 <div
//                   className="bg-image hover-overlay ripple ripple-surface ripple-surface-light "
//                   onClick={() => openModal(pickle)}
//                   data-mdb-ripple-color="light"
//                 >
//                     <img
//                     style={{ border:'1px solid #f3b10b',
//                       borderTopLeftRadius: "15px",
//                       borderTopRightRadius: "15px",
//                     }}
//                     className="img-fluid"
//                     src={pickle.image}
//                     alt={`Product ${idx + 1}`}
//                   />
//                   <a href="#!">
//                     <div className="mask"></div>
//                   </a>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-start mb-3">
//                     <h6 className="mb-0">{pickle.name}</h6>
//                   </div>

//                   <div className="d-flex justify-content-between">
//                     <select
//                       value={selectedSizes[pickle.id] || pickle.sizes[0]}
//                       onChange={(e) =>
//                         handleSizeSelection(pickle.id, e.target.value)
//                       }
//                       className="form-select"
//                     >
//                       {pickle.sizes.map((size, index) => (
//                         <option key={index} value={size}>
//                           {size} - ₹ {getPrice(pickle.name, size)}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
//                     <Button
//                       variant="outline-secondary"
//                       style={{ height: "25px" }}
//                       className="d-flex align-items-center justify-content-center fw-bold"
//                       onClick={() => decrementQuantity(pickle.id)}
//                     >
//                       -
//                     </Button>
//                     <span className="mx-2">{quantities[pickle.id] || 1}</span>
//                     <Button
//                       variant="outline-secondary"
//                       style={{ height: "25px" }}
//                       className="d-flex align-items-center justify-content-center fw-bold"
//                       onClick={() => incrementQuantity(pickle.id)}
//                     >
//                       +
//                     </Button>
//                   </div>

//                   <hr />
//                   <div className="d-flex justify-content-between align-items-center m-0 p-0">
//                     <p className="fw-bold fs-6">
//                       ₹ {calculateTotalPrice(pickle.id, pickle)}
//                     </p>
//                     <Button
//                       className="custom-button mx-2"
//                       onClick={() => addItem(pickle)}
//                     >
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>
//               </div> */}
//               <div className="card m-2" style={{ borderRadius: "15px" }}>
//   <div
//     className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
//     onClick={() => openModal(pickle)}
//     data-mdb-ripple-color="light"
//     style={{ position: 'relative' }}
//   >
//     <img
//       style={{
//         border: '1px solid #f3b10b',
//         borderTopLeftRadius: "15px",
//         borderTopRightRadius: "15px",
//       }}
//       className="img-fluid"
//       src={pickle.image}
//       alt={`Product ${idx + 1}`}
//     />
//     <a href="#!">
//       <div className="mask"></div>
//     </a>
//     <i
//       className="bi bi-heart-fill fs-2"
//       style={{
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         color: 'white',
//         cursor: 'pointer',
//       }}
//       onClick={(e) => {
//         e.stopPropagation();
//         addToFavorites(pickle);
//       }}
//     ></i>
//   </div>
//   <div className="card-body">
//     <div className="d-flex justify-content-start mb-3">
//       <h6 className="mb-0">{pickle.name}</h6>
//     </div>

//     <div className="d-flex justify-content-between">
//       <select
//         value={selectedSizes[pickle.id] || pickle.sizes[0]}
//         onChange={(e) => handleSizeSelection(pickle.id, e.target.value)}
//         className="form-select"
//       >
//         {pickle.sizes.map((size, index) => (
//           <option key={index} value={size}>
//             {size} - ₹ {getPrice(pickle.name, size)}
//           </option>
//         ))}
//       </select>
//     </div>

//     <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
//       <Button
//         variant="outline-secondary"
//         style={{ height: "25px" }}
//         className="d-flex align-items-center justify-content-center fw-bold"
//         onClick={() => decrementQuantity(pickle.id)}
//       >
//         -
//       </Button>
//       <span className="mx-2">{quantities[pickle.id] || 1}</span>
//       <Button
//         variant="outline-secondary"
//         style={{ height: "25px" }}
//         className="d-flex align-items-center justify-content-center fw-bold"
//         onClick={() => incrementQuantity(pickle.id)}
//       >
//         +
//       </Button>
//     </div>

//     <hr />
//     <div className="d-flex justify-content-between align-items-center m-0 p-0">
//       <p className="fw-bold fs-6">
//         ₹ {calculateTotalPrice(pickle.id, pickle)}
//       </p>
//       <Button className="custom-button mx-2" onClick={() => addItem(pickle)}>
//         Add to Cart
//       </Button>
//     </div>
//   </div>
// </div>

//             </div>
//           ))}
//         </div>
//       </div>

//       <Modal show={showModal} onHide={closeModal} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <img src={Logo} alt="" width="px" height="70px" />
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <Row
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <Col md={4}>
//                 <img src={selectedProduct.image} alt="" className="img-fluid" />
//               </Col>
//               <Col md={8}>
//                 <div>
//                   <h4 className="py-1">{selectedProduct.name}</h4>
//                   <p>
//                     <span className="fw-bold">Ingredients:</span>{" "}
//                     {selectedProduct.ingredients}
//                   </p>
//                   <p>
//                     <span className="fw-bold">Description:</span>{" "}
//                     {selectedProduct.description}
//                   </p>
//                   <p>
//                     <span className="fw-bold">Shelf Life:</span>{" "}
//                     {selectedProduct.shelfLife}
//                   </p>
//                   <div className="d-flex flex-wrap align-items-center">
//                     {/* Sizes */}
//                     {selectedProduct.sizes.map((size, index) => (
//                       <div key={index} className="m-1">
//                         <Button
//                           variant={
//                             selectedWeight === size
//                               ? "primary"
//                               : "outline-secondary"
//                           }
//                           onClick={() => handleWeightSelection(size)}
//                           className="m-1 d-flex align-items-center justify-content-center"
//                           style={{
//                             height: "30px",
//                             borderColor:
//                               selectedWeight === size ? "black" : "#4e1100",
//                             backgroundColor:
//                               selectedWeight === size
//                                 ? "#4e1100"
//                                 : "transparent",
//                             color:
//                               selectedWeight === size ? "white" : "inherit",
//                             minWidth: "70px",
//                           }}
//                         >
//                           {size}
//                         </Button>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Material */}
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginTop: "10px",
//                     }}
//                   >
//                     <p className="fw-bold" style={{ marginBottom: 0 }}>
//                       Material:
//                     </p>
//                     <Button
//                       variant={
//                         selectedMaterial === "garlic"
//                           ? "primary"
//                           : "outline-primary"
//                       }
//                       onClick={() => handleMaterialSelection("garlic")}
//                       className="m-1 d-flex align-items-center justify-content-center"
//                       style={{
//                         height: "30px",
//                         borderColor:
//                           selectedMaterial === "garlic" ? "black" : "#4e1100",
//                         backgroundColor:
//                           selectedMaterial === "garlic"
//                             ? "#4e1100"
//                             : "transparent",
//                         color:
//                           selectedMaterial === "garlic" ? "white" : "inherit",
//                       }}
//                     >
//                       Garlic
//                     </Button>
//                     <Button
//                       variant={
//                         selectedMaterial === "without garlic"
//                           ? "primary"
//                           : "outline-primary"
//                       }
//                       onClick={() => handleMaterialSelection("without garlic")}
//                       className="m-1 d-flex align-items-center justify-content-center"
//                       style={{
//                         height: "30px",
//                         borderColor:
//                           selectedMaterial === "without garlic"
//                             ? "black"
//                             : "#4e1100",
//                         backgroundColor:
//                           selectedMaterial === "without garlic"
//                             ? "#4e1100"
//                             : "transparent",
//                         color:
//                           selectedMaterial === "without garlic"
//                             ? "white"
//                             : "inherit",
//                       }}
//                     >
//                       Without Garlic
//                     </Button>
//                   </div>

//                   {/* Quantity buttons */}
//                   <div className="d-flex align-items-center mt-2">
//                     <Button
//                       variant="outline-secondary"
//                       style={{ height: "25px" }}
//                       className="d-flex align-items-center justify-content-center fw-bold"
//                       onClick={() =>
//                         setQuantity((prevQuantity) =>
//                           Math.max(prevQuantity - 1, 1)
//                         )
//                       }
//                     >
//                       -
//                     </Button>
//                     <span className="mx-2">{quantity}</span>
//                     <Button
//                       variant="outline-secondary"
//                       style={{ height: "25px" }}
//                       className="d-flex align-items-center justify-content-center fw-bold"
//                       onClick={() =>
//                         setQuantity((prevQuantity) => prevQuantity + 1)
//                       }
//                     >
//                       +
//                     </Button>
//                   </div>
//                   <p className="fw-bold fs-5 mt-3">₹ {quantity * price}</p>
//                 </div>
//               </Col>
//             </Row>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Col md={12} className="my-3 d-flex justify-content-end">
//             <Button className="custom-button mx-2" onClick={addCart}>
//               Add to Cart
//             </Button>
//             <Button className="custom-button" onClick={buyNow}>
//               Buy Now
//             </Button>
//           </Col>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default NonVegPickles;















// import React, { useEffect, useState } from "react";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import HomeSliderImg from "../../assets/nonveg bowl 1-01.jpg";
// import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
// import "./NonvegPickles.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, addToFavorites, removeFromFavorites } from "../../redux/Actions/actions";
// import PickleCard from "../PickleCardComponent/PickleCard";

// const NonVegPickles = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [quantities, setQuantities] = useState({});
//   const [selectedSizes, setSelectedSizes] = useState({});
//   const [selectedMaterial, setSelectedMaterial] = useState(null);
//   const [price, setPrice] = useState(0);

//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   const favorites = useSelector((state) => state.favorites);

//   const isFavorite = (pickle) => {
//     return favorites.some((fav) => fav.id === pickle.id);
//   };

//   const toggleFavorite = (pickle) => {
//     if (isFavorite(pickle)) {
//       dispatch(removeFromFavorites(pickle.id));
//     } else {
//       dispatch(addToFavorites(pickle));
//     }
//   };

//   const addCart = () => {
//     if (selectedProduct && selectedWeight) {
//       const newItem = {
//         name: selectedProduct.name,
//         price: price,
//         quantity: quantity,
//         size: selectedWeight,
//         totalPrice: quantity * price,
//       };
//       dispatch(addToCart(newItem));
//       setQuantity(1);
//       setSelectedProduct(null);
//       setSelectedWeight(null);
//     }
//     setShowModal(false);
//   };

//   const addItem = (pickle) => {
//     const quantity = quantities[pickle.id] || 1;
//     const selectedSize = selectedSizes[pickle.id] || pickle.sizes[0];
//     const pricePerUnit = getPrice(pickle.name, selectedSize);

//     const newItem = {
//       id: pickle.id,
//       name: pickle.name,
//       image: pickle.image,
//       ingredients: pickle.ingredients,
//       description: pickle.description,
//       shelfLife: pickle.shelfLife,
//       size: selectedSize,
//       price: pricePerUnit,
//       quantity: quantity,
//       totalPrice: pricePerUnit * quantity,
//     };

//     dispatch(addToCart(newItem));
//   };

//   useEffect(() => {
//     if (selectedProduct && selectedWeight) {
//       setPrice(getPrice(selectedProduct.name, selectedWeight));
//     }
//   }, [selectedWeight, selectedProduct]);

//   const getPrice = (productName, selectedWeight) => {
//     const product = nonNonVegPicklesData.find(
//       (pickle) => pickle.name === productName
//     );
//     if (product) {
//       const weightPrices = {
//         "250 grams": product.price[0],
//         "500 grams": product.price[1],
//         "1 kg": product.price[2],
//         "2 kg": product.price[3],
//         "5 kg": product.price[4],
//         "10 kg": product.price[5],
//       };
//       return weightPrices[selectedWeight];
//     }
//   };

//   useEffect(() => {
//     if (selectedProduct) {
//       const initialSize = selectedProduct.sizes[0];
//       setSelectedWeight(initialSize);
//       setPrice(getPrice(selectedProduct.name, initialSize));
//     }
//   }, [selectedProduct]);

//   const incrementQuantity = (pickleId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [pickleId]: (prevQuantities[pickleId] || 1) + 1,
//     }));
//   };

//   const decrementQuantity = (pickleId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [pickleId]: Math.max((prevQuantities[pickleId] || 1) - 1, 1),
//     }));
//   };

//   const calculateTotalPrice = (pickleId, pickle) => {
//     const selectedSize = selectedSizes[pickleId] || pickle.sizes[0];
//     const quantity = quantities[pickleId] || 1;
//     const pricePerUnit = getPrice(pickle.name, selectedSize);
//     return pricePerUnit * quantity;
//   };

//   const handleSizeSelection = (pickleId, size) => {
//     setSelectedSizes((prevSizes) => ({
//       ...prevSizes,
//       [pickleId]: size,
//     }));
//   };

//   const handleWeightSelection = (size) => {
//     setSelectedWeight(size);
//   };

//   const handleMaterialSelection = (material) => {
//     setSelectedMaterial(material);
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setQuantity(1);
//   };

//   const nonNonVegPicklesData = [
//     {
//       id: 1,
//       name: "BONELESS CHICKEN PICKLE",
//       price: [300, 580, 1100, 2200, 5225],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 300 - 5225",

//       image: HomeSliderImg,
//       ingredients:
//         "Chicken , Ground nut oil, Chilli powder, Salt, Turmeric powder, Masala mixed powder, Fenugreek seeds ,Clove,Cardamom, Cinnamon, Chekra phool, Pippali, Elachi, Jaayphal, Jaavitree",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 2,
//       name: "CHICKEN PICKLE",
//       price: [250, 480, 900, 1800, 4275],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 250 - 4275",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 3,
//       name: "PANDEM KODI PICKLE",
//       price: [750, 1500, 3000, 6000, 14250],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 750 - 14250 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 4,
//       name: "NATU KODI PICKLE",
//       price: [350, 680, 1300, 2600, 6175],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6175",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 5,
//       name: "BONELESS MUTTON PICKLE",
//       price: [500, 950, 1800, 3600, 8550],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 500 - 8550",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 6,
//       name: "MUTTON PICKLE",
//       price: [400, 800, 1600, 3200, 7600],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 400 - 7600",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 7,
//       name: "FISH PICKLE( KORAMEENU)",
//       price: [300, 580, 1100, 2200, 5225],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 300 - 5225 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 8,
//       name: "NETHALU PICKLE",
//       price: [250, 480, 900, 1800, 4275],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 250 - 4275",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 9,
//       name: "FISH PICKLE( APOLLO FISH)",
//       price: [350, 680, 1300, 2600, 6175],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6175 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 10,
//       name: "TIGER PRAWNS PICKLE ",
//       price: [350, 680, 1350, 2700, 6412.5],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 350 - 6412.5",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 11,
//       name: "SMALL PRAWNS PICKLE",
//       price: [350, 700, 1400, 2800, 6650],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs  350 - 6650",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//     {
//       id: 12,
//       name: "CRAB PICKLE",
//       price: [400, 800, 1600, 3200, 7600],
//       SizeAvailable: "250gm - 5kg",
//       priceRange: "Rs 400 - 7600 ",
//       image: HomeSliderImg,
//       ingredients: "",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
//     },
//   ];

//   return (
//     <div>
//       {/* <div className="top-bar">
//         <img src={Logo} alt="Logo" className="logo" />
//       </div> */}

   
//         {/* <h1 className="category-heading">Non-Veg Pickles</h1> */}
//         <div className="container-fluid">
//         <div className="row g-2">
//         {nonNonVegPicklesData.map((pickle, idx) => (
 
   
//       <PickleCard
//         key={pickle.id}
//         pickle={pickle}
//         isFavorite={isFavorite}
//         toggleFavorite={toggleFavorite}
//         openModal={openModal}
//         quantities={quantities}
//         selectedSizes={selectedSizes}
//         handleSizeSelection={handleSizeSelection}
//         getPrice={getPrice}
//         incrementQuantity={incrementQuantity}
//         decrementQuantity={decrementQuantity}
//         calculateTotalPrice={calculateTotalPrice}
//         addItem={addItem}
//       />
  
// ))}


//       </div>
//         </div>
    

//       <Modal show={showModal} onHide={closeModal} size="lg">
//       <Modal.Header closeButton>
//           <Modal.Title>
//             <img src={Logo} alt="" width="px" height="70px" />
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <Row
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <Col md={4}>
//                 <img src={selectedProduct.image} alt="" className="img-fluid" />
//               </Col>
//               <Col md={8}>
//                 <div>
//                 <h4 className="py-1">{selectedProduct.name}</h4>
//                   <p>
//                     <span className="fw-bold">Ingredients:</span>{" "}
//                     {selectedProduct.ingredients}
//                   </p>
//                   <p>
//                     <span className="fw-bold">Description:</span>{" "}
//                     {selectedProduct.description}
//                   </p>
//                   <p>
//                     <span className="fw-bold">Shelf Life:</span>{" "}
//                     {selectedProduct.shelfLife}
//                   </p>
//                   <div className="d-flex flex-wrap align-items-center">
//                       {/* Sizes */}
//                       {selectedProduct.sizes.map((size, index) => (
//                         <div key={index} className="m-1">
//                           <Button
//                             variant={
//                               selectedWeight === size
//                                 ? "primary"
//                                 : "outline-secondary"
//                             }
//                             onClick={() => handleWeightSelection(size)}
//                             className="m-1 d-flex align-items-center justify-content-center"
//                             style={{
//                               height: "30px",
//                               borderColor:
//                                 selectedWeight === size ? "black" : "#4e1100",
//                               backgroundColor:
//                                 selectedWeight === size
//                                   ? "#4e1100"
//                                   : "transparent",
//                               color:
//                                 selectedWeight === size ? "white" : "inherit",
//                               minWidth: "70px",
//                             }}
//                           >
//                             {size}
//                           </Button>
//                         </div>
//                       ))}
//                     </div>
//                   {/* Material */}
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginTop: "10px",
//                     }}
//                   >
//                     <p className="fw-bold" style={{ marginBottom: 0 }}>
//                       Material:
//                     </p>
//                     <Button
//                       variant={
//                         selectedMaterial === "garlic"
//                           ? "primary"
//                           : "outline-primary"
//                       }
//                       onClick={() => handleMaterialSelection("garlic")}
//                       className="m-1 d-flex align-items-center justify-content-center"
//                       style={{
//                         height: "30px",
//                         borderColor:
//                           selectedMaterial === "garlic" ? "black" : "#4e1100",
//                         backgroundColor:
//                           selectedMaterial === "garlic"
//                             ? "#4e1100"
//                             : "transparent",
//                         color:
//                           selectedMaterial === "garlic" ? "white" : "inherit",
//                       }}
//                     >
//                       Garlic
//                     </Button>
//                     <Button
//                       variant={
//                         selectedMaterial === "without garlic"
//                           ? "primary"
//                           : "outline-primary"
//                       }
//                       onClick={() => handleMaterialSelection("without garlic")}
//                       className="m-1 d-flex align-items-center justify-content-center"
//                       style={{
//                         height: "30px",
//                         borderColor:
//                           selectedMaterial === "without garlic"
//                             ? "black"
//                             : "#4e1100",
//                         backgroundColor:
//                           selectedMaterial === "without garlic"
//                             ? "#4e1100"
//                             : "transparent",
//                         color:
//                           selectedMaterial === "without garlic"
//                             ? "white"
//                             : "inherit",
//                       }}
//                     >
//                       Without Garlic
//                     </Button>
//                   </div>

//                   {/* Quantity buttons */}
//                   <div className="d-flex align-items-center mt-2"> 
//                   <Button
//                         variant="outline-secondary"
//                         style={{ height: "25px" }}
//                         className="d-flex align-items-center justify-content-center fw-bold"
//                         onClick={() =>
//                           setQuantity((prevQuantity) =>
//                             Math.max(prevQuantity - 1, 1)
//                           )
//                         }
//                       >
//                         -
//                       </Button>
//                       <span className="mx-2">{quantity}</span>
//                       <Button
//                         variant="outline-secondary"
//                         style={{ height: "25px" }}
//                         className="d-flex align-items-center justify-content-center fw-bold"
//                         onClick={() =>
//                           setQuantity((prevQuantity) => prevQuantity + 1)
//                         }
//                       >
//                         +
//                       </Button>
//                     </div>
//                     <p className="fw-bold fs-5 mt-3">
//                       ₹ {quantity * price}
//                     </p>
           
               
//                 </div>
//               </Col>
//             </Row>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Col md={12} className="my-3 d-flex justify-content-end">
//             <Button className="custom-button mx-2" onClick={addCart}>
//               Add to Cart
//             </Button>
           
//           </Col>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default NonVegPickles;