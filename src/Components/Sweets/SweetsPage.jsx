






import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import HomeSliderImg from "../../assets/image 13HomeSliderImg.png";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import "./SweetsPage.css"; 
import psweetimg from "../../assets/Pickel Bottle copy 1tomPickle.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/actions";
// import { addToFavourites } from "../../redux/Actions/actions";

const Sweets = () => {
  let dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(Array(16).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);
  let cCart = useSelector((e) => e.cart);
  let fav = useSelector((e) => e.favourites);
  console.log(cart, "cart");
  console.log(fav, "favourites");


  const sweetsData = [
    {
      id: 1,
      name: "Gulab Jamun",
      price: [150, 280, 550, 1100, 2750],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 150 - 2750",
      image: HomeSliderImg,
      ingredients: '',
      description: "Gulab Jamun is a classic Indian sweet made with milk solids, deep-fried and soaked in sugar syrup.",
      shelfLife: "3 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 2,
      name: "Rasgulla",
      price: [120, 220, 420, 840, 2100],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 120 - 2100",
      image: HomeSliderImg,
      ingredients: '',
      description: "Rasgulla is a popular Indian sweet made with paneer (Indian cottage cheese) balls cooked in sugar syrup.",
      shelfLife: "3 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 3,
      name: "Kaju Katli",
      price: [200, 380, 750, 1500, 3750],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 200 - 3750",
      image: HomeSliderImg,
      ingredients: '',
      description: "Kaju Katli is a popular Indian sweet made with cashew nuts, sugar, and ghee.",
      shelfLife: "10 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 4,
      name: "Ladoo",
      price: [100, 180, 350, 700, 1750],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 100 - 1750",
      image: HomeSliderImg,
      ingredients: '',
      description: "Ladoo is a round-shaped Indian sweet made with flour, sugar, and ghee.",
      shelfLife: "7 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 5,
      name: "Jalebi",
      price: [80, 150, 280, 550, 1375],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 80 - 1375",
      image: HomeSliderImg,
      ingredients: '',
      description: "Jalebi is a crispy Indian sweet made by deep-frying flour batter in pretzel or circular shapes, which are then soaked in sugar syrup.",
      shelfLife: "2 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 6,
      name: "Barfi",
      price: [160, 300, 580, 1150, 2875],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 160 - 2875",
      image: HomeSliderImg,
      ingredients: '',
      description: "Barfi is a dense milk-based sweet confectionery made with condensed milk and sugar.",
      shelfLife: "7 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 7,
      name: "Peda",
      price: [120, 220, 420, 840, 2100],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 120 - 2100",
      image: HomeSliderImg,
      ingredients: '',
      description: "Peda is a traditional Indian sweet made from condensed milk and flavored with cardamom.",
      shelfLife: "7 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 8,
      name: "Sohan Papdi",
      price: [140, 260, 500, 1000, 2500],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 140 - 2500",
      image: HomeSliderImg,
      ingredients: '',
      description: "Sohan Papdi is a popular North Indian sweet made with gram flour, ghee, sugar, and garnished with almonds and pistachios.",
      shelfLife: "15 days",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    }
  ];
  
  // const sweetsData = [
  //   {
  //     id: 1,
  //     name: "Gulab Jamun",
  //     price: [150, 280, 550, 1100, 2750],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 150 - 2750",
  //     image: "https://example.com/images/gulab_jamun.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Gulab Jamun is a classic Indian sweet made with milk solids, deep-fried and soaked in sugar syrup.",
  //     shelfLife: "3 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 2,
  //     name: "Rasgulla",
  //     price: [120, 220, 420, 840, 2100],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 120 - 2100",
  //     image: "https://example.com/images/rasgulla.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Rasgulla is a popular Indian sweet made with paneer (Indian cottage cheese) balls cooked in sugar syrup.",
  //     shelfLife: "3 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 3,
  //     name: "Kaju Katli",
  //     price: [200, 380, 750, 1500, 3750],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 200 - 3750",
  //     image: "https://example.com/images/kaju_katli.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Kaju Katli is a popular Indian sweet made with cashew nuts, sugar, and ghee.",
  //     shelfLife: "10 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 4,
  //     name: "Ladoo",
  //     price: [100, 180, 350, 700, 1750],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 100 - 1750",
  //     image: "https://example.com/images/ladoo.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Ladoo is a round-shaped Indian sweet made with flour, sugar, and ghee.",
  //     shelfLife: "7 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 5,
  //     name: "Jalebi",
  //     price: [80, 150, 280, 550, 1375],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 80 - 1375",
  //     image: "https://example.com/images/jalebi.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Jalebi is a crispy Indian sweet made by deep-frying flour batter in pretzel or circular shapes, which are then soaked in sugar syrup.",
  //     shelfLife: "2 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 6,
  //     name: "Barfi",
  //     price: [160, 300, 580, 1150, 2875],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 160 - 2875",
  //     image: "https://example.com/images/barfi.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Barfi is a dense milk-based sweet confectionery made with condensed milk and sugar.",
  //     shelfLife: "7 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 7,
  //     name: "Peda",
  //     price: [120, 220, 420, 840, 2100],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 120 - 2100",
  //     image: "https://example.com/images/peda.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Peda is a traditional Indian sweet made from condensed milk and flavored with cardamom.",
  //     shelfLife: "7 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   },
  //   {
  //     id: 8,
  //     name: "Sohan Papdi",
  //     price: [140, 260, 500, 1000, 2500],
  //     SizeAvailable: "250gm - 5kg",
  //     priceRange: "Rs 140 - 2500",
  //     image: "https://example.com/images/sohan_papdi.jpg", // Replace with the actual URL
  //     ingredients: '',
  //     description: "Sohan Papdi is a popular North Indian sweet made with gram flour, ghee, sugar, and garnished with almonds and pistachios.",
  //     shelfLife: "15 days",
  //     sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
  //   }
  // ];
  

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
    }
    setShowModal(false);
  };

  useEffect(() => {
    if (selectedProduct && selectedWeight) {
      setPrice(getPrice(selectedProduct.name, selectedWeight));
    }
  }, [selectedWeight, selectedProduct]);

  const getPrice = (sweetName, selectedWeight) => {
    const sweet = sweetsData.find(
      (sweet) => sweet.name === sweetName
    );
    if (sweet) {
      switch (selectedWeight) {
        case "250 grams": // Corrected to match the weight strings exactly
          return sweet.price[0];
        case "500 grams": // Corrected to match the weight strings exactly
          return sweet.price[1];
        case "1 kg":
          return sweet.price[2];
        case "2 kg":
          return sweet.price[3];
        case "5 kg":
          return sweet.price[4];
        case "10 kg":
          return sweet.price[5];
        default:
          return 0;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      const initialSize = selectedProduct.sizes[0];
      setSelectedWeight(initialSize);
      setPrice(getPrice(selectedProduct.price, initialSize));
    }
  }, [selectedProduct]);



  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = (sweetId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [sweetId]: (prevQuantities[sweetId] || 1) + 1,
    }));
  };
  
  const decrementQuantity = (sweetId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [sweetId]: Math.max((prevQuantities[sweetId] || 1) - 1, 1),
    }));
  };

 
  const calculateTotalPrice = (sweetId, sweet) => {
    const selectedSize = selectedSizes[sweetId] || sweet.sizes[0];
    const quantity = quantities[sweetId] || 1;
    const pricePerUnit = getPrice(sweet.name, selectedSize);
    return pricePerUnit * quantity;
  };

  const handleSizeSelection = (sweetId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [sweetId]: size,
    }));
  };

  const buyNow = () => {
    console.log("Buy now:", quantity);
  };



  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
  };

  const handleMaterialSelection = (material) => {
    setSelectedMaterial(material);
  };




  const handleFavoriteToggle = (sweet) => {
    const newFavoriteStatus = !isFavorite[sweet.id];
    setIsFavorite(prevState => ({
      ...prevState,
      [sweet.id]: newFavoriteStatus
    }));
    console.log(isFavorite); // Log the state to check if it's updating correctly
    dispatch(addToFavourites({ ...sweet, isFavorite: newFavoriteStatus }));
  };

  const openModal = (sweet) => {
    setSelectedProduct(sweet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(1);

  };


  return (
    <div className="container py-2">
      <div className="row g-1">
        {sweetsData.map((sweet, idx) => (
          <div className="col-md-3" key={idx}>

<div className="card m-2"  style={{ borderRadius: "15px" }}>
  <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light p-1" onClick={() => openModal(sweet)} data-mdb-ripple-color="light">
    <img style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px",  }} className="img-fluid" src={sweet.image} alt={`Product ${idx + 1}`} />
    <a href="#!">
      <div className="mask"></div>
    </a>
  </div>
  <div className="card-body">
    <div className="d-flex justify-content-start mb-3">
      <h6 className="mb-0">{sweet.name}</h6>
    </div>

    <div className="d-flex justify-content-between">
      <select
        value={selectedSizes[sweet.id] || sweet.sizes[0]}
        onChange={(e) => handleSizeSelection(sweet.id, e.target.value)}
        className="form-select"
      >
        {sweet.sizes.map((size, index) => (
          <option key={index} value={size}>{size}  -  ₹ {getPrice(sweet.name, size)}</option>
        ))}
      </select>
    </div>

 

    <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
      <Button
        variant="outline-secondary"
        style={{ height: "25px" }}
        className="d-flex align-items-center justify-content-center fw-bold"
        onClick={() => decrementQuantity(sweet.id)}
      >
        -
      </Button>
      <span className="mx-2">{quantities[sweet.id] || 1}</span>
      <Button
        variant="outline-secondary"
        style={{ height: "25px" }}
        className="d-flex align-items-center justify-content-center fw-bold"
        onClick={() => incrementQuantity(sweet.id)}
      >
        +
      </Button>
    </div>
  
    <hr />
    <div className="d-flex justify-content-between align-items-center m-0 p-0">

      <p className="fw-bold fs-6"> ₹ {calculateTotalPrice(sweet.id, sweet)}</p>
      <Button className="custom-button" onClick={() => openModal(sweet)}>
        Add to cart
      </Button>
    
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={Logo} alt="" width="px" height="70px" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Product details */}
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
                  <div style={{ display: "flex" }}>
                    <p
                      className="fw-bold"
                      style={{ marginBottom: 0, marginTop: "8px" }}
                    >
                      Quantity:
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
                  </div>

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
                  <div className="d-flex align-items-center ">
                    <Button
                      variant="outline-secondary"
                      style={{ height: "25px" }}
                      className="d-flex align-items-center justify-content-center fw-bold "
                      onClick={removeQuantity}
                    >
                      -
                    </Button>
                    <span className="mx-2">{quantity}</span>
                    <Button
                      variant="outline-secondary"
                      style={{ height: "25px" }}
                      className="d-flex align-items-center justify-content-center fw-bold "
                      onClick={addQuantity}
                    >
                      +
                    </Button>
                  </div>
                  <div className="mt-3">
                    <h5 className="fw-bold">Price:</h5>
                    <p>{price * quantity}</p>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Col md={12} className="my-3 d-flex justify-content-end">
            {/* Add to Cart and Buy Now buttons */}
            <Button

              className="custom-button mx-2"
              onClick={addCart}
            >
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

export default Sweets;
