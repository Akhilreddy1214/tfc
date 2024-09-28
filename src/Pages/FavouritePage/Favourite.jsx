

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites, addToCart } from "../../redux/Actions/actions";
import PickleCard from "../../Components/PickleCardComponent/PickleCard";
import FoodNavbar from '../../Components/Navbar/NavBar';
import { getPriceForSize, calculateTotalPrice } from "../../../utility/utils";

const FavPage = () => {
  const [quantities, setQuantities] = useState({});
  const [selectedSizes, setSelectedSizes] = useState({});
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (pickle) => {
    return favorites.some((fav) => fav.id === pickle.id);
  };

  const toggleFavorite = (pickle) => {
    dispatch(removeFromFavorites(pickle.id));
  };

  const addItem = (pickle) => {
    const quantity = quantities[pickle.id] || 1;
    const selectedSize = selectedSizes[pickle.id] || pickle.sizes[0];
    const pricePerUnit = getPriceForSize(pickle, selectedSize);

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

  const handleQuantityChange = (pickleId, delta) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [pickleId]: Math.max((prevQuantities[pickleId] || 1) + delta, 1),
    }));
  };

  const handleSizeSelection = (pickleId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [pickleId]: size,
    }));
  };

  return (
    <div className="container-fluid m-0 p-0">
      <FoodNavbar />
      <h4 className="mainHeading text-center ">Wishlist</h4>
      <div className="container">
       
        <div className="row g-2">
          {favorites.map((pickle) => (
            <PickleCard
              key={pickle.id}
              pickle={pickle}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              openModal={() => {}} // Placeholder function if modal is not used
              quantities={quantities}
              selectedSizes={selectedSizes}
              handleSizeSelection={handleSizeSelection}
              incrementQuantity={() => handleQuantityChange(pickle.id, 1)}
              decrementQuantity={() => handleQuantityChange(pickle.id, -1)}
              calculateTotalPrice={() => calculateTotalPrice(pickle, selectedSizes[pickle.id] || pickle.sizes[0], quantities[pickle.id] || 1)}
              addItem={addItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavPage;
