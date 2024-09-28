import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Modal,
  Button,
  Dropdown,
} from "react-bootstrap";


import FoodNavbar from "../../Components/Navbar/NavBar";
import HomeSliderImg from "../../assets/image 13HomeSliderImg.png";
import { HeartFill, Heart } from "react-bootstrap-icons";
import "./HomePage.css";
import ProductCarousel from "../../Components/Carousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VegPickles from "../../Components/Vegpickles/VegPickles";
import NonVegPickles from "../../Components/NonVeg/NonvegPickles";
import Sweets from "../../Components/Sweets/SweetsPage";
import VegCarousel from "../../Components/VegPicklesCarousel/VegCarousel";
import NonVegCarousel from "../../Components/NonVegCarousel/NonVegCarousel";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/SidebarHome/SideBar";
import nonVegImage from '../../assets/non-veg_Pickels-01.jpg'; // Adjust the path
import vegImage from '../../assets/Veg_8-01.jpg';
import SweetsImg from '../../assets/sweets 2sweetsimg.png';
import SnacksImg from '../../assets/snacks.png';
import { Link } from "react-router-dom";
import vegBanner from '../../assets/image.png';
import SweetsBanner from '../../assets/Group 299.png'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <FoodNavbar />
      <div className="Container">
        <div className="demo">
          <div className="container">
            <div className="row " style={{ height: "100%" }}>
              {/* <div className="col-lg-4 col-sm-12">
                <Sidebar />
              </div> */}
              <div className="col-lg-12 col-sm-12 d-flex flex-column">
                {/* <div className=" row searchgroup m-0 p-0 d-flex justify-content-evenly ">
                  <div className="col-lg-7 col-sm-8 m-0 p-0">
                    <input
                      placeholder=""
                      type="search"
                      className="SearchInput "
                    />
                  </div>
                  <div className="col-lg-5 col-sm-4 m-0 p-0">
                    <button
                      className=" w-100 text-light py-1 text-center "
                      style={{ backgroundColor: "#4e1100" }}
                    >
                      search
                    </button>
                  </div>
                </div> */}
                <div>
                  <div className='carouselconatiner mt-3'>


             
{/* 
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">
        <div className="carousel-item active" data-interval="6000">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center">
              <p className="picklestyles">VEGETARIAN PICKLES</p>
              <p className="text-white">
                Healthy vegetable pickles are packed with probiotics, vitamins, and minerals, supporting digestion and overall well-being. Enjoy their tangy crunch for a nutritious and delicious addition to any meal.
              </p>
              <div className="mt-4 d-flex justify-content-center">
                <Link to='/VegPage' className="btn ordernow">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={vegBanner} alt="veg banner" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="carousel-item" data-interval="6000">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center p-2">
              <h2 className="picklestyles">NON-VEGETARIAN PICKLES</h2>
              <div className="mt-4 d-flex justify-content-center">
                <Link to='/NonVegPage' className="btn ordernow">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={vegBanner} alt="veg banner" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="carousel-item" data-interval="6000">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="picklestyles">SWEETS</h2>
              <div className="mt-4 d-flex justify-content-center">
                <Link to='/' className="btn ordernow">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={vegBanner} alt="veg banner" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="carousel-item" data-interval="6000">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="picklestyles">SNACKS</h2>
              <div className="mt-4 d-flex justify-content-center">
                <Link to='/' className="btn ordernow">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <img src={vegBanner} alt="veg banner" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

</div> */}
                <Carousel controls={false} pause={false}>
      <Carousel.Item interval={6000}>
      <div className="row d-flex justify-content-between align-items-center">
   
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center">
        <p className="picklestyles">VEGETARIAN PICKLES</p>
        <p className="text-white px-5">Healthy vegetable pickles are packed with probiotics, vitamins, and minerals, supporting digestion and overall well-being. Enjoy their tangy crunch for a nutritious and delicious addition to any meal.</p>
        <div className=" mt-4 d-flex justify-content-center">
        <Link to='/VegPage' className="btn ordernow">
              Shop Now
            </Link>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
        <img src={vegBanner} alt="veg banner" className="img-fluid" />
      </div>
    </div>
      </Carousel.Item>
    
      <Carousel.Item interval={6000}>
      <div className="row d-flex justify-content-between align-items-center">
   
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center p-2">
        <h2 className="picklestyles">NON-VEGETARIAN PICKLES</h2>
        <p className="text-white px-5">Non-vegetarian pickles offer savory flavors and textures, blending meats with traditional spices for a tangy, satisfying culinary experience. Enjoy them as a flavorful complement to meals or snacks.</p>
        <div className=" mt-4 d-flex justify-content-center">
        <Link to='/NonVegPage' className="btn ordernow">
              Shop Now
            </Link>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
        <img src={vegBanner} alt="veg banner" className="img-fluid" />
      </div>
    </div>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      <div className="row d-flex justify-content-between align-items-center">
   
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="picklestyles">SWEETS</h2>
        <p className="text-white px-5">Homemade sweets are crafted with love and care, capturing authentic flavors and traditions passed down through generations, creating nostalgic moments with every delightful bite.</p>
        <div className=" mt-4 d-flex justify-content-center">
        <Link to='/' className="btn ordernow">
              Shop Now
            </Link>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
        <img src={SweetsBanner} alt="veg banner" className="img-fluid" />
      </div>
    </div>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      <div className="row d-flex justify-content-between align-items-center">
   
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center">
        <h2 className="picklestyles">SNACKS</h2>
        <p className="text-white px-5">Snacks provide quick bites of deliciousness, offering a variety of flavors and textures to satisfy cravings and keep you energized throughout the day.</p>
        <div className=" mt-4 d-flex justify-content-center">
        <Link to='/' className="btn ordernow">
              Shop Now
            </Link>
        </div>
      </div>
      <div className="col-sm-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
        <img src={vegBanner} alt="veg banner" className="img-fluid" />
      </div>
    </div>
      </Carousel.Item>
     
    </Carousel>
    </div>

         <div className=" py-3">
      <div className="row ">
        <div className="col-lg-3 col-md-6 col-sm-12 position-relative text-center">
          <Link to='/NonVegPage'>
          <div className="card categorycard ">
          <img src={nonVegImage} alt="Non Veg Pickles" className="img-fluid pickimg" />
          <div className="overlay">
            <h4 className="picklestyle">Non Veg Pickles</h4>
            <div className="py-1">
            <Link to='/NonVegPage'
              className="btn ordernow "
            
            >
         Shop Now
            </Link>
            </div>
          </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 position-relative">
        <div className="card categorycard ">
          <img src={vegImage} alt="Veg Pickles" className="img-fluid pickimg" />
          <div className="overlay">
            <h4 className="picklestyle">Veg Pickles</h4>
            <div className="py-1">
            <Link to='/VegPage'
              className="btn ordernow "
            
            >
         Shop Now
            </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 position-relative">
        <div className="card categorycard ">
          <img src={SweetsImg} alt="Veg Pickles" className="img-fluid pickimg" />
          <div className="overlay">
            <h4 className="picklestyle">Sweets</h4>
            <div className="py-1"> <Link to='/VegPage'
              className="btn ordernow "
            
            >
         Shop Now
            </Link>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 position-relative">
        <div className="card categorycard ">
          <img src={SnacksImg} alt="Veg Pickles" className="img-fluid pickimg" />
          <div className="overlay">
            <h4 className="picklestyle">Snacks & Fryums</h4>
            
            <div className="py-1"><Link to='/VegPage'
              className="btn ordernow "
            
            >
         Shop Now
            </Link></div>
          </div>
          </div>
        </div>
      </div>
    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(255, 175, 0, 0.1)" }}
      >
        <div className="py-4">
          <ProductCarousel />
        </div>
      </div>
      <div
        className="container "
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="py-3">
          <h4 className="text-center py-2">Featured Products</h4>
          <div className="row">
            <div className="col">
              <ul className="nav nav-tabs">
             
                <li className="nav-item mx-2">
                  <button
                    className={`nav-link ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("tab2")}
                  >
                    Veg-Pickles
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className={`nav-link ${
                      activeTab === "tab3" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("tab3")}
                  >
                    Non-Veg Pickles
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className={`nav-link ${
                      activeTab === "tab4" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("tab4")}
                  >
                    Sweets
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    className={`nav-link ${
                      activeTab === "tab5" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("tab5")}
                  >
                    Other Products
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
               
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab2" ? "show active" : ""
                  }`}
                  id="tab2"
                >
                  <VegPickles />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab3" ? "show active" : ""
                  }`}
                  id="tab3"
                >
                  <NonVegPickles />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab4" ? "show active" : ""
                  }`}
                  id="tab4"
                >
                  <Sweets />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "tab5" ? "show active" : ""
                  }`}
                  id="tab5"
                >
                  <h2>Tab 5 Content</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
