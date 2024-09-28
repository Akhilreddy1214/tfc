import React from 'react'
import FoodNavbar from '../../Components/Navbar/NavBar'
import Footer from '../../Components/Footer/Footer'
import NonVegPickles from '../../Components/NonVeg/NonvegPickles'


const NonVegPage = () => {
  return (
    <div>
   
        <FoodNavbar/>
        <div className='container'>
        <h3 className='text-center py-2'>Non-Veg Pickles</h3>
        <div className='' style={{boxShadow:''} }> 
         <NonVegPickles />
   </div>
        </div>
        <Footer />



    </div>
  )
}

export default NonVegPage
