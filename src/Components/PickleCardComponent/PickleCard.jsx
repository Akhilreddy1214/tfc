


// import React from "react";
// import { Button } from "react-bootstrap";
// import { getPriceForSize, calculateTotalPrice } from "../../../utility/utils"; // Import utilities

// const PickleCard = ({
//   pickle,
//   isFavorite,
//   toggleFavorite,
//   openModal,
//   quantities,
//   selectedSizes,
//   handleSizeSelection,
//   incrementQuantity,
//   decrementQuantity,
//   addItem,
// }) => {
//   const selectedSize = selectedSizes[pickle.id] || pickle.sizes[0];
//   const quantity = quantities[pickle.id] || 1;

//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6">
//       <div className="card m-2" style={{ borderRadius: "15px" }}>
//         <div
//           className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
//           onClick={() => openModal(pickle)}
//           data-mdb-ripple-color="light"
//           style={{ position: "relative" }}
//         >
//           <img
//             style={{
//               border: "1px solid #f3b10b",
//               borderTopLeftRadius: "15px",
//               borderTopRightRadius: "15px",
//             }}
//             className="img-fluid"
//             src={pickle.image}
//             alt={`Product ${pickle.id}`}
//           />
//           <i
//             className={`bi bi-heart-fill fs-2 ${
//               isFavorite(pickle) ? "text-danger" : "text-white"
//             }`}
//             style={{
//               position: "absolute",
//               top: "10px",
//               right: "10px",
//               cursor: "pointer",
//             }}
//             onClick={(e) => {
//               e.stopPropagation();
//               toggleFavorite(pickle);
//             }}
//           ></i>
//         </div>
//         <div className="card-body">
//           <div className="d-flex justify-content-start mb-3">
//             <h6 className="mb-0" >{pickle.name}</h6>
//           </div>
//           <div className="d-flex justify-content-between">
//             <select
//               value={selectedSize}
//               onChange={(e) => handleSizeSelection(pickle.id, e.target.value)}
//               className="form-select"
//             >
//               {pickle.sizes.map((size, index) => (
//                 <option key={index} value={size}>
//                   {size} - ₹ {getPriceForSize(pickle, size)}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
//             <Button
//               variant="outline-secondary"
//               style={{ height: "25px" }}
//               className="d-flex align-items-center justify-content-center fw-bold"
//               onClick={() => decrementQuantity(pickle.id)}
//             >
//               -
//             </Button>
//             <span className="mx-2">{quantity}</span>
//             <Button
//               variant="outline-secondary"
//               style={{ height: "25px" }}
//               className="d-flex align-items-center justify-content-center fw-bold"
//               onClick={() => incrementQuantity(pickle.id)}
//             >
//               +
//             </Button>
//           </div>
//           <div className="d-flex justify-content-between align-items-center mt-2">
//             <p className="mb-0 fw-bold">
//               Price: ₹ {calculateTotalPrice(pickle, selectedSize, quantity)}
//             </p>
//             <Button className="custom-button mx-2" onClick={() => addItem(pickle)}>
//               Add to Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PickleCard;


import React from "react";
import { Button } from "react-bootstrap";
import { getPriceForSize, calculateTotalPrice } from "../../../utility/utils"; // Import utilities

const PickleCard = ({
  pickle,
  isFavorite, // This should be a function
  toggleFavorite,
  openModal,
  quantities = {},
  selectedSizes = {},
  handleSizeSelection,
  incrementQuantity,
  decrementQuantity,
  addItem,
}) => {
  const selectedSize = selectedSizes[pickle.id] || (pickle.sizes && pickle.sizes[0]) || 'N/A';
  const quantity = quantities[pickle.id] || 1;
  const favoriteStatus = isFavorite(pickle); // Call the function

  return (
    
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card m-2" style={{ borderRadius: "15px" }}>
        <div
          className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
          onClick={() => openModal(pickle)}
          data-mdb-ripple-color="light"
          style={{ position: "relative" }}
        >
          <img
            style={{
              border: "1px solid #f3b10b",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            className="img-fluid"
            src={pickle.image}
            alt={`Product ${pickle.id}`}
          />
          <i
            className={`bi bi-heart-fill fs-2 ${
              favoriteStatus ? "text-danger" : "text-white"
            }`}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(pickle);
            }}
          ></i>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-start mb-3">
            <h6 className="mb-0">{pickle.name}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <select
              value={selectedSize}
              onChange={(e) => handleSizeSelection(pickle.id, e.target.value)}
              className="form-select"
            >
              {(pickle.sizes || []).map((size, index) => (
                <option key={index} value={size}>
                  {size} - ₹ {getPriceForSize(pickle, size)}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2 border p-1">
            <Button
              variant="outline-secondary"
              style={{ height: "25px" }}
              className="d-flex align-items-center justify-content-center fw-bold"
              onClick={() => decrementQuantity(pickle.id)}
            >
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button
              variant="outline-secondary"
              style={{ height: "25px" }}
              className="d-flex align-items-center justify-content-center fw-bold"
              onClick={() => incrementQuantity(pickle.id)}
            >
              +
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="mb-0 fw-bold">
              Price: ₹ {calculateTotalPrice(pickle, selectedSize, quantity)}
            </p>
            <Button className="custom-button mx-2" onClick={() => addItem(pickle)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickleCard;