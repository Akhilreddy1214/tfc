






import React from 'react';
import logo from '../../assets/telugu1 Logo Main-01 (1).png'
import './Footer.css'
function Footer() {
  return (
    <div>
      <div className="footer-area">
        <div className="container">
        {/* <img src={logo} alt="" width='180' />    */}
          <div className="row">
            <div className="col-md-6 col-lg-3 col-sm-12 mt-2 mb-2">
            <h6 className="footer-heading">Reach Us</h6>
              <div className="footer-underline"></div>
             
            <ul className="list-unstyled">
              <li className='fw-bold'>Address:</li>
              <li>Lmv Foods</li> <li> 5-41/2, Sri Venkateswara Society, Kompally,</li>
              <li>Dundigal, Gandimaisamma, Medchal,</li>
              <li>Medchal-Malkajgiri, Telangana-500014</li>
              <li className='py-2'>Phone Number: 8142044044, 9959777898</li>
              <li className='py-2'>Email Id: info@telugufood.club</li>
            </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 mt-2 mb-2">
              <h6 className="footer-heading">Useful Links</h6>
              <div className="footer-underline"></div>
           
            <ul className="list-unstyled">
            <li className='Footerlink'><a href="#about-us">About Us</a></li>
                <li className='Footerlink'><a href="#our-products">Our Products</a></li>
                <li className='Footerlink'><a href="#about-our-shop">About Our Shop</a></li>
                <li className='Footerlink'><a href="#secure-shopping">Secure Shopping</a></li>
                <li className='Footerlink'><a href="#delivery-information">Delivery Information</a></li>
                <li className='Footerlink'><a href="#privacy-policy">Privacy Policy</a></li>
                <li className='Footerlink'><a href="#our-sitemap">Our Sitemap</a></li>
                <li className='Footerlink' ><a href="#who-we-are">Who We Are</a></li>
                <li className='Footerlink'><a href="#our-services">Our Services</a></li>
                <li className='Footerlink'><a href="#testimonials">Testimonials</a></li>
            </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 mt-2 mb-2">
            <h6 className="footer-heading">Our Products</h6>
              <div className="footer-underline"></div>
           
            <ul className="list-unstyled">
            <li className='Footerlink'><a href="#about-us">Veg Pickles</a></li>
                <li className='Footerlink'><a href="#our-products">Non-Veg Pickles</a></li>
                <li className='Footerlink'><a href="#about-our-shop">Sweets</a></li>
               
            </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 mt-2 mb-2">
              <h4 className="footer-heading">Reach Us</h4>
              <div className="footer-underline"></div>
              <div className="mb-2 w-100 d-flex flex-column">
              <div className="d-flex align-items-center w-100">
              <input 
        style={{
          backgroundColor: 'white',
          fontSize: '17px',
          color: 'black',
          borderTopLeftRadius: '.5em',
          borderBottomLeftRadius: '.5em',
          border: '1px solid #4e1100',
          transition: 'background-color 5000s ease-in-out 0s',
        }}
        className="email-input "
        placeholder="Enter your email"
        name="email"
        type="email"
      />
      <button className="subscribe-button  ">Subscribe</button>
    </div>
    <div className=' mb-2'>
      <h4 className='fw-bold pt-4'>Follow Us</h4>
      <ul className="example-1">
        <li className="icon-content">
          <a
            className="link"
            data-social="Facebook"
            aria-label="Facebook"
            href="https://www.Facebook.com/"
          >
        <span style={{color:"#4e1100"}}><i className="bi bi-facebook fs-3 " ></i></span> 
          </a>
          <div className="tooltip">Facebook</div>
        </li>
        <li className="icon-content">
          <a
            className="link"
            data-social="Whatsaap"
            aria-label="Whatsaap"
            href="https://web.whatsapp.com/"
          >
           <span style={{color:"#4e1100"}}> <i className="bi bi-whatsapp fs-3"></i></span>
          </a>
          <div className="tooltip">Whatsaap</div>
        </li>
        <li className="icon-content">
          <a
            className="link"
            data-social="instagram"
            aria-label="instagram"
            href="https://www.instagram.com/"
          >
            <span style={{color:"#4e1100"}}>  
          <i className="bi bi-instagram fs-3"></i>
          </span>
          </a>
          <div className="tooltip">instagram</div>
        </li>
        <li className="icon-content">
          <a
            className="link"
            data-social="twitter"
            aria-label="twitter"
            href="https://www.twitter.com/"
          >
          <span style={{color:"#4e1100"}}>  <i className="bi bi-twitter fs-3"></i></span>
          </a>
          <div className="tooltip">twitter</div>
        </li>
      
      </ul>
    </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className=""> &copy; Copyrights @2023 All rights reserved. </p>
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <div className="text-white">
               Powered By LMV Foods
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
                                                                                                                                                                                                                                                                              
