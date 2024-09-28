
import React, { useEffect, useState } from 'react';
import './SideBar.css';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import HomeSliderImg from "../../assets/image 13HomeSliderImg.png";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/actions";
import NonVegsidebar from '../sidebarcomponents/nonvegsidebar.jsx';
import VegSidebar from '../sidebarcomponents/vegsidebar.jsx';
const Sidebar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [showVegetable, setShowVegetable] = useState(false);
  const [showNonVegetable, setShowNonVegetable] = useState(false);

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
      // setCart([...cart, newItem]);
      console.log(newItem, "new");
      dispatch(addToCart(newItem));
    }
    setShowModal(false);
  };
  useEffect(() => {
    if (selectedProduct && selectedWeight) {
      setPrice(getPrice(selectedProduct.name, selectedWeight));
    }
  }, [selectedWeight, selectedProduct]);
 
  const getPrice = (productName, selectedWeight ) => {
    const product = nonVegPicklesData.find(
      (pickle) => pickle.name === productName
    );
    if (product) {
      switch (selectedWeight) {
        case "250 grms":
          return product.price[0];
        case "500 grms":
          return product.price[1];
        case "1 kg":
          return product.price[2];
        case "2 kg":
          return product.price[3];
        case "5 kg":
          return product.price[4];
        case "10 kg":
          return product.price[5];
      
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

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const buyNow = () => {
    // Implement functionality to proceed to checkout
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

  // Modify this function to open the modal with the selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };
  const toggleVegetable = () => {
    setShowVegetable(!showVegetable)
    setShowNonVegetable(false);
  }



  const toggleNonVegetable = () => {
    setShowNonVegetable(!showNonVegetable);
    setShowVegetable(false);
  }

  

 

  return (
    <div className="container">
      
      <div className="row ">
        <div className="col ">
          {/* All departments */}
          <div className="categoryITEMS text-center text-white ">
            <i className="bi bi-list mx-2 fs-4 fw-bold"></i>
            <span className='fs-5'>All departments</span>
          </div>
          <div className='scrollable-list h-100'>
          <NonVegsidebar/>
          <VegSidebar />
          </div>
    
       
        </div>
      </div>

    </div>
  );
};
export default Sidebar;
