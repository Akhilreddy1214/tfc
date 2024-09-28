


// import React, { useEffect, useState } from "react";
// import { Button, Col, Modal, Row } from "react-bootstrap";
// import HomeSliderImg from "../../assets/nonveg bowl 1-01.jpg";
// import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
// import "./NonvegPickles.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, addToFavorites, removeFromFavorites } from "../../redux/Actions/actions";
// import PickleCard from "../PickleCardComponent/PickleCard";
// import { getPriceForSize } from "../../../utility/utils"; // Import your utility function

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
//     const pricePerUnit = getPrice(pickle, selectedSize);

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
//       setPrice(getPrice(selectedProduct, selectedWeight));
//     }
//   }, [selectedWeight, selectedProduct]);

//   const getPrice = (product, selectedWeight) => {
//     return getPriceForSize(product, selectedWeight); // Use the utility function
//   };

//   useEffect(() => {
//     if (selectedProduct) {
//       const initialSize = selectedProduct.sizes[0];
//       setSelectedWeight(initialSize);
//       setPrice(getPrice(selectedProduct, initialSize));
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
//     const pricePerUnit = getPrice(pickle, selectedSize);
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
//       <div className="container-fluid">
//         <div className="row g-2">
//           {nonNonVegPicklesData.map((pickle) => (
//             <PickleCard
//               key={pickle.id}
//               pickle={pickle}
//               isFavorite={isFavorite}
//               toggleFavorite={toggleFavorite}
//               openModal={openModal}
//               quantities={quantities}
//               selectedSizes={selectedSizes}
//               handleSizeSelection={handleSizeSelection}
//               getPrice={getPrice}
//               incrementQuantity={incrementQuantity}
//               decrementQuantity={decrementQuantity}
//               calculateTotalPrice={calculateTotalPrice}
//               addItem={addItem}
//             />
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
//                   <div>
                   

                    
// <div className="d-flex align-items-center mt-2">
//                     <Button
//                        variant="outline-secondary"
//                         style={{ height: "25px" }}
//                          className="d-flex align-items-center justify-content-center fw-bold"
//                          onClick={() =>
//                            setQuantity((prevQuantity) =>
//                              Math.max(prevQuantity - 1, 1)
//                            )
//                          }
//                        >
//                          -
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
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           )}
//         </Modal.Body>
    
//         <Modal.Footer>
//            <Col md={12} className="my-3 d-flex justify-content-end">
//              <Button className="custom-button mx-2" onClick={addCart}>
//                Add to Cart
//             </Button>
           
//           </Col>
//          </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default NonVegPickles;


// src/components/NonVegPickles/NonVegPickles.js





import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import HomeSliderImg from "../../assets/nonveg bowl 1-01.jpg";
import ProductModal from "../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../../redux/Actions/actions";
import PickleCard from "../PickleCardComponent/PickleCard";
import { getPriceForSize,calculateTotalPrice } from "../../../utility/utils";

const NonVegPickles = () => {
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

  const isFavorite = (pickle) => favorites.some((fav) => fav.id === pickle.id);


  const toggleFavorite = (pickle) => {
    isFavorite(pickle)
      ? dispatch(removeFromFavorites(pickle.id))
      : dispatch(addToFavorites(pickle));
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
      setShowModal(false);
    }
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

  const getPrice = (product, selectedWeight) => getPriceForSize(product, selectedWeight);

  const incrementQuantity = (pickleId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pickleId]: (prevQuantities[pickleId] || 1) + 1,
    }));
  };

  const decrementQuantity = (pickleId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[pickleId] || 1;
      return {
        ...prevQuantities,
        [pickleId]: Math.max(currentQuantity - 1, 1),
      };
    });
  };

  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
  };

  const handleMaterialSelection = (material) => {
    setSelectedMaterial(material);
  };

    const handleSizeSelection = (pickleId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [pickleId]: size,
    }));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(1);
  };
  const NonVegPicklesData = [
    {
      id: 1,
      name: "BONELESS CHICKEN PICKLE",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225",

      image: HomeSliderImg,
      ingredients:
        "Chicken , Ground nut oil, Chilli powder, Salt, Turmeric powder, Masala mixed powder, Fenugreek seeds ,Clove,Cardamom, Cinnamon, Chekra phool, Pippali, Elachi, Jaayphal, Jaavitree",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 2,
      name: "CHICKEN PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 3,
      name: "PANDEM KODI PICKLE",
      price: [750, 1500, 3000, 6000, 14250],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 750 - 14250 ",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 4,
      name: "NATU KODI PICKLE",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 5,
      name: "BONELESS MUTTON PICKLE",
      price: [500, 950, 1800, 3600, 8550],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 500 - 8550",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 6,
      name: "MUTTON PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 7,
      name: "FISH PICKLE( KORAMEENU)",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225 ",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 8,
      name: "NETHALU PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 9,
      name: "FISH PICKLE( APOLLO FISH)",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175 ",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 10,
      name: "TIGER PRAWNS PICKLE ",
      price: [350, 680, 1350, 2700, 6412.5],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6412.5",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 11,
      name: "SMALL PRAWNS PICKLE",
      price: [350, 700, 1400, 2800, 6650],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs  350 - 6650",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
    {
      id: 12,
      name: "CRAB PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600 ",
      image: HomeSliderImg,
      ingredients: "",
      description:
        "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"],
    },
  ];

  return (
    <div>
   <div className="container-fluid">
        <div className="row g-2">
          {NonVegPicklesData.map((pickle) => (
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

      <ProductModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        selectedProduct={selectedProduct}
        addCart={addCart}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        handleWeightSelection={handleWeightSelection}
        handleMaterialSelection={handleMaterialSelection}
        selectedWeight={selectedWeight}
        selectedMaterial={selectedMaterial}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
};

export default NonVegPickles;
