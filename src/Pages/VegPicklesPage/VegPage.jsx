import React from 'react'
import FoodNavbar from '../../Components/Navbar/NavBar'
import VegPickles from '../../Components/Vegpickles/VegPickles'
import Footer from '../../Components/Footer/Footer'


const VegPage = () => {
  return (
    <div>
   
        <FoodNavbar/>
        <div className='container'>
        <h3 className='text-center py-2'>Veg-Pickles</h3>
        <div className='' style={{boxShadow:''} }> 
          <VegPickles />
   </div>
        </div>
        <Footer />



    </div>
  )
}

export default VegPage
