
import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import HomeSliderImg from "../../assets/image 13HomeSliderImg.png";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/actions";


const NonVegsidebar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [showNonVegetable, setShowNonVegetable] = useState(false);
  const [showAllNonVegetable, setShowAllNonVegetable] = useState(false); // New state to toggle full list
  const [isFavorite, setIsFavorite] = useState(Array(16).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  let dispatch = useDispatch();
  let cCart = useSelector((e) => e.cart);
  console.log(cart, "cart");

  const nonVegPicklesData = [
    {
      id: 1,
      name: "BONELESS CHICKEN PICKLE",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225",
  
      image: HomeSliderImg,
      ingredients:'' ,
         description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 2,
      name: "CHICKEN PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients:''  ,
        description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 3,
      name: "PANDEM KODI PICKLE",
      price: [750, 1500, 3000, 6000, 14250],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 750 - 14250 ",
      image: HomeSliderImg,
      ingredients:''  ,
        description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 4,
      name: "NATU KODI PICKLE",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175",
      image: HomeSliderImg,
      ingredients:'' ,  
       description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 5,
      name: "BONELESS MUTTON PICKLE",
      price: [500, 950, 1800, 3600, 8550],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 500 - 8550",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 6,
      name: "MUTTON PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 7,
      name: "FISH PICKLE( KORAMEENU)",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225 ",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 8,
      name: "NETHALU PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 9,
      name: "FISH PICKLE( APOLLO FISH)",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175 ",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 10,
      name: "TIGER PRAWNS PICKLE ",
      price: [350, 680, 1350, 2700, 6412.5],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6412.5",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 11,
      name: "SMALL PRAWNS PICKLE",
      price: [350, 700, 1400, 2800, 6650],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs  350 - 6650",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 12,
      name: "CRAB PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600 ",
      image: HomeSliderImg,
      ingredients:'',
      description: "This delectable pickle is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grms", "500 grms", "1 kg", "2 kg", "5 kg"]
    }
  ];

  const addCart = () => {
    if (selectedProduct && selectedWeight) {
      const newItem = {
        name: selectedProduct.name,
        price: price,
        quantity: quantity,
        size: selectedWeight,
        material: selectedMaterial,
        totalPrice: quantity * price,
      };
      dispatch(addToCart(newItem));
      setQuantity(1);
      setSelectedProduct(null);
      setSelectedWeight(null);
      setSelectedMaterial(null);
    }
    setShowModal(false);
  };

  const getPrice = (productName, selectedWeight) => {
    const product = nonVegPicklesData.find(
      (pickle) => pickle.name === productName
    );
    if (product) {
      const weightPrices = {
        "250 grms": product.price[0],
        "500 grms": product.price[1],
        "1 kg": product.price[2],
        "2 kg": product.price[3],
        "5 kg": product.price[4],
        "10 kg": product.price[5],
      };
      return weightPrices[selectedWeight] || null;
    }
    return null; // Return null if the product is not found
  };

  useEffect(() => {
    if (selectedProduct && selectedWeight) {
      const price = getPrice(selectedProduct.name, selectedWeight);
      if (price !== null) {
        setPrice(price);
      }
    }
  }, [selectedWeight, selectedProduct]);

  useEffect(() => {
    if (selectedProduct) {
      const initialSize = selectedProduct.sizes[0];
      setSelectedWeight(initialSize);
      const initialPrice = getPrice(selectedProduct.name, initialSize);
      if (initialPrice !== null) {
        setPrice(initialPrice);
      }
    }
  }, [selectedProduct]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const buyNow = () => {
    console.log("Buy now:", quantity);
  };

  const handleFavoriteToggle = (productId) => {
    setIsFavorite((prevState) => {
      const newState = [...prevState];
      newState[productId] = !newState[productId];
      return newState;
    });
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


  const toggleShowAll = () => {
    setShowAllNonVegetable(!showAllNonVegetable);
  };

  return (
    // <div className="">

    //       {/* All departments */}
        
        
    //       <div className="row d-flex flex-column text-center px-2">
    //     <div className="col">
    //       <h6 className="fw-bold py-2">NON-VEGETABLE PICKLES</h6>
    //       <div className="row d-flex flex-column text-center px-2">
    //     {nonVegPicklesData.slice(0, 3).map((product) => (
    //       <div  className="col">
    //         <li key={product.id} className='SideBarLabel' onClick={() => openModal(product)}>
    //           {product.name}
    //         </li>
    //       </div>
    //     ))}
    //       {!showAllNonVegetable && nonVegPicklesData.length > 3 && (
    //     <div className="row d-flex flex-column text-center px-2">
    //       <div className="col">
    //         <Button onClick={toggleShowAll}>More</Button>
    //       </div>
    //     </div>
    //   )}
    //   </div>
    //     </div>
    //   </div>

  
  

    //   <Modal show={showModal} onHide={closeModal} size="lg">
    //     <Modal.Header closeButton>
    //       <Modal.Title>
    //         <img src={Logo} alt="" width="px" height="70px" />
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       {selectedProduct && (
    //         <Row
    //           style={{
    //             display: "flex",
    //             flexDirection: "row",
    //             alignItems: "center",
    //           }}
    //         >
    //           <Col md={4}>
    //             <img src={selectedProduct.image} alt="" className="img-fluid" />
    //           </Col>
    //           <Col md={8}>
    //             <div>
    //             <h4 className="py-1">{selectedProduct.name}</h4>
    //               <p>
    //                 <span className="fw-bold">Ingredients:</span>{" "}
    //                 {selectedProduct.ingredients}
    //               </p>
    //               <p>
    //                 <span className="fw-bold">Description:</span>{" "}
    //                 {selectedProduct.description}
    //               </p>
    //               <p>
    //                 <span className="fw-bold">Shelf Life:</span>{" "}
    //                 {selectedProduct.shelfLife}
    //               </p>
    //               <div className="d-flex flex-wrap align-items-center">
    //                   {/* Sizes */}
    //                   {selectedProduct.sizes.map((size, index) => (
    //                     <div key={index} className="m-1">
    //                       <Button
    //                         variant={
    //                           selectedWeight === size
    //                             ? "primary"
    //                             : "outline-secondary"
    //                         }
    //                         onClick={() => handleWeightSelection(size)}
    //                         className="m-1 d-flex align-items-center justify-content-center"
    //                         style={{
    //                           height: "30px",
    //                           borderColor:
    //                             selectedWeight === size ? "black" : "#4e1100",
    //                           backgroundColor:
    //                             selectedWeight === size
    //                               ? "#4e1100"
    //                               : "transparent",
    //                           color:
    //                             selectedWeight === size ? "white" : "inherit",
    //                           minWidth: "70px",
    //                         }}
    //                       >
    //                         {size}
    //                       </Button>
    //                     </div>
    //                   ))}
    //                 </div>
    //               {/* Material */}
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   alignItems: "center",
    //                   marginTop: "10px",
    //                 }}
    //               >
    //                 <p className="fw-bold" style={{ marginBottom: 0 }}>
    //                   Material:
    //                 </p>
    //                 <Button
    //                   variant={
    //                     selectedMaterial === "garlic"
    //                       ? "primary"
    //                       : "outline-primary"
    //                   }
    //                   onClick={() => handleMaterialSelection("garlic")}
    //                   className="m-1 d-flex align-items-center justify-content-center"
    //                   style={{
    //                     height: "30px",
    //                     borderColor:
    //                       selectedMaterial === "garlic" ? "black" : "#4e1100",
    //                     backgroundColor:
    //                       selectedMaterial === "garlic"
    //                         ? "#4e1100"
    //                         : "transparent",
    //                     color:
    //                       selectedMaterial === "garlic" ? "white" : "inherit",
    //                   }}
    //                 >
    //                   Garlic
    //                 </Button>
    //                 <Button
    //                   variant={
    //                     selectedMaterial === "without garlic"
    //                       ? "primary"
    //                       : "outline-primary"
    //                   }
    //                   onClick={() => handleMaterialSelection("without garlic")}
    //                   className="m-1 d-flex align-items-center justify-content-center"
    //                   style={{
    //                     height: "30px",
    //                     borderColor:
    //                       selectedMaterial === "without garlic"
    //                         ? "black"
    //                         : "#4e1100",
    //                     backgroundColor:
    //                       selectedMaterial === "without garlic"
    //                         ? "#4e1100"
    //                         : "transparent",
    //                     color:
    //                       selectedMaterial === "without garlic"
    //                         ? "white"
    //                         : "inherit",
    //                   }}
    //                 >
    //                   Without Garlic
    //                 </Button>
    //               </div>

    //               {/* Quantity buttons */}
    //               <div className="d-flex align-items-center mt-2">
    //               <Button
    //                     variant="outline-secondary"
    //                     style={{ height: "25px" }}
    //                     className="d-flex align-items-center justify-content-center fw-bold"
    //                     onClick={() =>
    //                       setQuantity((prevQuantity) =>
    //                         Math.max(prevQuantity - 1, 1)
    //                       )
    //                     }
    //                   >
    //                     -
    //                   </Button>
    //                   <span className="mx-2">{quantity}</span>
    //                   <Button
    //                     variant="outline-secondary"
    //                     style={{ height: "25px" }}
    //                     className="d-flex align-items-center justify-content-center fw-bold"
    //                     onClick={() =>
    //                       setQuantity((prevQuantity) => prevQuantity + 1)
    //                     }
    //                   >
    //                     +
    //                   </Button>
    //                 </div>
    //                 <p className="fw-bold fs-5 mt-3">
    //                   ₹ {quantity * price}
    //                 </p>
           
               
    //             </div>
    //           </Col>
    //         </Row>
    //       )}
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Col md={12} className="my-3 d-flex justify-content-end">
    //         <Button className="custom-button mx-2" onClick={addCart}>
    //           Add to Cart
    //         </Button>
    //         <Button className="custom-button" onClick={buyNow}>
    //           Buy Now
    //         </Button>
    //       </Col>
    //     </Modal.Footer>
    //   </Modal>
    // </div>

<div className="">
{/* Display the label */}
<div className="row d-flex flex-column text-center ">
  <div className="col">
    <h6 className="fw-bold py-2">NON-VEGETABLE PICKLES</h6>
  </div>
</div>

{/* Display pickles based on showAllNonVegetable state */}
<div className="row d-flex flex-column text-center px-2">
  {showAllNonVegetable
    ? nonVegPicklesData.map((product) => (
        <div key={product.id} className="col">
          <li
            key={product.id}
            className="SideBarLabel"
            onClick={() => openModal(product)}
          >
            {product.name}
          </li>
        </div>
      ))
    : nonVegPicklesData.slice(0, 3).map((product) => (
        <div key={product.id} className="col">
          <li
            key={product.id}
            className="SideBarLabel"
            onClick={() => openModal(product)}
          >
            {product.name}
          </li>
        </div>
      ))}
</div>

{/* Show 'More' button if there are more than 3 items */}
{!showAllNonVegetable && nonVegPicklesData.length > 3 && (
  <div className="row d-flex flex-column text-center px-2">
    <div className="col">
      <Button onClick={toggleShowAll} className='px-5 clickmore   border-none  py-0'>More </Button>
    </div>
  </div>
)}


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

                  {/* Quantity buttons */}
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
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Col md={12} className="my-3 d-flex justify-content-end">
            <Button className="custom-button mx-2" onClick={addCart}>
              Add to Cart
            </Button>
            <Button className="custom-button" onClick={buyNow}>
              Buy Now
            </Button>
          </Col>
        </Modal.Footer>
      </Modal>
</div>
  );
};
export default NonVegsidebar;




