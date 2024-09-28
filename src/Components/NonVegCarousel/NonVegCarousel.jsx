





import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Modal, Button, Row, Col } from "react-bootstrap";
import HomeSliderImg from "../../assets/image 13HomeSliderImg.png";
import "./NonVegCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from '../../assets/telugu1 Logo Main-01 (1).png';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/actions";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        text: "black",
        backgroundColor: "gray",
  
      }}
      onClick={onClick}
    />
  );
}

const   NonVegCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(Array(6).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const sliderRef = useRef(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  let dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  let cCart = useSelector((e) => e.cart);
  const visibleProducts = [
    {
      id: 1,
      name: "BONELESS CHICKEN PICKLE",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225",

      image: HomeSliderImg,
      ingredients: "Ingredient 1, Ingredient 2",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 2,
      name: "CHICKEN PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients: "Ingredient 3, Ingredient 4",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 3,
      name: "PANDEM KODI PICKLE",
      price: [750, 1500, 3000, 6000, 14250],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 750 - 14250 ",
      image: HomeSliderImg,
      ingredients: "Ingredient 5, Ingredient 6",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 4,
      name: "NATU KODI PICKLE",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175",
      image: HomeSliderImg,
      ingredients: "Ingredient 7, Ingredient 8",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 5,
      name: "BONELESS MUTTON PICKLE",
      price: [500, 950, 1800, 3600, 8550],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 500 - 8550",
      image: HomeSliderImg,
      ingredients: "Ingredient 9, Ingredient 10",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 6,
      name: "MUTTON PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600",
      image: HomeSliderImg,
      ingredients: "Ingredient 11, Ingredient 12",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 7,
      name: "FISH PICKLE( KORAMEENU)",
      price: [300, 580, 1100, 2200, 5225],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 300 - 5225 ",
      image: HomeSliderImg,
      ingredients: "Ingredient 13, Ingredient 14",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 8,
      name: "NETHALU PICKLE",
      price: [250, 480, 900, 1800, 4275],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 250 - 4275",
      image: HomeSliderImg,
      ingredients: "Ingredient 15, Ingredient 16",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 9,
      name: "FISH PICKLE( APOLLO FISH)",
      price: [350, 680, 1300, 2600, 6175],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6175 ",
      image: HomeSliderImg,
      ingredients: "Ingredient 17, Ingredient 18",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 10,
      name: "TIGER PRAWNS PICKLE ",
      price: [350, 680, 1350, 2700, 6412.5],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 350 - 6412.5",
      image: HomeSliderImg,
      ingredients: "Ingredient 19, Ingredient 20",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 11,
      name: "SMALL PRAWNS PICKLE",
      price: [350, 700, 1400, 2800, 6650],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs  350 - 6650",
      image: HomeSliderImg,
      ingredients: "Ingredient 21, Ingredient 22",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
    },
    {
      id: 12,
      name: "CRAB PICKLE",
      price: [400, 800, 1600, 3200, 7600],
      SizeAvailable: "250gm - 5kg",
      priceRange: "Rs 400 - 7600 ",
      image: HomeSliderImg,
      ingredients: "Ingredient 23, Ingredient 24",
      description: "This delectable product is a harmonious blend of handpicked seasonal vegetables, expertly crafted spices, and traditional recipes that come together to create a truly irresistible condiment.",
      shelfLife: "6 months",
      sizes: ["250 grams", "500 grams", "1 kg", "2 kg", "5 kg"]
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
      // setCart([...cart, newItem]);
      dispatch(addToCart(newItem));
    }
    setShowModal(false);
  };
  useEffect(() => {
    if (selectedProduct && selectedWeight) {
      setPrice(getPrice(selectedProduct.name, selectedWeight));
    }
  }, [selectedWeight, selectedProduct]);

  const getPrice = (productName, selectedWeight) => {
    const product = visibleProducts.find(
      (product) => product.name === productName
    );
    if (product) {
      switch (selectedWeight) {
        case "250 grams": 
          return product.price[0];
        case "500 grams": 
          return product.price[1];
        case "1 kg":
          return product.price[2];
        case "2 kg":
          return product.price[3];
        case "5 kg":
          return product.price[4];
        default:
          return 0;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    if (selectedProduct) {
      // Initialize selectedWeight and price based on the first size option
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

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };
  
  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
  };

 
  const calculateTotalPrice = (productId, product) => {
    const selectedSize = selectedSizes[productId] || product.sizes[0];
    const quantity = quantities[productId] || 1;
    const pricePerUnit = getPrice(product.name, selectedSize);
    return pricePerUnit * quantity;
  };

  const handleSizeSelection = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
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

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleFavoriteToggle = (productId) => {
    setIsFavorite((prevState) => {
      const newState = [...prevState];
      newState[productId] = !newState[productId];
      return newState;
    });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      setAutoplayPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
      setAutoplayPaused(false);
    }
  };

  const renderImages = () => {
  
     

    
    return (
      <div
        className="slider-container"
        style={{ backgroundColor: "white", margin: "5px" }}
      >
        <Slider
          {...settings}
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          {visibleProducts.map((product, idx) => (
            <div key={idx} className=" card-container">
         <div className="card m-2"  style={{ borderRadius: "15px" }}>
  <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light p-1" onClick={() => openModal(product)} data-mdb-ripple-color="light">
    <img style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px",  }} className="img-fluid" src={product.image} alt={`Product ${idx + 1}`} />
    <a href="#!">
      <div className="mask"></div>
    </a>
  </div>
  <div className="card-body">
    <div className="d-flex justify-content-start mb-3">
      <h6 className="mb-0">{product.name}</h6>
    </div>

    <div className="d-flex justify-content-between">
      <select
        value={selectedSizes[product.id] || product.sizes[0]}
        onChange={(e) => handleSizeSelection(product.id, e.target.value)}
        className="form-select"
      >
        {product.sizes.map((size, index) => (
          <option key={index} value={size}>{size}  -  ₹ {getPrice(product.name, size)}</option>
        ))}
      </select>
    </div>

 

    <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
      <Button
        variant="outline-secondary"
        style={{ height: "25px" }}
        className="d-flex align-items-center justify-content-center fw-bold"
        onClick={() => decrementQuantity(product.id)}
      >
        -
      </Button>
      <span className="mx-2">{quantities[product.id] || 1}</span>
      <Button
        variant="outline-secondary"
        style={{ height: "25px" }}
        className="d-flex align-items-center justify-content-center fw-bold"
        onClick={() => incrementQuantity(product.id)}
      >
        +
      </Button>
    </div>
  
    <hr />
    <div className="d-flex justify-content-between align-items-center m-0 p-0">

      {/* <button
        className="btn-fav border-0 rounded"
        style={{
          backgroundColor: "#fff",
          width: "35px",
          height: "35px",
        }}
        onClick={() => handleFavoriteToggle(product.id)}
      >
        {isFavorite[product.id] ? (
          <HeartFill className="bi bi-heart-fill text-danger bg-none fw-bold" size={26} />
        ) : (
          <Heart className="bi bi-heart fw-bold" size={26} />
        )}
      </button> */}
      <p className="fw-bold fs-6"> ₹ {calculateTotalPrice(product.id, product)}</p>
      <Button className="custom-button" onClick={() => openModal(product)}>
        Add to cart
      </Button>
    
    </div>
  </div>
</div>
        </div>
          ))}
        </Slider>
      </div>
    );
  };
  return (
    <div className="container">
      <h4 className="sectionHead">
        Non-Veg Pickles
      </h4>
      <div className="row">
        <div className="col-md-12 py-2">{renderImages()}</div>
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

export default NonVegCarousel;
