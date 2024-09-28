// import React from "react";
// import "./Checkout.css";
// import { Link } from "react-router-dom";
// import FoodNavbar from "../../Components/Navbar/NavBar";
// import { useSelector } from "react-redux";
// const CheckoutPage = () => {
//   let cartRedux = useSelector((e) => e.cart);

  
//   return (
//     <>
//       <FoodNavbar />
//       <h4 className="mainHeading">Checkout</h4>
//       <div className="container">
//         <div className="row py-2">
//           <div className="col-lg-7 col-md-12 mt-2 mb-2">
//             <div
//               className=""
//               style={{
//                 boxShadow:
//                   "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
//               }}
//             >
//               <div className="ShippingFormheading p-2">Shipping Address</div>
//               <div className="panel panel-info p-2">
//                 <div className="FormShippingbody">
//                   <div className=" row form-group mt-2">
//                     <div className="col-md-6 col-xs-12">
//                       <strong>First Name:</strong>
//                       <input
//                         type="text"
//                         name="first_name"
//                         className="form-control mt-1"
//                       />
//                     </div>

//                     <div className="col-md-6 col-xs-12">
//                       <strong>Last Name:</strong>
//                       <input
//                         type="text"
//                         name="last_name"
//                         className="form-control mt-1"
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group mt-2">
//                     <strong>Address:</strong>
//                     <div className="col-md-12 mt-1">
//                       <input
//                         type="text"
//                         name="address"
//                         className="form-control "
//                       />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 col-xs-12 form-group mt-2">
//                       <strong>City:</strong>

//                       <input
//                         type="text"
//                         name="city"
//                         className="form-control mt-1"
//                       />
//                     </div>
//                     <div className="col-md-6 col-xs-12 form-group mt-2">
//                       <strong>State:</strong>
//                       <div className=" mt-1">
//                         <input
//                           type="text"
//                           name="state"
//                           className="form-control "
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 col-xs-12 form-group mt-2">
//                       <strong>Zip / Postal Code:</strong>

//                       <input
//                         type="text"
//                         name="zip_code"
//                         className="form-control mt-1"
//                       />
//                     </div>
//                     <div className="col-md-6 col-xs-12 form-group mt-2">
//                       <strong>Country:</strong>
//                       <div className=" mt-1">
//                         <input
//                           type="text"
//                           name="country"
//                           className="form-control"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="form-group mt-2">
//                     <div className="col-md-12">
//                       <strong>Phone Number:</strong>
//                     </div>
//                     <div className="col-md-12 mt-1">
//                       <input
//                         type="text"
//                         name="phone_number"
//                         className="form-control"
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group mt-2">
//                     <div className="col-md-12">
//                       <strong>Email Address:</strong>
//                     </div>
//                     <div className="col-md-12 mt-1">
//                       <input
//                         type="text"
//                         name="email_address"
//                         className="form-control"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-5 col-md-12 mt-2 mb-2">
          
//             <div
//               className=""
//               style={{
//                 boxShadow:
//                   "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
//                 borderRadius: "10px",
//               }}
//             >
//               <div className="ShippingFormheading p-2"> Order Summary</div>
//               <div className="panel panel-info p-2">
//                 <div className="FormShippingbody">
         
//                   {cartRedux.map((item, index) => (
//                     <div key={index} className="row form-group d-flex p-2">
//                       <div className="col-sm-3 col-xs-3">
//                         <img
//                           className="img-responsive"
//                           src={item.image}
//                           alt="Product"
//                         />
//                       </div>
//                       <div className="col-sm-6 col-xs-6">
//                         <div className="">{item.name}</div>
//                         <div className="">
//                           <small>
//                             Quantity:<span>{item.quantity}</span>
//                           </small>
//                         </div>
//                       </div>
//                       <div className="col-sm-3 col-xs-3 text-end">
//                         <h6>
//                           <span>₹</span>
//                           {item.totalPrice.toFixed(2)}
//                         </h6>
//                       </div>
//                       <div className="form-group">
//                     <hr />
//                   </div>
//                     </div>
                    
//                   ))}
                  
                 
//                   <div className="form-group">
//                     <div className="col-xs-12 d-flex justify-content-between align-items-center p-2">
//                       <strong>Subtotal</strong>
//                       <div className="pull-right">
//                         <span>₹</span>
//                         <span>{cartRedux.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</span>
//                       </div>
//                     </div>
//                     <div className="col-xs-12 d-flex justify-content-between align-items-center p-2">
//                       <small>Shipping</small>
//                       <div className="text-right">
//                         <span>-</span>
//                       </div>

//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <hr />
//                   </div>
//                   <div className="form-group">
//                     <div className="col-xs-12 d-flex justify-content-between align-items-center p-2">
//                       <strong>Order Total</strong>
//                       <div className="pull-right">
//                         <span>₹</span>
//                         <span>{cartRedux.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="row my-2 d-flex justify-content-between align-items-center">
//           <div className="col">
//             <Link to='/'  className="btn custom-button  ">
//               <i class="bi bi-arrow-left fw-bold text-white mx-2"></i> Continue
//               Shopping
//             </Link>
//           </div>
//           <div className="col">
//             <div className="text-end mt-2 mt-sm-0">
//               <Link to="/PaymentPage" className="btn custom-button">
                
//                   <i className="mdi mdi-cart-outline me-1 "></i> Pay <span>₹</span><span>{cartRedux.reduce((acc, item) => acc + item.totalPrice, 0).toFixed(2)}</span>
         
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;


import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import FoodNavbar from "../../Components/Navbar/NavBar";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartRedux = useSelector((state) => state.cart);
  const [shippingInfo, setShippingInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone_number: "",
    email_address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const totalCartPrice = cartRedux.reduce(
    (total, currentItem) => total + currentItem.totalPrice,
    0
  );

  return (
    <>
      <FoodNavbar />
      <h4 className="mainHeading">Checkout</h4>
      <div className="container">
        <div className="row py-2">
          <div className="col-lg-7 col-md-12 mt-2 mb-2">
            <div className="box-shadow">
              <div className="ShippingFormheading p-2">Shipping Address</div>
              <div className="panel panel-info p-2">
                <div className="FormShippingbody">
                  <div className="row form-group mt-2">
                    <div className="col-md-6 col-xs-12">
                      <strong>First Name:</strong>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control mt-1"
                        value={shippingInfo.first_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <strong>Last Name:</strong>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control mt-1"
                        value={shippingInfo.last_name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <strong>Address:</strong>
                    <input
                      type="text"
                      name="address"
                      className="form-control mt-1"
                      value={shippingInfo.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12 form-group mt-2">
                      <strong>City:</strong>
                      <input
                        type="text"
                        name="city"
                        className="form-control mt-1"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12 form-group mt-2">
                      <strong>State:</strong>
                      <input
                        type="text"
                        name="state"
                        className="form-control mt-1"
                        value={shippingInfo.state}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12 form-group mt-2">
                      <strong>Zip / Postal Code:</strong>
                      <input
                        type="text"
                        name="zip_code"
                        className="form-control mt-1"
                        value={shippingInfo.zip_code}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6 col-xs-12 form-group mt-2">
                      <strong>Country:</strong>
                      <input
                        type="text"
                        name="country"
                        className="form-control mt-1"
                        value={shippingInfo.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <strong>Phone Number:</strong>
                    <input
                      type="text"
                      name="phone_number"
                      className="form-control mt-1"
                      value={shippingInfo.phone_number}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <strong>Email Address:</strong>
                    <input
                      type="email"
                      name="email_address"
                      className="form-control mt-1"
                      value={shippingInfo.email_address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 mt-2 mb-2">
            <div className="box-shadow rounded-10">
              <div className="ShippingFormheading p-2">Order Summary</div>
              <div className="panel panel-info p-2">
                <div className="FormShippingbody">
                  {cartRedux.map((item, index) => (
                    <div key={index} className="row form-group d-flex p-2">
                      <div className="col-sm-3 col-xs-3">
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt="Product"
                        />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <div className="">{item.name}</div>
                        <div className="">
                          <small>
                            Quantity: <span>{item.quantity}</span>
                          </small>
                        </div>
                      </div>
                      <div className="col-sm-3 col-xs-3 text-end">
                        <h6>
                          <span>₹</span>
                          {item.totalPrice.toFixed(2)}
                        </h6>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <div className="form-group d-flex justify-content-between align-items-center p-2">
                    <strong>Subtotal</strong>
                    <div>
                      <span>₹</span>
                      <span>{totalCartPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-between align-items-center p-2">
                    <small>Shipping</small>
                    <div>
                      <span>-</span>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group d-flex justify-content-between align-items-center p-2">
                    <strong>Order Total</strong>
                    <div>
                      <span>₹</span>
                      <span>{totalCartPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2 d-flex justify-content-between align-items-center">
          <div className="col">
            <Link to="/" className="btn custom-button">
              <i className="bi bi-arrow-left fw-bold text-white mx-2"></i>
              Continue Shopping
            </Link>
          </div>
          <div className="col">
            <div className="text-end mt-2 mt-sm-0">
              <Link to="/PaymentPage" className="btn custom-button">
                <i className="mdi mdi-cart-outline me-1"></i>
                Pay ₹{totalCartPrice.toFixed(2)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
