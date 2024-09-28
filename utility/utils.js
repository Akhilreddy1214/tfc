

export const getPriceForSize = (pickle, size) => {
    const sizeIndex = pickle.sizes.indexOf(size);
    if (sizeIndex >= 0 && sizeIndex < pickle.price.length) {
      return pickle.price[sizeIndex];
    } else {
      console.warn("Invalid size ");
      return 0;
    }
  };
  
  export const calculateTotalPrice = (pickle, size, quantity) => {
    const pricePerUnit = getPriceForSize(pickle, size);
    return pricePerUnit * quantity;
  };
  