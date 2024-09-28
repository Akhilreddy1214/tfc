


import React, { useState } from 'react'
import FoodNavbar from '../../Components/Navbar/NavBar';
import './Contact.css'
import Footer from '../../Components/Footer/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <FoodNavbar />
      <div className="container adress">
        <h2 className='text-center py-3'>Contact Us</h2>
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-4 col-md-4 col-sm-6 col-x-sm-12 mt-4 mb-3'>
            <div className="card adresscard h-100">
              <i className="bi bi-geo-alt-fill adressicon text-center"></i>
              <div className='text-center px-2 contacttext'>
                <p className='fw-bold'>
                  LMV FOODS<br />
                  5-41/2, Sri Venkateswara Society, Kompally,<br />
                  Dundigal, Gandimaisamma, Medchal, Medchal-Malkajgiri,<br />
                  Telangana-500014
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-6 col-x-sm-12 mt-4 mb-3'>
            <div className="card adresscard h-100">
              <i className="bi bi-envelope-fill adressicon text-center"></i>
              <div className='text-center px-2 contacttext'>
                <p className='fw-bold'>Info@Telugufood.club</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-6 col-x-sm-12 mt-4 mb-3'>
            <div className="card adresscard h-100">
              <i className="bi bi-telephone-fill adressicon text-center"></i>
              <div className='text-center px-2 contacttext'>
                <p className='fw-bold'>+91-8142044044</p>
                <p className='fw-bold'>+91-9959777898</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: 'rgba(255,250,239,0.8)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-2 mb-2 bg-white border-white rounded-3">
              <h5 className='text-center py-2'>Fill the form below We will call you soon</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className='mt-2'>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='mt-2'>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='mt-2'>Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='mt-2'>Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className='mt-2'>Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className='mx-auto mt-2 mb-2 text-center w-100'>
                  <button type="submit" className="btn btn-primary w-50">Submit</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-sm-12 mt-2 mb-2">
              <div className='px-1 py-2'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4464600999904!2d78.47326171088572!3d17.533917998497646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb859c9fc9d825%3A0xb944c88d97649c69!2sLMV%20FOODS!5e0!3m2!1sen!2sin!4v1720863701910!5m2!1sen!2sin" width="100%" height="400px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
