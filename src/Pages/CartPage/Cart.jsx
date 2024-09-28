


import React from "react";
import pickleimg from "../../assets/Pickel Bottle copy 1tomPickle.png";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import FoodNavbar from "../../Components/Navbar/NavBar";
import { removeFromCart, updateQuantity } from "../../redux/Actions/actions";

const CartPage = () => {
  const cartRedux = useSelector((state) => state.cart);
  console.log(cartRedux)
  const dispatch = useDispatch();

  const totalCartPrice = cartRedux.reduce(
    (total, currentItem) => total + currentItem.totalPrice,
    0
  );

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleIncrementQuantity = (index) => {
    const updatedQuantity = cartRedux[index].quantity + 1;
    dispatch(updateQuantity(index, updatedQuantity));
  };

  const handleDecrementQuantity = (index) => {
    const updatedQuantity = cartRedux[index].quantity - 1;
    if (updatedQuantity > 0) {
      dispatch(updateQuantity(index, updatedQuantity));
    }
  };

  return (
    <div className="">
      <FoodNavbar />
      <h4 className="mainHeading">Shopping Cart</h4>
      <div className="container">
        {cartRedux.length === 0 ? (
          <div className="py-4 text-center">
            <h3 className="fw-bold text-secondary">
              <span>
                <i className="bi bi-cart4 fs-2 fw-bold CaartIcon mx-2"></i>
              </span>
              Cart is empty
            </h3>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-12 bg-white rounded shadow-sm mb-5">
              <div className="container py-2">
                {cartRedux.map((e, index) => (
                  <div key={index} className="ProductCardCart">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-4">
                        <div className="p-2 d-flex align-items-center">
                          <img
                            src={pickleimg}
                            alt=""
                            height="50"
                            width="50"
                            className="img-fluid shadow-sm mx-3"
                          />
                          <div>
                            <Link to="/">
                              <h5  className="pt-2 productNameLink">{e.name}</h5>
                            </Link>
                            <h6 className="text-muted pt-2">Size : {e.size}</h6>
                           
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 align-middle text-center">
                        <strong>{e.price}</strong>
                      </div>
                      <div className="col-lg-2 align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <Button
                            variant="outline-secondary"
                            style={{ height: "25px" }}
                            className="d-flex align-items-center justify-content-center fw-bold"
                            onClick={() => handleDecrementQuantity(index)}
                          >
                            -
                          </Button>
                          <span className="mx-2">{e.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            style={{ height: "25px" }}
                            className="d-flex align-items-center justify-content-center fw-bold"
                            onClick={() => handleIncrementQuantity(index)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div className="col-lg-2 align-middle text-center">
                        <strong>{e.totalPrice}</strong>
                      </div>
                      <div className="col-lg-2 align-middle text-center">
                        <a
                          href="#"
                          className="text-dark text-center"
                          onClick={() => handleRemoveFromCart(index)}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
         
        )}
        <div className="row py-2 bg-white rounded shadow-sm">
          <div className="col-lg-6">
            <div className="SmallHeading rounded-pill">
              Instructions for seller
            </div>
            <div className="py-2">
              <p className="mb-4">
                If you have some information for the seller you can leave them
                in the box below.
              </p>
              <textarea
                name=""
                cols="30"
                rows="3"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="SmallHeading rounded-pill">Order summary</div>
            <div className="p-4">
              <p className="mb-4">
                Shipping and additional costs are calculated based on values you
                have entered in checkout page.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3">
                  <strong className="text-muted">Order Subtotal</strong>
                  <strong>₹ {totalCartPrice}</strong>
                </li>
                <li className="d-flex justify-content-between py-3">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">₹ {totalCartPrice}</h5>
                </li>
              </ul>
              <Link
                to="/CheckoutPage"
                className="btn ButtonAll rounded-pill py-2 btn-block"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
