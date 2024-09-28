
// import React, { useEffect, useState } from "react";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import { Heart, HeartFill } from "react-bootstrap-icons";
// import vegeImage from "../../assets/Veg_8-01.jpg";
// import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
// import "./VegPickles.css"; 
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "../../redux/Actions/actions";

// const VegPickles = () => {
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
//     const product = vegPicklesData.find(
//       (pickle) => pickle.name === productName
//     );
//     if (product) {
//       const weightPrices = {
//         "250 grms": product.price[0],
//         "500 grms": product.price[1],
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

//   const handleFavoriteToggle = (productId) => {
//     setIsFavorite((prevState) => {
//       const newState = [...prevState];
//       newState[productId] = !newState[productId];
//       return newState;
//     });
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

//   const vegPicklesData = [
//     {
//       id: 1,
//       name: "ANDHRA AVAKAYA (MANGO PICKLE)",
//       price: [140, 260, 480, 960, 2280, 4560],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 140 - 4560 ",
//       image: vegeImage,
//       ingredients: "Ingredient 1, Ingredient 2",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 2,
//       name: "TOMATO PICKLE",
//       price: [120, 220, 400, 800, 1900, 3800],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs  120 - 3800 ",
//       image: vegeImage,
//       ingredients: "Ingredient 3, Ingredient 4",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "1 year",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 3,
//       name: "GONGURA PICKLE",
//       price: [120, 220, 400, 800, 1900, 3800],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs  120 - 3800 ",
//       image: vegeImage,
//       ingredients: "Ingredient 5, Ingredient 6",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 4,
//       name: "ALLAM PICKLE",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 7, Ingredient 8",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "1 year",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 5,
//       name: "USIRIKAYA AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 9, Ingredient 10",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 6,
//       name: "BELLAM AVAKAYA",
//       price: [160, 300, 580, 1160, 2755, 5510],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 160 - 5510 ",
//       image: vegeImage,
//       ingredients: "Ingredient 11, Ingredient 12",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "1 year",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 7,
//       name: "PANDU MIRAPAKAYA AVAKAYA",
//       price: [160, 300, 580, 1160, 2755, 5510],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 160 - 5510 ",
//       image: vegeImage,
//       ingredients: "Ingredient 13, Ingredient 14",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 8,
//       name: "CAULIFOWER AVAKAYA",
//       price: [120, 220, 400, 800, 1900, 3800],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs  120 - 3800 ",
//       image: vegeImage,
//       ingredients: "Ingredient 15, Ingredient 16",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "1 year",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 9,
//       name: "GARLIC AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 17, Ingredient 18",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 10,
//       name: "NIMAKAYA AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 19, Ingredient 20",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 11,
//       name: "CHINTAKAYA PANDU MIRAPAKAYA AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 21, Ingredient 22",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 12,
//       name: "MANGO SLICE PICKLE",
//       price: [160, 300, 580, 1160, 2755, 5510],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 160 - 5510 ",
//       image: vegeImage,
//       ingredients: "Ingredient 23, Ingredient 24",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "1 year",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 13,
//       name: "GONGURA PANDU MIRAPAKAYA AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 25, Ingredient 26",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 14,
//       name: "KAKARAKAYA PICKLE",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 27, Ingredient 28",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 15,
//       name: "MANGO THOKU PICKLE",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 29, Ingredient 30",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 16,
//       name: "USIRIKAYA THOKU PICKLE",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 31, Ingredient 32",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 17,
//       name: "MUNAKAYA AVAKAYA",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 33, Ingredient 34",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 18,
//       name: "MIXED VEG PICKLE",
//       price: [180, 340, 660, 1320, 3135, 6270],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 180 - 6270 ",
//       image: vegeImage,
//       ingredients: "Ingredient 35, Ingredient 36",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 19,
//       name: "DONDAKAYA PICKLE",
//       price: [140, 260, 480, 960, 2280, 4560],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 140 - 4560 ",
//       image: vegeImage,
//       ingredients: "Ingredient 37, Ingredient 38",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//     {
//       id: 20,
//       name: "CARROT PICKLE",
//       price: [140, 260, 480, 960, 2280, 4560],
//       SizeAvailable: "250gm - 10kg",
//       priceRange: "Rs 140 - 4560 ",
//       image: vegeImage,
//       ingredients: "Ingredient 39, Ingredient 40",
//       description:
//         "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
//       shelfLife: "6 months",
//       sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
//     },
//   ];
//   return (
//     <div className="container">
//       <div className="py-3">
//         <div className="row g-2">
//           {vegPicklesData.map((pickle, idx) => (
//             <div className="col-lg-3 col-md-4 col-sm-6 " key={idx}>
//               <div className="card m-2" style={{ borderRadius: "15px" }}>
//                 <div
//                   className="bg-image hover-overlay ripple ripple-surface ripple-surface-light "
//                   onClick={() => openModal(pickle)}
//                   data-mdb-ripple-color="light"
//                 >
//                   <img
//                     style={{
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
//                   <div className="d-flex justify-content-start mb-2">
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
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
  

//       <Modal show={showModal} onHide={closeModal} size="lg">
//         <Modal.Header close
//         Button>
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
//             <Button className="custom-button" onClick={buyNow}>
//               Buy Now
//             </Button>
//           </Col>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default VegPickles;






import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import HomeSliderImg from "../../assets/nonveg bowl 1-01.jpg";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import vegeImage from "../../assets/Veg_8-01.jpg";
import "./VegPickles.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../../redux/Actions/actions";
import PickleCard from "../PickleCardComponent/PickleCard";
import { getPriceForSize } from "../../../utility/utils"; // Import your utility function

const VegPickles  = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = (pickle) => {
    return favorites.some((fav) => fav.id === pickle.id);
  };

  const toggleFavorite = (pickle) => {
    if (isFavorite(pickle)) {
      dispatch(removeFromFavorites(pickle.id));
    } else {
      dispatch(addToFavorites(pickle));
    }
  };

  const addCart = () => {
    if (selectedProduct && selectedWeight) {
      const newItem = {
        name: selectedProduct.name,
        price: price,
        quantity: quantity,
        size: selectedWeight,
        totalPrice: quantity * price,
      };
      dispatch(addToCart(newItem));
      setQuantity(1);
      setSelectedProduct(null);
      setSelectedWeight(null);
    }
    setShowModal(false);
  };

  const addItem = (pickle) => {
    const quantity = quantities[pickle.id] || 1;
    const selectedSize = selectedSizes[pickle.id] || pickle.sizes[0];
    const pricePerUnit = getPrice(pickle, selectedSize);

    const newItem = {
      id: pickle.id,
      name: pickle.name,
      image: pickle.image,
      ingredients: pickle.ingredients,
      description: pickle.description,
      shelfLife: pickle.shelfLife,
      size: selectedSize,
      price: pricePerUnit,
      quantity: quantity,
      totalPrice: pricePerUnit * quantity,
    };

    dispatch(addToCart(newItem));
  };

  useEffect(() => {
    if (selectedProduct && selectedWeight) {
      setPrice(getPrice(selectedProduct, selectedWeight));
    }
  }, [selectedWeight, selectedProduct]);

  const getPrice = (product, selectedWeight) => {
    return getPriceForSize(product, selectedWeight); // Use the utility function
  };

  useEffect(() => {
    if (selectedProduct) {
      const initialSize = selectedProduct.sizes[0];
      setSelectedWeight(initialSize);
      setPrice(getPrice(selectedProduct, initialSize));
    }
  }, [selectedProduct]);

  const incrementQuantity = (pickleId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pickleId]: (prevQuantities[pickleId] || 1) + 1,
    }));
  };

  const decrementQuantity = (pickleId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pickleId]: Math.max((prevQuantities[pickleId] || 1) - 1, 1),
    }));
  };

  const calculateTotalPrice = (pickleId, pickle) => {
    const selectedSize = selectedSizes[pickleId] || pickle.sizes[0];
    const quantity = quantities[pickleId] || 1;
    const pricePerUnit = getPrice(pickle, selectedSize);
    return pricePerUnit * quantity;
  };

  const handleSizeSelection = (pickleId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [pickleId]: size,
    }));
  };

  const handleWeightSelection = (size) => {
    setSelectedWeight(size);
  };

  const handleMaterialSelection = (material) => {
    setSelectedMaterial(material);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(1);
  };


  const vegPicklesData = [
    {
      id: 1,
      name: " AVAKAYA (MANGO PICKLE)",
      price: [140, 260, 480, 960, 2280, 4560],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 140 - 4560 ",
      image: vegeImage,
      ingredients: "Ingredient 1, Ingredient 2",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 2,
      name: "TOMATO PICKLE",
      price: [120, 220, 400, 800, 1900, 3800],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs  120 - 3800 ",
      image: vegeImage,
      ingredients: "Ingredient 3, Ingredient 4",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "1 year",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 3,
      name: "GONGURA PICKLE",
      price: [120, 220, 400, 800, 1900, 3800],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs  120 - 3800 ",
      image: vegeImage,
      ingredients: "Ingredient 5, Ingredient 6",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 4,
      name: "ALLAM PICKLE",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 7, Ingredient 8",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "1 year",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 5,
      name: "USIRIKAYA AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 9, Ingredient 10",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 6,
      name: "BELLAM AVAKAYA",
      price: [160, 300, 580, 1160, 2755, 5510],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 160 - 5510 ",
      image: vegeImage,
      ingredients: "Ingredient 11, Ingredient 12",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "1 year",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 7,
      name: "PANDU MIRAPAKAYA AVAKAYA",
      price: [160, 300, 580, 1160, 2755, 5510],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 160 - 5510 ",
      image: vegeImage,
      ingredients: "Ingredient 13, Ingredient 14",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 8,
      name: "CAULIFOWER AVAKAYA",
      price: [120, 220, 400, 800, 1900, 3800],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs  120 - 3800 ",
      image: vegeImage,
      ingredients: "Ingredient 15, Ingredient 16",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "1 year",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 9,
      name: "GARLIC AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 17, Ingredient 18",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 10,
      name: "NIMAKAYA AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 19, Ingredient 20",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 11,
      name: "CHINTAKAYA PANDU MIRAPAKAYA AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 21, Ingredient 22",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 12,
      name: "MANGO SLICE PICKLE",
      price: [160, 300, 580, 1160, 2755, 5510],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 160 - 5510 ",
      image: vegeImage,
      ingredients: "Ingredient 23, Ingredient 24",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "1 year",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 13,
      name: "GONGURA PANDU MIRAPAKAYA AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 25, Ingredient 26",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 14,
      name: "KAKARAKAYA PICKLE",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 27, Ingredient 28",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 15,
      name: "MANGO THOKU PICKLE",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 29, Ingredient 30",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 16,
      name: "USIRIKAYA THOKU PICKLE",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 31, Ingredient 32",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 17,
      name: "MUNAKAYA AVAKAYA",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 33, Ingredient 34",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 18,
      name: "MIXED VEG PICKLE",
      price: [180, 340, 660, 1320, 3135, 6270],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 180 - 6270 ",
      image: vegeImage,
      ingredients: "Ingredient 35, Ingredient 36",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 19,
      name: "DONDAKAYA PICKLE",
      price: [140, 260, 480, 960, 2280, 4560],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 140 - 4560 ",
      image: vegeImage,
      ingredients: "Ingredient 37, Ingredient 38",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
    {
      id: 20,
      name: "CARROT PICKLE",
      price: [140, 260, 480, 960, 2280, 4560],
      SizeAvailable: "250gm - 10kg",
      priceRange: "Rs 140 - 4560 ",
      image: vegeImage,
      ingredients: "Ingredient 39, Ingredient 40",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg", "10 kg"],
    },
  ];



  return (
    <div>
      <div className="container-fluid">
        <div className="row g-2">
          {vegPicklesData.map((pickle) => (
            <PickleCard
              key={pickle.id}
              pickle={pickle}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              openModal={openModal}
              quantities={quantities}
              selectedSizes={selectedSizes}
              handleSizeSelection={handleSizeSelection}
              getPrice={getPrice}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              calculateTotalPrice={calculateTotalPrice}
              addItem={addItem}
            />
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={Logo} alt="" width="px" height="70px" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Col md={4}>
                <img src={selectedProduct.image} alt="" className="img-fluid" />
              </Col>
              <Col md={8}>
                <div>
                  <h4 className="py-1">{selectedProduct.name}</h4>
                  <p>
                    <span className="fw-bold">Ingredients:</span>{" "}
                    {selectedProduct.ingredients}
                  </p>
                  <p>
                    <span className="fw-bold">Description:</span>{" "}
                    {selectedProduct.description}
                  </p>
                  <p>
                    <span className="fw-bold">Shelf Life:</span>{" "}
                    {selectedProduct.shelfLife}
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                    {/* Sizes */}
                    {selectedProduct.sizes.map((size, index) => (
                      <div key={index} className="m-1">
                        <Button
                          variant={
                            selectedWeight === size
                              ? "primary"
                              : "outline-secondary"
                          }
                          onClick={() => handleWeightSelection(size)}
                          className="m-1 d-flex align-items-center justify-content-center"
                          style={{
                            height: "30px",
                            borderColor:
                              selectedWeight === size ? "black" : "#4e1100",
                            backgroundColor:
                              selectedWeight === size
                                ? "#4e1100"
                                : "transparent",
                            color:
                              selectedWeight === size ? "white" : "inherit",
                            minWidth: "70px",
                          }}
                        >
                          {size}
                        </Button>
                      </div>
                    ))}
                  </div>
                  {/* Material */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <p className="fw-bold" style={{ marginBottom: 0 }}>
                      Material:
                    </p>
                    <Button
                      variant={
                        selectedMaterial === "garlic"
                          ? "primary"
                          : "outline-primary"
                      }
                      onClick={() => handleMaterialSelection("garlic")}
                      className="m-1 d-flex align-items-center justify-content-center"
                      style={{
                        height: "30px",
                        borderColor:
                          selectedMaterial === "garlic" ? "black" : "#4e1100",
                        backgroundColor:
                          selectedMaterial === "garlic"
                            ? "#4e1100"
                            : "transparent",
                        color:
                          selectedMaterial === "garlic" ? "white" : "inherit",
                      }}
                    >
                      Garlic
                    </Button>
                    <Button
                      variant={
                        selectedMaterial === "without garlic"
                          ? "primary"
                          : "outline-primary"
                      }
                      onClick={() => handleMaterialSelection("without garlic")}
                      className="m-1 d-flex align-items-center justify-content-center"
                      style={{
                        height: "30px",
                        borderColor:
                          selectedMaterial === "without garlic"
                            ? "black"
                            : "#4e1100",
                        backgroundColor:
                          selectedMaterial === "without garlic"
                            ? "#4e1100"
                            : "transparent",
                        color:
                          selectedMaterial === "without garlic"
                            ? "white"
                            : "inherit",
                      }}
                    >
                      Without Garlic
                    </Button>
                  </div>
                  <div>
                   

                    
<div className="d-flex align-items-center mt-2">
                    <Button
                       variant="outline-secondary"
                        style={{ height: "25px" }}
                         className="d-flex align-items-center justify-content-center fw-bold"
                         onClick={() =>
                           setQuantity((prevQuantity) =>
                             Math.max(prevQuantity - 1, 1)
                           )
                         }
                       >
                         -
                      </Button>
                      <span className="mx-2">{quantity}</span>
                      <Button
                        variant="outline-secondary"
                        style={{ height: "25px" }}
                        className="d-flex align-items-center justify-content-center fw-bold"
                        onClick={() =>
                          setQuantity((prevQuantity) => prevQuantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>

                    <p className="fw-bold fs-5 mt-3">
                      ₹ {quantity * price}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
    
        <Modal.Footer>
           <Col md={12} className="my-3 d-flex justify-content-end">
             <Button className="custom-button mx-2" onClick={addCart}>
               Add to Cart
            </Button>
           
          </Col>
         </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VegPickles;
