




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/telugu1 Logo Main-01 (1).png";
import { useSelector } from "react-redux";
import "./Navbar.css";

const FoodNavbar = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  let cartRedux = useSelector((e) => e.cart);

  useEffect(() => {
    const bootstrap = window.bootstrap;
    if (bootstrap && bootstrap.Tab) {
      const loginTab = new bootstrap.Tab(document.getElementById("loginTab"));
      loginTab.show();
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const bootstrap = window.bootstrap;
    if (bootstrap && bootstrap.Tab) {
      const tab = new bootstrap.Tab(document.getElementById(tabId));
      tab.show();
    }
  };

 
  const totalItemsInCart = cartRedux.length;
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="Logo" width="auto" height="70px" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <Link style={{ textDecoration: "none" }} to="/">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Products
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <Link to="/VegPage">
                        <li>
                          <a className="dropdown-item" href="#">
                            Veg Pickles
                          </a>
                        </li>
                      </Link>
                      <Link to="/NonVegPage">
                        <li>
                          <a className="dropdown-item" href="#">
                            Non-Veg Pickles
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </Link>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  Orders
                  </a>
                </li>
               <Link to='/AboutUs'>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/ContactPage">
                  <li className="nav-item">
                    <a className="nav-link text-decoration-none">Contact Us</a>
                  </li>
                </Link>
              </ul>
              <div className="col d-flex justify-content-end">
                <Link to="/FavPage">
                  <button
                    className="btn btn-link favorite-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favorites"
                  >
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4e1100"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M725.333333 42.666667a276.714667 276.714667 0 0 0-213.333333 100.224A276.714667 276.714667 0 0 0 298.666667 42.666667C145.749333 42.666667 21.333333 167.082667 21.333333 320c0 263.082667 457.664 640.576 477.162667 656.512a21.226667 21.226667 0 0 0 27.008 0C545.002667 960.576 1002.666667 583.082667 1002.666667 320c0-152.917333-124.416-277.333333-277.333334-277.333333z"
                          fill="#4e1100"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </Link>
                <Link to="/CartPage">
                  <button
                    className="btn btn-link Cart-icon me-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Cart"
                  >
                    <div className="position-relative">
                      <svg
                        width="35px"
                        height="35px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#4e1100"
                        strokeWidth="0.24000000000000005"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M11.25 18.75C11.25 19.58 10.58 20.25 9.75 20.25C8.92 20.25 8.25 19.58 8.25 18.75C8.25 17.92 8.92 17.25 9.75 17.25C10.58 17.25 11.25 17.92 11.25 18.75ZM16.25 17.25C15.42 17.25 14.75 17.92 14.75 18.75C14.75 19.58 15.42 20.25 16.25 20.25C17.08 20.25 17.75 19.58 17.75 18.75C17.75 17.92 17.08 17.25 16.25 17.25ZM20.73 7.68L18.73 15.68C18.65 16.01 18.35 16.25 18 16.25H8C7.64 16.25 7.33 15.99 7.26 15.63L5.37 5.25H4C3.59 5.25 3.25 4.91 3.25 4.5C3.25 4.09 3.59 3.75 4 3.75H6C6.36 3.75 6.67 4.01 6.74 4.37L7.17 6.75H20C20.23 6.75 20.45 6.86 20.59 7.04C20.73 7.22 20.78 7.46 20.73 7.68ZM19.04 8.25H7.44L8.62 14.75H17.41L19.04 8.25Z"
                            fill="#4e1100"
                          ></path>
                        </g>
                      </svg>
                      <span className="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-bg-secondary">
                        {totalItemsInCart}
                      </span>
                    </div>
                  </button>
                </Link>
                <button
                  className="btn text-white me-2"
                  style={{ backgroundColor: "#4e1100" }}
                  onClick={handleShow}
                >
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`modal ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: show ? "block" : "none" }}
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ backgroundColor: "#4e1100" }}>
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="modal-title text-white fw-bold">
                Login or Sign Up
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs" id="loginTab" role="tablist">
                <li className="nav-item fw-bold">
                  <a
                    className={`nav-link ${
                      activeTab === "login" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("login")}
                    aria-controls="login"
                    aria-selected={activeTab === "login"}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item fw-bold">
                  <a
                    className={`nav-link ${
                      activeTab === "signup" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("signup")}
                    aria-controls="signup"
                    aria-selected={activeTab === "signup"}
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="loginTabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "login" ? "show active" : ""
                  }`}
                  id="login"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                >
                  <form>
                    <div className="form-group mt-2">
                      <label htmlFor="loginEmail" className="text-white">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="loginPassword" className="text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn  mt-2 text-dark bg-white fw-bold"
                      style={{ backgroundColor: "#4e1100" }}
                    >
                      Login
                    </button>
                  </form>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "signup" ? "show active" : ""
                  }`}
                  id="signup"
                  role="tabpanel"
                  aria-labelledby="signup-tab"
                >
                  <form>
                    <div className="form-group mt-2">
                      <label htmlFor="signupEmail" className="text-white">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="signupEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label htmlFor="signupPassword" className="text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="signupPassword"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn mt-2 text-dark bg-white fw-bold"
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodNavbar;
